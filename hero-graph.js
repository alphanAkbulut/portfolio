/* Product Flow Lab / Particle narrative.
 * Original Canvas 2D + SVG animation; no ThreeUI source, no external dependencies.
 * Scenario is synthetic. Phases: entropy > network > blocker > lightning > AA.
 */
(() => {
  "use strict";
  const root=document.getElementById("product-graph");
  if(!root)return;
  const el=id=>root.querySelector("#"+id);
  const canvas=root.querySelector(".pg-canvas");
  const ctx=canvas?.getContext?.("2d",{alpha:true});
  // A full-hero ambient Canvas is separate from the static right-side diagram.
  const ambientCanvas=document.createElement("canvas");
  ambientCanvas.className="pg-ambient-canvas";
  ambientCanvas.setAttribute("aria-hidden","true");
  root.insertBefore(ambientCanvas,root.firstChild);
  const ambientCtx=ambientCanvas.getContext("2d",{alpha:true});
  const routes=[...root.querySelectorAll(".pg-link")];
  const nodes=[...root.querySelectorAll(".pg-node")];
  const diagram=root.querySelector(".pg-svg");
  const button=el("pg-resolve"),buttonText=el("pg-button-label"),flag=el("pg-flag-label"),liveStatus=el("pg-a11y-status");
  const shapeSelect=el("pg-shape"),pauseButton=el("pg-pause"),colors=[...root.querySelectorAll(".pg-swatch")];
  const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||false;
  const palettes={
    mint:{r:166,g:243,b:195},
    cyan:{r:124,g:217,b:255},
    amber:{r:255,g:210,b:155}
  };
  let seed=241963;
  function rand(){seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296}
  const count=window.matchMedia?.("(max-width: 600px)")?.matches?440:(window.matchMedia?.("(max-width: 1000px)")?.matches?780:1100);
  let tone=palettes.mint,shape="drop",phase=reduced?"blocked":"intro";
  let phaseElapsed=0,now=0,renderedMorph=0,rewindStartMorph=0,instantFinal=false;
  let paused=reduced,visible=true,last=0,lastDraw=0,active=true;
  let surfaceWidth=0,surfaceHeight=0,particleSprite=null;
  const paths=routes.map(node=>{
    try{return {node,length:node.getTotalLength()}}catch{return {node,length:0}}
  });
  const point=(path,t)=>path.node.getPointAtLength(Math.max(0,Math.min(1,t))*path.length);
  const dots=Array.from({length:count},(_,i)=>({
    x:rand()*1200,y:rand()*720,scatterX:rand()*1200,scatterY:rand()*720,
    graphX:0,graphY:0,logoX:0,logoY:0,
    size:.45+rand()*.73,alpha:.46+rand()*.52,speed:.35+rand()*.7,
    seed:rand()*6.283,drift:rand()*1.7+.5
  }));

  // Independent PRNG keeps the old right-hand network particle arrangement identical.
  let ambientSeed=739271;
  function ambientRandom(){
    ambientSeed=(Math.imul(1664525,ambientSeed)+1013904223)>>>0;
    return ambientSeed/4294967296;
  }
  const ambientCount=window.matchMedia?.("(max-width:600px)")?.matches?95:
    (window.matchMedia?.("(max-width:850px)")?.matches?155:290);
  const ambientDots=Array.from({length:ambientCount},()=>({
    x:ambientRandom(),y:ambientRandom(),speed:.004+ambientRandom()*.012,
    size:.47+ambientRandom()*.58,opacity:.44+ambientRandom()*.44,
    phase:ambientRandom()*Math.PI*2,drift:4+ambientRandom()*11
  }));
  let ambientWidth=0,ambientHeight=0;
  function resizeAmbient(){
    if(!ambientCtx)return;
    const rect=ambientCanvas.getBoundingClientRect();
    ambientWidth=rect.width;ambientHeight=rect.height;
    if(ambientWidth<10||ambientHeight<10)return;
    const dpr=Math.min(window.devicePixelRatio||1,1.5);
    const w=Math.max(1,Math.ceil(ambientWidth*dpr));
    const h=Math.max(1,Math.ceil(ambientHeight*dpr));
    if(ambientCanvas.width!==w||ambientCanvas.height!==h){
      ambientCanvas.width=w;ambientCanvas.height=h;
    }
    ambientCtx.setTransform(w/ambientWidth,0,0,h/ambientHeight,0,0);
  }
  function drawAmbient(){
    if(!ambientCtx||!particleSprite||!ambientWidth||!ambientHeight)return;
    const a=ambientCtx;
    a.clearRect(0,0,ambientWidth,ambientHeight);
    a.save();
    a.globalCompositeOperation="screen";
    const settle=phase==="intro" ? (.55+.45*smooth(phaseElapsed/3.9)) : 1;
    const quiet=phase==="logo" ? .65 : 1;
    const pulse=phase==="flash" ? .17*Math.exp(-Math.pow((phaseElapsed-.7)/.36,2)) : 0;
    for(const p of ambientDots){
      // Light signals drift continuously left-to-right, across the entire first screen.
      const normX=(p.x+now*p.speed)%1;
      const x=normX*ambientWidth;
      const y=p.y*ambientHeight+Math.sin(now*.43+p.phase+normX*6)*p.drift;
      // More restrained behind large type, brighter closer to the schematic.
      const luminance=.42+.58*smooth((normX-.18)/.62);
      a.globalAlpha=Math.min(1,p.opacity*(.33+.36*luminance)*settle*quiet+pulse*.11);
      const size=p.size*(luminance<.60 ? .8 : 1);
      a.drawImage(particleSprite,x-10*size,y-10*size,20*size,20*size);
    }
    a.restore();
  }

  const smooth=t=>{const x=Math.max(0,Math.min(1,t));return x*x*(3-2*x)};
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  const lerp=(a,b,t)=>a+(b-a)*t;
  const rgba=(c,a)=>"rgba("+c.r+","+c.g+","+c.b+","+a+")";
  function makeLogoTargets(){
    const targetCanvas=document.createElement("canvas");
    targetCanvas.width=1200;targetCanvas.height=720;
    const off=targetCanvas.getContext("2d",{willReadFrequently:true});
    if(!off)return;
    off.fillStyle="#fff";off.textAlign="center";off.textBaseline="middle";
    off.font="800 222px Arial, Helvetica, sans-serif";
    off.fillText("AA",930,285);
    off.font="700 20px Arial, Helvetica, sans-serif";
    if("letterSpacing" in off)off.letterSpacing="5px";
    off.fillText("PRODUCT THINKING",930,422);
    const data=off.getImageData(0,0,1200,720).data;
    let targets=[];
    for(let y=132;y<560;y+=3){
      for(let x=610;x<1180;x+=3){
        if(data[(y*1200+x)*4+3]>90 && rand()>.09)targets.push([x,y]);
      }
    }
    if(!targets.length)return;
    for(let i=0;i<dots.length;i++){
      const [x,y]=targets[Math.floor(rand()*targets.length)];
      dots[i].logoX=x+(rand()-.5)*1.8;
      dots[i].logoY=y+(rand()-.5)*1.8;
    }
  }
  function makeGraphTargets(){
    const coords=[[632,359],[762,238],[762,493],[900,359],[1042,238],[1042,493],[1154,359]];
    for(let i=0;i<dots.length;i++){
      const p=dots[i];
      if(i%6===0){
        const [cx,cy]=coords[Math.floor(rand()*coords.length)];
        const angle=rand()*Math.PI*2,radius=16+rand()*16;
        p.graphX=cx+Math.cos(angle)*radius;p.graphY=cy+Math.sin(angle)*radius;
      }else{
        const lane=Math.floor(rand()*paths.length);
        const path=paths[lane];
        if(!path?.length){p.graphX=rand()*1200;p.graphY=rand()*720;continue}
        const pos=point(path,rand());
        p.graphX=pos.x+(rand()-.5)*10;p.graphY=pos.y+(rand()-.5)*10;
      }
    }
  }
  function sprite(){
    if(!ctx)return;
    const c=document.createElement("canvas");c.width=38;c.height=38;
    const g=c.getContext("2d");
    const radial=g.createRadialGradient(19,19,0,19,19,17);
    radial.addColorStop(0,rgba(tone,.65));radial.addColorStop(.3,rgba(tone,.26));
    radial.addColorStop(1,rgba(tone,0));
    g.fillStyle=radial;g.fillRect(0,0,38,38);
    g.fillStyle=rgba(tone,.98);
    g.beginPath();
    if(shape==="diamond"){
      g.moveTo(19,12);g.lineTo(24,19);g.lineTo(19,26);g.lineTo(14,19);g.closePath();
    }else if(shape==="hex"){
      for(let j=0;j<6;j++){
        let a=j*Math.PI/3-Math.PI/2,x=19+Math.cos(a)*5.4,y=19+Math.sin(a)*5.4;
        j?g.lineTo(x,y):g.moveTo(x,y);
      }g.closePath();
    }else{
      g.moveTo(19,10);g.bezierCurveTo(22,15,24,18,23,21);
      g.bezierCurveTo(21,26,17,26,15,21);g.bezierCurveTo(14,18,16,15,19,10);g.closePath();
    }
    g.fill();
    particleSprite=c;
  }
  function drawDot(x,y,p,alpha=1,size=1){
    if(!particleSprite)return;
    ctx.globalAlpha=Math.max(0,Math.min(1,p.alpha*alpha));
    const scale=p.size*size;
    ctx.drawImage(particleSprite,x-9.5*scale,y-9.5*scale,19*scale,19*scale);
  }
  function status(state){
    root.dataset.phase=state;
    const resolved=state==="flash"||state==="logo";
    root.dataset.state=resolved?"resolved":"blocked";
    if(state==="rewind"){
      flag.textContent="REPLAYING";buttonText.textContent="Resetting…";button.disabled=true;
      liveStatus.textContent="The animation is resetting smoothly.";return;
    }
    button.disabled=false;
    flag.textContent=state==="flash"?"RESTORING":resolved?"PATH OPEN":"PATH BLOCKED";
    buttonText.textContent=resolved?"Replay":"Resolve blocker";
    liveStatus.textContent=state==="flash"?"The blocked path is reopening."
      :resolved?"Provider path restored. Replay to start again."
      :"Provider path blocked. Select Resolve blocker to see the recovery.";
  }
  function reset(){
    root.classList.remove("pg-lightning","pg-bloom");
    if(reduced||paused){
      phase="blocked";phaseElapsed=0;instantFinal=false;renderedMorph=0;
    }else{
      rewindStartMorph=renderedMorph;
      phase="rewind";phaseElapsed=0;
    }
    status(phase);
    if(ctx)paint();
  }
  function trigger(){
    if(phase==="rewind")return;
    if(phase==="flash"||phase==="logo"){reset();return}
    instantFinal=reduced||paused;
    phase=instantFinal?"logo":"flash";phaseElapsed=instantFinal?3:0;
    status(phase);
    if(phase==="flash"){
      // Single emphasis peak; neither a full-page white flash nor looping strobe.
      root.classList.remove("pg-lightning","pg-bloom");
      void root.offsetWidth;
      root.classList.add("pg-lightning","pg-bloom");
    }
    if(ctx)paint();
  }
  button.addEventListener("click",trigger);
  shapeSelect.addEventListener("change",()=>{shape=shapeSelect.value;sprite();paint()});
  colors.forEach(button=>button.addEventListener("click",()=>{
    if(!palettes[button.dataset.palette])return;
    tone=palettes[button.dataset.palette];root.dataset.palette=button.dataset.palette;
    colors.forEach(b=>b.setAttribute("aria-pressed",String(button===b)));
    sprite();paint();
  }));
  function togglePause(value){
    paused=value;
    pauseButton.textContent=paused?"Play motion":"Pause motion";
    pauseButton.setAttribute("aria-pressed",String(paused));
  }
  pauseButton.addEventListener("click",()=>togglePause(!paused));
  function resize(){
    if(!ctx)return;
    const bounds=canvas.getBoundingClientRect();
    surfaceWidth=bounds.width;surfaceHeight=bounds.height;
    if(surfaceWidth<10||surfaceHeight<10)return;
    const dpr=Math.min(window.devicePixelRatio||1,1.55);
    const w=Math.ceil(surfaceWidth*dpr),h=Math.ceil(surfaceHeight*dpr);
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
    // Match the SVG viewBox's uniform xMidYMid meet transform exactly.
    // Non-uniform scaling caused both clipping and stretched diagram geometry.
    const view={x:588,y:172,width:625,height:402};
    const zoom=Math.min(surfaceWidth/view.width,surfaceHeight/view.height);
    const offsetX=(surfaceWidth-view.width*zoom)*.5;
    const offsetY=(surfaceHeight-view.height*zoom)*.5;
    const sx=w/surfaceWidth,sy=h/surfaceHeight;
    ctx.setTransform(sx*zoom,0,0,sy*zoom,
      sx*(offsetX-view.x*zoom),sy*(offsetY-view.y*zoom));
    resizeAmbient();
    paint();
  }
  function drawWave(path,progress,boost){
    if(!path?.length||progress<=0)return;
    const samples=35;
    ctx.save();ctx.lineJoin="round";ctx.lineCap="round";
    ctx.globalCompositeOperation="screen";
    for(let layer=0;layer<3;layer++){
      const lineWidths=[13,5.5,1.65],opacities=[.12,.35,.95];
      ctx.beginPath();
      for(let i=0;i<=samples;i++){
        const u=(i/samples)*progress;
        const pt=point(path,u), jitter=(i===0||i===samples)?0:Math.sin(i*3.1+now*43)*((layer===2)?2.2:1.5);
        const x=pt.x,y=pt.y+jitter;
        i?ctx.lineTo(x,y):ctx.moveTo(x,y);
      }
      ctx.strokeStyle=layer===2?"rgba(240,255,252,.97)":rgba(tone,opacities[layer]*boost);
      ctx.lineWidth=lineWidths[layer]*boost;
      if(layer===2){ctx.shadowColor=rgba(tone,.75);ctx.shadowBlur=15}
      ctx.stroke();
    }
    ctx.restore();
  }
  function drawLightning(){
    if(phase!=="flash")return;
    const t=phaseElapsed;
    // Path 5 enters blocked provider; path 7 exits to delivery.
    // One primary traveling surge and one quieter afterglow.
    for(let pass=0;pass<2;pass++){
      const progress=clamp((t-pass*.26-.05)/.86,0,1);
      const strength=pass===0?1:.34;
      if(progress<=0||progress>=1)continue;
      const amount=progress*2;
      drawWave(paths[5],Math.min(amount,1),strength);
      if(amount>1)drawWave(paths[7],amount-1,strength);
    }
    const swell=Math.exp(-Math.pow((t-.59)/.22,2));
    if(swell>.003){
      ctx.save();ctx.globalCompositeOperation="screen";
      const grad=ctx.createRadialGradient(1010,360,7,1010,360,355);
      grad.addColorStop(0,rgba(tone,.3*swell));
      grad.addColorStop(.35,rgba(tone,.10*swell));
      grad.addColorStop(1,rgba(tone,0));
      ctx.fillStyle=grad;ctx.fillRect(0,0,1200,720);ctx.restore();
    }
  }
  function paint(){
    if(!ctx||!surfaceWidth||!surfaceHeight)return;
    drawAmbient();
    // Clear the backing pixels, not a transformed design rectangle.
    ctx.save();ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);ctx.restore();
    const isLogo=phase==="flash"||phase==="logo";
    // Keep transition time continuous across flash → logo (no hard morph jump).
    const eventTime=phase==="flash"?phaseElapsed:phase==="logo"?1.85+phaseElapsed:0;
    const morph=isLogo?(instantFinal?1:smooth((eventTime-.24)/3.05))
      :phase==="rewind"?rewindStartMorph*(1-smooth(phaseElapsed/1.35)):0;
    const reveal=phase==="intro"?smooth(phaseElapsed/3.9)
      :phase==="rewind"?1-smooth((phaseElapsed-1.10)/.95):1;
    renderedMorph=morph;
    // The line network fades with the particles instead of switching between scenes.
    const lineOpacity=phase==="intro"?.13+.82*reveal
      :phase==="rewind"?( .045+.91*(1-morph))*(.14+.86*reveal)
      :isLogo?.045+.91*(1-smooth((morph-.3)/.7)):.95;
    if(diagram)diagram.style.opacity=String(lineOpacity);
    ctx.save();ctx.globalCompositeOperation="screen";
    for(let i=0;i<dots.length;i++){
      const p=dots[i],orbit=now*(.8+p.speed*.33)+p.seed;
      const jitter=Math.sin(orbit)*p.drift;
      const baseX=lerp(p.scatterX,p.graphX,reveal)+jitter*(1-morph);
      const baseY=lerp(p.scatterY,p.graphY,reveal)+Math.cos(orbit*.87)*p.drift*(1-morph);
      const x=lerp(baseX,p.logoX,morph);
      const y=lerp(baseY,p.logoY,morph);
      const twinkle=.76+Math.sin(now*(1.8+p.speed)+p.seed)*.19;
      drawDot(x,y,p,(phase==="flash"?1.16:1)*twinkle,phase==="logo"?1.05:.77);
    }
    // Moving data packets show direction and velocity through actual SVG routes.
    const packetOpacity=(1-morph)*(phase==="intro"?.72:1);
    if(packetOpacity>.03){
      for(let i=0;i<paths.length;i++){
        if(i===7&&(phase==="intro"||phase==="blocked"))continue;
        const route=paths[i];
        if(!route.length)continue;
        for(let j=0;j<4;j++){
          let progress=(now*(isLogo?.3:.085)+j/4+i*.19)%1;
          if(i===5&&!isLogo)progress=Math.min(progress,.76);
          const pos=point(route,progress);
          const fake={size:.96,alpha:(.55+Math.sin(progress*Math.PI)*.35)*packetOpacity};
          drawDot(pos.x,pos.y,fake,1,1.45);
        }
      }
    }
    ctx.restore();
    if(phase==="intro"||phase==="blocked"){
      // The bottleneck shows a visibly accumulating queue.
      ctx.save();ctx.globalCompositeOperation="screen";
      for(let i=0;i<11;i++){
        const p={size:.8,alpha:.66};
        drawDot(995-(i%4)*8+Math.sin(now*1.3+i)*1.6,489+Math.floor(i/4)*9,p,.9,1.2);
      }
      ctx.strokeStyle="rgba(248,145,129,.22)";ctx.lineWidth=1;
      ctx.beginPath();ctx.arc(1042,493,31+Math.sin(now*2)*3,0,Math.PI*2);ctx.stroke();
      ctx.restore();
    }
    drawLightning();
  }
  function tick(t){
    if(!active)return;
    window.requestAnimationFrame(tick);
    if(!visible||document.hidden||!ctx||!surfaceWidth){last=0;return}
    if(t-lastDraw<16)return;
    const delta=last?Math.min((t-last)/1000,.05):.016;
    last=t;lastDraw=t;
    if(!paused){
      now+=delta;phaseElapsed+=delta;
      if(phase==="intro"&&phaseElapsed>=3.9){phase="blocked";phaseElapsed=0;status(phase)}
      else if(phase==="flash"&&phaseElapsed>=1.85){
        phase="logo";phaseElapsed=0;
        root.classList.remove("pg-lightning","pg-bloom");status(phase);
      }else if(phase==="rewind"&&phaseElapsed>=2.05){
        phase="intro";phaseElapsed=0;renderedMorph=0;instantFinal=false;status(phase);
      }
      paint();
    }
  }
  makeGraphTargets();
  makeLogoTargets();
  sprite();
  status(phase);
  togglePause(paused);
  if(ctx){
    resize();
    if(window.ResizeObserver){
      const observer=new ResizeObserver(resize);
      observer.observe(root.querySelector(".pg-map"));
      observer.observe(root);
    }
    else window.addEventListener("resize",resize,{passive:true});
    if(window.IntersectionObserver)new IntersectionObserver(entries=>{
      visible=entries.some(e=>e.isIntersecting);
      if(visible)last=0;
    },{threshold:.02}).observe(root);
    document.addEventListener("visibilitychange",()=>{last=0});
    if(!reduced)window.requestAnimationFrame(tick);
    else paint();
  }
})();