/* Development-only font comparison; no tracking, no production dependency. */
(() => {
  const select=document.getElementById("typeface-choice");
  if(!select)return;
  const allowed=new Set(["instrument","manrope","system"]);
  let chosen="instrument";
  try{const stored=localStorage.getItem("portfolio_preview_typeface");if(allowed.has(stored))chosen=stored}catch(e){}
  document.documentElement.dataset.typeface=chosen;
  select.value=chosen;
  select.addEventListener("change",()=>{
    const value=select.value;
    if(!allowed.has(value))return;
    document.documentElement.dataset.typeface=value;
    try{localStorage.setItem("portfolio_preview_typeface",value)}catch(e){}
  });
})();