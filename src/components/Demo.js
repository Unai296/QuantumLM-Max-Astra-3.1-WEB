import { html, useEffect, useRef, useState } from '../react.js';
import { CHAT, MOODS } from '../data.js';
import Face from './Face.js';

export default function Demo() {
  const [mood,setMood]=useState('feliz');
  const [q,setQ]=useState(null);
  const [txt,setTxt]=useState('');
  const tm=useRef();
  const ask=c=>{
    clearInterval(tm.current);
    setQ(c.q);
    setMood('escuchando');
    setTxt('');
    let i=0;
    setTimeout(()=>{
      setMood(c.m);
      tm.current=setInterval(()=>{
        i++;
        setTxt(c.a.slice(0,i));
        if(i>=c.a.length)clearInterval(tm.current);
      },28);
    },700);
  };
  useEffect(()=>()=>clearInterval(tm.current),[]);
  return html`<section id="demo"><div className="wrap demo">
    <div><div className="screen"><${Face} mood=${mood}/></div>
      <div className="moods" role="group" aria-label="Estado de ánimo de Max">${Object.keys(MOODS).map(k=>html`<button key=${k} className="chip" aria-pressed=${mood===k} onClick=${()=>setMood(k)}>${MOODS[k].n}</button>`)}</div></div>
    <div><h2>Una cara para cada momento.</h2>
      <p className="lead">La pantalla de píxeles de Max muestra cómo se siente. Cambia su ánimo o pregúntale algo para ver cómo reacciona.</p>
      <div className="chat"><div className="moods" style=${{marginTop:0,marginBottom:18}}>${CHAT.map(c=>html`<button key=${c.q} className="chip" onClick=${()=>ask(c)}>${c.q}</button>`)}</div>
        <div className="msgs" aria-live="polite">${q?html`<div className="u">Tú: ${q}</div><div className=${'m'+(txt.length&&txt.length<CHAT.find(c=>c.q===q).a.length?' cur':'')}>${txt}</div>`:html`<div className="u">Elige una frase para empezar.</div>`}</div></div>
    </div></div></section>`;
}
