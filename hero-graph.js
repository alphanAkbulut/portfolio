/* Product Flow Lab: dependency-free animated diagram. All values are illustrative. */
(() => {
  "use strict";
  const root = document.getElementById("product-graph");
  if (!root) return;
  const canvas = root.querySelector(".pg-canvas");
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d", { alpha:true }) : null;
  const svg = root.querySelector(".pg-svg");
  const paths = Array.from(root.querySelectorAll(".pg-link"));
  const nodes = Array.from(root.querySelectorAll(".pg-node"));
  const resolveButton = root.querySelector("#pg-resolve");
  const resolveLabel = root.querySelector("#pg-button-label");
  const statusLabel = root.querySelector("#pg-flag-label");
  const insightStep = root.querySelector("#pg-insight-step");
  const insightTitle = root.querySelector("#pg-insight-title");
  const insightDetail = root.querySelector("#pg-insight-detail");
  const clockLabel = root.querySelector("#pg-clock-label");
  const clockValue = root.querySelector("#pg-clock-value");
  const graphHint = root.querySelector("#pg-map-hint");
  const shapeSelect = root.querySelector("#pg-shape");
  const pauseButton = root.querySelector("#pg-pause");
  const swatches = Array.from(root.querySelectorAll(".pg-swatch"));
  const reducedQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : {matches:false};
  const reduced = reducedQuery.matches;
  const palette = {
    mint: {r:166,g:243,b:195},
    cyan: {r:124,g:217,b:255},
    amber:{r:255,g:210,b:155}
  };
  const nodeContent = {
    intake:["Input captured","A new requirement or event enters the system. First, identify the source and its business purpose."],
    analysis:["Analyze the requirement","Examine workflow context, existing behavior, stakeholders, constraints, and dependencies before proposing changes."],
    evidence:["Verify the evidence","Compare sample API payloads, process rules, operational data, and logs to narrow down the problem."],
    decision:["Decision logic","Rules and validated evidence determine which delivery paths are applicable and which need further investigation."],
    rules:["Business rules evaluated","Define conditions, exceptions, and acceptance criteria. Check that the outcomes can be tested."],
    provider:["External dependency","Illustrative provider integration is blocked. One branch queues until the dependency is resolved."],
    output:["Delivery outcome","Validated work reaches the delivery stage. Release readiness depends on the affected paths and risks."]
  };
  let selected = "provider", isBlocked = true, paused = reduced, visible = true;
  let time = 0, elapsed = 12, recovery = 0, previous = 0, lastPaint = 0, frameId = 0, width = 0, height = 0;
  let shape = "drop", tone = palette.mint;
  let seed = 61917;
  function rnd() {seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed / 4294967296;}
  const rain = Array.from({length:38},(_,i)=>({
    x:rnd()*540,y:rnd()*300,vel:7+rnd()*17,scale:.5+rnd()*1.3,
    opacity:.10+rnd()*.26,drift:(rnd()-.5)*2.4,phase:rnd()*6.28
  }));
  const lengths = paths.map(p => {try{return p.getTotalLength()}catch(e){return 0}});
  function rgba(color,a){return "rgba("+color.r+","+color.g+","+color.b+","+a+")"}
  function pad(n){return Math.floor(n).toString().padStart(2,"0")}
  function fmt(sec){return "T+"+pad(sec/60)+":"+pad(sec%60)}
  function updateClock(){
    clockLabel.textContent = isBlocked ? "SIMULATED TIME" : "TIME SINCE RECOVERY";
    clockValue.textContent = isBlocked ? fmt(elapsed) : fmt(recovery);
  }
  function selectNode(id){
    if(!nodeContent[id])return;
    selected=id;
    nodes.forEach(n=>n.classList.toggle("is-selected",n.dataset.node===id));
    insightStep.textContent=isBlocked?"SYSTEM INSIGHT / INVESTIGATE":"SYSTEM INSIGHT / RESOLVED";
    const item=nodeContent[id];
    if(id==="provider" && !isBlocked){
      insightTitle.textContent="Dependency cleared. Flow restored.";
      insightDetail.textContent="The blocked integration path is available again. Follow the moving signals toward delivery.";
    } else {
      insightTitle.textContent=item[0];
      insightDetail.textContent=item[1];
    }
  }
  function updateState(){
    root.dataset.state=isBlocked?"blocked":"resolved";
    statusLabel.textContent=isBlocked?"BLOCKER":"RESOLVED";
    resolveLabel.textContent=isBlocked?"Resolve blocker":"Reset scenario";
    graphHint.textContent=isBlocked?"BOTTLENECK / PROVIDER PATH":"ALL PATHS / OPEN";
    selectNode(isBlocked?"provider":"provider");
    updateClock();
  }
  resolveButton.addEventListener("click",()=>{
    isBlocked=!isBlocked;
    if(!isBlocked)recovery=0;
    else elapsed=12;
    updateState();
    if(ctx)paint();
  });
  nodes.forEach(n=>{
    const action=()=>selectNode(n.dataset.node);
    n.addEventListener("click",action);
    n.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){e.preventDefault();action()}
    });
  });
  shapeSelect.addEventListener("change",()=>{shape=shapeSelect.value;if(ctx)paint()});
  swatches.forEach(button=>button.addEventListener("click",()=>{
    const key=button.dataset.palette;
    if(!palette[key])return;
    tone=palette[key];root.dataset.palette=key;
    swatches.forEach(b=>b.setAttribute("aria-pressed",String(b===button)));
    if(ctx)paint();
  }));
  function setPaused(val){
    paused=val;
    pauseButton.textContent=paused?"Play motion":"Pause motion";
    pauseButton.setAttribute("aria-pressed",String(paused));
    if(ctx)paint();
  }
  pauseButton.addEventListener("click",()=>setPaused(!paused));
  function resize(){
    if(!ctx)return;
    const box=canvas.getBoundingClientRect();
    width=box.width;height=box.height;
    if(width<10||height<10)return;
    const dpr=Math.min(window.devicePixelRatio||1,1.8);
    const w=Math.round(width*dpr),h=Math.round(height*dpr);
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
    ctx.setTransform(w/540,0,0,h/300,0,0);
    paint();
  }
  function drawParticle(x,y,s,a){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(-.2);
    ctx.fillStyle=rgba(tone,a);
    ctx.shadowColor=rgba(tone,Math.min(1,a*1.8));ctx.shadowBlur=7;
    ctx.beginPath();
    if(shape==="diamond"){
      ctx.moveTo(0,-s*1.55);ctx.lineTo(s,0);ctx.lineTo(0,s*1.55);ctx.lineTo(-s,0);ctx.closePath();
    }else if(shape==="hex"){
      for(let j=0;j<6;j++){
        const th=-Math.PI/2+j*Math.PI/3;
        const px=Math.cos(th)*s*1.35,py=Math.sin(th)*s*1.35;
        if(j===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
      }
      ctx.closePath();
    }else{
      ctx.moveTo(0,-s*2);ctx.bezierCurveTo(s*.6,-s,1.05*s,-.2*s,s*.85,s*.7);
      ctx.bezierCurveTo(s*.55,s*1.5,-s*.6,s*1.5,-s*.85,s*.7);
      ctx.bezierCurveTo(-s*1.05,-.2*s,-s*.6,-s,0,-s*2);ctx.closePath();
    }
    ctx.fill();ctx.restore();
  }
  function paint(){
    if(!ctx||!width||!height)return;
    ctx.clearRect(0,0,540,300);
    ctx.save();
    for(const d of rain){
      const yy=(d.y+time*d.vel)%320-10;
      const xx=(d.x+Math.sin(time*.24+d.phase)*3+d.drift*time*.12+540)%540;
      drawParticle(xx,yy,d.scale,d.opacity);
    }
    // Moving "information packets" trace the graph's actual SVG paths.
    for(let lane=0;lane<paths.length;lane++){
      if(lane===7&&isBlocked)continue;
      const path=paths[lane],len=lengths[lane];
      if(!len)continue;
      for(let i=0;i<3;i++){
        let progress=(time*(isBlocked?.085:.15)+i/3+lane*.157)%1;
        if(lane===5&&isBlocked)progress=Math.min(progress*.78,.78);
        const point=path.getPointAtLength(progress*len);
        const alpha=(.36+.40*Math.sin(Math.PI*progress)) * (lane===5&&isBlocked?.8:1);
        drawParticle(point.x,point.y,(i===0?2.3:1.6),alpha);
      }
    }
    // The stalled branch visibly accumulates work upstream of the blocker.
    if(isBlocked){
      for(let j=0;j<6;j++){
        const offset=j*.85+time*.35;
        drawParticle(369-Math.floor(j/2)*7+Math.sin(offset)*2.5,221+(j%3-1)*8,1.85,.63+j*.035);
      }
      ctx.strokeStyle="rgba(255,160,140,.20)";ctx.lineWidth=.9;
      const pulse=24+Math.sin(time*2.2)*3;
      ctx.beginPath();ctx.arc(403,225,pulse,0,Math.PI*2);ctx.stroke();
    }else{
      ctx.strokeStyle=rgba(tone,.19);ctx.lineWidth=.85;
      ctx.beginPath();ctx.arc(403,225,25+Math.sin(time*2.2)*3,0,Math.PI*2);ctx.stroke();
    }
    ctx.restore();
  }
  function step(stamp){
    frameId=window.requestAnimationFrame(step);
    if(!visible||document.hidden||!ctx||!width)return;
    if(stamp-lastPaint<32)return;
    let dt=previous?Math.min(.07,(stamp-previous)/1000):.033;
    previous=stamp;lastPaint=stamp;
    if(!paused){time+=dt;if(isBlocked)elapsed+=dt;else recovery+=dt;paint()}
    if(Math.floor(stamp/240)!==Math.floor((stamp-32)/240))updateClock();
  }
  if(window.IntersectionObserver){
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)previous=0},{threshold:0.02});
    observer.observe(root);
  }
  document.addEventListener("visibilitychange",()=>{previous=0});
  if(ctx){
    resize();
    if(window.ResizeObserver){new ResizeObserver(resize).observe(root.querySelector(".pg-map"))}
    else window.addEventListener("resize",resize,{passive:true});
    if(!reduced)frameId=window.requestAnimationFrame(step);
  }
  updateState();
  if(reduced){setPaused(true);if(ctx)paint()}
  // Keep the SVG as a fully readable, keyboard-operated fallback without Canvas.
})();