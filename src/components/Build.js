import { html, useEffect, useState } from '../react.js';
import { STEPS } from '../data.js';

export default function Build() {
  const [n,setN]=useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setN(v=>v<4?v+1:v),900);
    return ()=>clearInterval(id);
  },[]);
  return html`<section id="build"><div className="wrap split">
    <div className="term mono"><div className="h">&gt; building...</div><ul>${STEPS.map((s,i)=>html`<li key=${s} className=${i<n?'ok':''}><span className="ck">${i<n?'✓':''}</span>${s}${i===n&&n<5?html`<span className="cur"></span>`:''}</li>`)}</ul></div>
    <div><div className="big">58%</div><h2 style=${{fontSize:'clamp(28px,4vw,44px)'}}>Max se está construyendo ahora.</h2><p className="lead">El sistema base y el modelo de IA ya funcionan. Estamos puliendo la interfaz y la optimización antes de la versión final.</p></div>
  </div></section>`;
}
