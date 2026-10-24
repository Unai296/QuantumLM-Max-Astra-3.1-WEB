import { html } from '../react.js';
import { MOODS } from '../data.js';

export default function Face({ mood }) {
  const m = MOODS[mood];
  const cells = [];
  m.rows.forEach((r,y)=>[...r].forEach((c,x)=>cells.push(html`<b key=${y*16+x} className=${c==='#'?'on':''}></b>`)));
  return html`<div className=${'px'+(m.pulse?' pulse':'')} role="img" aria-label=${'Max está '+m.n.toLowerCase()}>${cells}</div>`;
}
