// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// Como importar imagens do React
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';


import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


// function CoreConcept(props) {
//   return (
//     <>
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//     </>
//   )
// }


function App() {
    return (
      <div>
       
       <Header />
        <main>
          <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title}  description={CORE_CONCEPTS[0].description} />
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>

          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
    );
  }
  
  export default App;
  