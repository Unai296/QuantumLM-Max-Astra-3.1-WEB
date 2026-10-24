import { html } from '../react.js';
import cubeImage from '../assets/cube.png';

export default function Specs() {
  const rows=[["Modelo","Max Astra 3.1"],["Marca","QuantumLM"],["Formato","Cubo compacto, negro con esquinas blancas"],["Pantalla","Matriz de píxeles con expresiones"],["Audio","Altavoz con rejilla frontal"],["Estado","En desarrollo 58%"]];
  return html`<section id="specs"><div className="wrap split" style=${{alignItems:'start'}}>
    <div><h2>Ficha técnica.</h2><table className="specs"><tbody>${rows.map(r=>html`<tr key=${r[0]}><td>${r[0]}</td><td>${r[1]}</td></tr>`)}</tbody></table><p className="note">Los datos definitivos se confirmarán en el lanzamiento.</p></div>
    <div style=${{display:'flex',justifyContent:'center'}}><img className="poster" src=${cubeImage} alt="Max Astra 3.1, el mini asistente de casa de QuantumLM"/></div>
  </div></section>`;
}
