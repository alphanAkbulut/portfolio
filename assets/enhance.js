/* Alphan Akbulut portfolio v2 — enhancements, no dependencies */
(function(){
  'use strict';
  var CFG={
    goatcounter:'',      // e.g. 'alphan' -> loads https://alphan.goatcounter.com/count (leave '' to disable)
    chameleonUrl:''      // e.g. 'https://alphanakbulut.github.io/chameleon/' -> shows the link in Contact
  };
  var root=document.documentElement; root.classList.add('js');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- analytics: tool-agnostic. Works with GoatCounter / Umami / Plausible if present ---- */
  function track(name,where){
    try{
      if(window.goatcounter&&window.goatcounter.count) window.goatcounter.count({path:'event/'+name+(where?'/'+where:''),title:name,event:true});
      if(window.umami&&window.umami.track) window.umami.track(name,{where:where});
      if(window.plausible) window.plausible(name,{props:{where:where}});
      window.dispatchEvent(new CustomEvent('portfolio:track',{detail:{name:name,where:where}}));
    }catch(e){}
  }
  window.track=track;
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('[data-track]'); if(a) track(a.getAttribute('data-track'),a.getAttribute('data-where')||'');
  });
  if(CFG.goatcounter){
    var s=document.createElement('script'); s.async=true;
    s.setAttribute('data-goatcounter','https://'+CFG.goatcounter+'.goatcounter.com/count');
    s.src='https://gc.zgo.at/count.js'; document.head.appendChild(s);
  }
  if(CFG.chameleonUrl){var c=document.getElementById('chameleon-link'); if(c){c.href=CFG.chameleonUrl; c.hidden=false;}}

  /* ---- scroll progress + topbar state + active nav ---- */
  var bar=document.createElement('div'); bar.className='progress'; bar.setAttribute('aria-hidden','true'); document.body.appendChild(bar);
  var top=document.querySelector('.topbar'), links=[].slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
  var tick=false;
  function onScroll(){
    if(tick) return; tick=true;
    requestAnimationFrame(function(){
      var h=document.documentElement.scrollHeight-innerHeight, y=scrollY;
      bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')';
      top&&top.classList.toggle('scrolled',y>30);
      var cur=null; secs.forEach(function(s){ if(s.getBoundingClientRect().top<innerHeight*.35) cur=s; });
      links.forEach(function(a){ a.classList.toggle('active',!!cur&&a.getAttribute('href')==='#'+cur.id); });
      tick=false;
    });
  }
  addEventListener('scroll',onScroll,{passive:true}); onScroll();

  /* ---- reveal on scroll (staggered) ---- */
  if(!reduce&&'IntersectionObserver' in window){
    var targets=document.querySelectorAll('.section .section-header,.section .two-col>*,.metric,.pillar,.job,.skill,.showcase,.credentials>div,.contact-grid>*,.flow-item');
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    [].forEach.call(targets,function(el,i){
      el.classList.add('rv');
      var sib=el.parentElement?[].indexOf.call(el.parentElement.children,el):0;
      el.style.setProperty('--d',Math.min(sib,5)*0.08+'s'); io.observe(el);
    });
    // safety: never leave content hidden
    setTimeout(function(){[].forEach.call(document.querySelectorAll('.rv:not(.in)'),function(el){var r=el.getBoundingClientRect(); if(r.top<innerHeight) el.classList.add('in');});},1800);
  }

  /* ---- cursor spotlight on cards ---- */
  if(!reduce&&matchMedia('(hover:hover)').matches){
    document.addEventListener('pointermove',function(e){
      var c=e.target.closest&&e.target.closest('.metric,.showcase'); if(!c) return;
      var r=c.getBoundingClientRect(); c.style.setProperty('--mx',(e.clientX-r.left)+'px'); c.style.setProperty('--my',(e.clientY-r.top)+'px');
    },{passive:true});
  }

  /* ---- count-up for metric numbers ---- */
  if(!reduce&&'IntersectionObserver' in window){
    var vals=document.querySelectorAll('.metric .value');
    var io2=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting) return; io2.unobserve(en.target);
        var el=en.target, node=null;
        for(var i=0;i<el.childNodes.length;i++){ if(el.childNodes[i].nodeType===3&&/\d/.test(el.childNodes[i].nodeValue)){node=el.childNodes[i];break;} }
        if(!node) return;
        var m=node.nodeValue.match(/^(\D*)([\d.,]+)(.*)$/); if(!m) return;
        var end=parseFloat(m[2].replace(/,/g,'')); if(!isFinite(end)) return;
        var dec=(m[2].split('.')[1]||'').length, t0=performance.now(), dur=1100;
        (function step(t){
          var p=Math.min(1,(t-t0)/dur), v=end*(1-Math.pow(1-p,3));
          node.nodeValue=m[1]+v.toFixed(dec)+m[3]; if(p<1) requestAnimationFrame(step); else node.nodeValue=m[1]+m[2]+m[3];
        })(t0);
      });
    },{threshold:.6});
    [].forEach.call(vals,function(v){io2.observe(v)});
  }
})();
