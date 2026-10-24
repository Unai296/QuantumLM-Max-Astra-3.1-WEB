import { html } from '../react.js';
import { LOGO } from '../assets.js';
import { go } from '../utils.js';

export default function Nav() {
  return html`<nav><div className="wrap">
    <div className="brand"><img src=${LOGO} alt=""/>QuantumLM</div>
    <div className="links">${[['demo','Conoce a Max'],['build','Desarrollo'],['feat','Qué hará'],['specs','Ficha']].map(([id,t])=>html`<button key=${id} onClick=${()=>go(id)}>${t}</button>`)}</div>
    <button className="btn" style=${{padding:'9px 20px'}} onClick=${()=>go('lista')}>Avísame</button>
  </div></nav>`;
}
