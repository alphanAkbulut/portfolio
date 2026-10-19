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
  const routes=[...root.querySelectorAll(".pg-link")];
  const nodes=[...root.querySelectorAll(".pg-node")];
  const button=el("pg-resolve"),buttonText=el("pg-button-label"),flag=el("pg-flag-label");
  const insightStep=el("pg-insight-step"),insightTitle=el("pg-insight-title"),insightDetail=el("pg-insight-detail");
  const clockTitle=el("pg-clock-label"),clock=el("pg-clock-value"),hint=el("pg-map-hint");
  const shapeSelect=el("pg-shape"),pauseButton=el("pg-pause"),colors=[...root.querySelectorAll(".pg-swatch")];
  const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||false;
  const palettes={
    mint:{r:166,g:243,b:195},
    cyan:{r:124,g:217,b:255},
    amber:{r:255,g:210,b:155}
  };
  const guide={
    intake:["Input captured","A requirement enters the system. Identify the business objective and the source before choosing a solution."],
    analysis:["Analyze the requirement","Explore user journeys, stakeholder needs, dependencies and existing processes."],
    evidence:["Verify the evidence","Review relevant process rules, API behavior, operational data and logs before defining scope."],
    decision:["Decision logic","Evaluate rules, risk, impact and feasibility. Route only validated work into delivery."],
    rules:["Business rules evaluated","Define testable business conditions, exceptions and acceptance criteria."],
    provider:["External dependency","The illustrative provider integration is blocked. Information accumulates until the dependency is resolved."],
    output:["Delivery outcome","Resolved paths lead to implementation, acceptance testing and release readiness."]
  };
  let seed=241963;
  function rand(){seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296}
  const count=window.matchMedia?.("(max-width: 600px)")?.matches?570:1650;
  let tone=palettes.mint,shape="drop",phase=reduced?"blocked":"intro";
  let phaseElapsed=0,now=0,blockTime=12,recovery=0;
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
    off.fillText("AA",930,235);
    off.font="700 20px Arial, Helvetica, sans-serif";
    if("letterSpacing" in off)off.letterSpacing="5px";
    off.fillText("PRODUCT THINKING",930,350);
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
  function updateClock(){
    clockTitle.textContent=phase==="intro"||phase==="blocked"?"SIMULATED TIME":"TIME SINCE RECOVERY";
    const seconds=phase==="intro"||phase==="blocked"?blockTime:recovery;
    const format=n=>String(Math.floor(n)).padStart(2,"0");
    clock.textContent="T+"+format(seconds/60)+":"+format(seconds%60);
  }
  function status(state){
    root.dataset.phase=state;
    const resolved=state==="flash"||state==="logo";
    root.dataset.state=resolved?"resolved":"blocked";
    flag.textContent=state==="flash"?"RESOLVING":resolved?"RESOLVED":"BLOCKER";
    buttonText.textContent=resolved?"Replay scenario":"Resolve blocker";
    hint.textContent=state==="logo"?"COMPLEXITY / RESOLVED":resolved?"ALL PATHS / OPEN":"BOTTLENECK / PROVIDER PATH";
    if(resolved){
      insightStep.textContent="SYSTEM INSIGHT / RESOLVED";
      insightTitle.textContent=state==="logo"?"From complexity to clarity.":"Dependency cleared. Restoring flow.";
      insightDetail.textContent=state==="logo"?
        "The blocked dependency is resolved. Evidence, decisions and delivery paths converge into a clear outcome.":
        "A short lightning pulse travels the decision route as the network recovers.";
    }else{
      selectNode("provider");
    }
    updateClock();
  }
  function selectNode(id){
    if(!guide[id])return;
    nodes.forEach(n=>n.classList.toggle("is-selected",n.dataset.node===id));
    if(phase==="flash"||phase==="logo")return;
    insightStep.textContent="SYSTEM INSIGHT / INVESTIGATE";
    insightTitle.textContent=guide[id][0];insightDetail.textContent=guide[id][1];
  }
  nodes.forEach(n=>{
    const handle=()=>selectNode(n.dataset.node);
    n.addEventListener("click",handle);
    n.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){e.preventDefault();handle()}
    });
  });
  function reset(){
    phase=(reduced||paused)?"blocked":"intro";phaseElapsed=0;blockTime=12;recovery=0;
    root.classList.remove("pg-lightning","pg-bloom");
    status(phase);
    if(ctx)paint();
  }
  function trigger(){
    if(phase==="flash"||phase==="logo"){reset();return}
    phase=(reduced||paused)?"logo":"flash";phaseElapsed=0;recovery=0;
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
    const dpr=Math.min(window.devicePixelRatio||1,1.65);
    const w=Math.ceil(surfaceWidth*dpr),h=Math.ceil(surfaceHeight*dpr);
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
    ctx.setTransform(w/1200,0,0,h/720,0,0);
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
    ctx.clearRect(0,0,1200,720);
    const gather=smooth(phaseElapsed/3.4),isLogo=phase==="flash"||phase==="logo";
    const morph=isLogo?(phase==="logo"&&(reduced||paused)?1:smooth((phase==="logo"?1.7+phaseElapsed:phaseElapsed-1.14)/2.3)):0;
    const reveal=phase==="intro"?gather:1;
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
    if(t-lastDraw<22)return;
    const delta=last?Math.min((t-last)/1000,.058):.024;
    last=t;lastDraw=t;
    if(!paused){
      now+=delta;phaseElapsed+=delta;
      if(phase==="intro"&&phaseElapsed>3.4){phase="blocked";phaseElapsed=0;status(phase)}
      else if(phase==="blocked"){blockTime+=delta}
      else if(phase==="flash"){
        recovery+=delta;
        if(phaseElapsed>=1.85){
          phase="logo";phaseElapsed=0;root.classList.remove("pg-lightning","pg-bloom");
          status(phase);
        }
      }else if(phase==="logo"){recovery+=delta}
      paint();
    }
    if(Math.floor(t/250)!==Math.floor((t-25)/250))updateClock();
  }
  makeGraphTargets();
  makeLogoTargets();
  sprite();
  status(phase);
  togglePause(paused);
  if(ctx){
    resize();
    if(window.ResizeObserver)new ResizeObserver(resize).observe(root.querySelector(".pg-map"));
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