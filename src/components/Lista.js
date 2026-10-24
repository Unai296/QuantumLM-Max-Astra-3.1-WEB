import { html, useState } from '../react.js';

export default function Lista() {
  const [ok,setOk]=useState(false);
  const [v,setV]=useState('');
  const sub=e=>{
    e.preventDefault();
    if(!/\S+@\S+\.\S+/.test(v))return;
    try{localStorage.setItem('maxastra_email',v)}catch(_){ }
    setOk(true);
  };
  return html`<section id="lista" style=${{textAlign:'center'}}><div className="wrap">
    <h2>Sé de los primeros en conocerlo.</h2><p className="lead" style=${{margin:'0 auto'}}>Deja tu correo y te avisamos cuando Max Astra 3.1 esté listo.</p>
    ${ok?html`<div className="ty">Estás en la lista. Gracias.</div>`:html`<form className="form" style=${{justifyContent:'center',maxWidth:560,margin:'28px auto 0'}} onSubmit=${sub}><input type="email" required placeholder="tu@correo.com" aria-label="Correo electrónico" value=${v} onChange=${e=>setV(e.target.value)}/><button className="btn" type="submit">Apuntarme</button></form>`}
  </div></section>`;
}
