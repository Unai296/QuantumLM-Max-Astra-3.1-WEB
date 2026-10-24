import { html, useState } from '../react.js';
import { FEATS } from '../data.js';

export default function Feats() {
  const [o,setO]=useState(0);
  return html`<section id="feat"><div className="wrap"><h2>Qué hará Max.</h2><p className="lead" style=${{marginBottom:48}}>Toca una fila para ver más.</p>
    ${FEATS.map((f,i)=>html`<div key=${f[1]} className=${'feat'+(o===i?' open':'')} role="button" tabIndex="0" onClick=${()=>setO(o===i?-1:i)} onKeyDown=${e=>(e.key==='Enter'||e.key===' ')&&(e.preventDefault(),setO(o===i?-1:i))}>
      <div className="ic">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p><div className="more">${f[3]}</div></div>`)}
  </div></section>`;
}
