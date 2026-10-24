import { html, React } from './react.js';
import Build from './components/Build.js';
import Demo from './components/Demo.js';
import Feats from './components/Feats.js';
import Hero from './components/Hero.js';
import Lista from './components/Lista.js';
import Nav from './components/Nav.js';
import Specs from './components/Specs.js';
import { LOGO } from './assets.js';

export default function App() {
  return html`<${React.Fragment}><${Nav}/><${Hero}/><${Demo}/><${Build}/><${Feats}/><${Specs}/><${Lista}/>
    <footer><div className="wrap"><div><img src=${LOGO} alt=""/>QuantumLM</div><div>Max Astra 3.1</div></div></footer><//>`;
}
