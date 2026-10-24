import { html, useEffect, useState } from '../react.js';
import cubeImage from '../assets/cube.png';
import { go } from '../utils.js';

export default function Hero() {
  const [t, setT] = useState({ x: 0, y: 0 });
  const [p, setP] = useState(0);
  useEffect(() => {
    const a = setTimeout(() => setP(58), 300);
    return () => clearTimeout(a);
  }, []);
  const mv = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientX-r.left)/r.width-.5)*2, y: ((e.clientY-r.top)/r.height-.5)*2 });
  };
  return html`<header className="hero" onMouseMove=${mv} onMouseLeave=${()=>setT({x:0,y:0})}><div className="wrap">
    <div className="pre mono">EL EQUIPO DE QUANTUMLM ESTÁ TRABAJANDO EN EL</div>
    <h1 className="title">MAX <span>ASTRA 3.1</span></h1>
    <div className="stage"><img className="cube" src=${cubeImage} alt="Max Astra 3.1, el mini asistente de casa de QuantumLM" style=${{'--rx':(-t.y*9)+'deg','--ry':(t.x*12)+'deg'}}/><div className="tag">Max<br/>Astra 3.1</div></div>
    <div className="status"><div className="row mono"><span>EN DESARROLLO</span><span>${p}%</span></div><div className="bar"><i style=${{width:p+'%'}}></i></div></div>
    <div className="cta"><button className="btn" onClick=${()=>go('demo')}>Habla con Max</button><button className="btn ghost" onClick=${()=>go('lista')}>Unirme a la lista</button></div>
  </div></header>`;
}
