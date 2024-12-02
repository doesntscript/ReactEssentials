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


import { CORE_CONCEPTS, EXAMPLES } from './data.js';

import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';


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

  // const [ selectedTopic, setSelectedTopic] = useState('components');
  const [ selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx' 'props', 'state'
    //  tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }


  {/*  Rendering Content Conditionally  - Renderizando Conteúdo Condicionalmente */}
  let tabContent = <p> Please select a topic. </p> ;

  if(selectedTopic) {
    tabContent = (
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    );
  }



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
          <section id='examples'>
            <h2>Exemples</h2>
            <menu>
              {/* <TabButton label="Components"/> */}
              <TabButton isSelected={selectedTopic === 'components'} onSelect={ () => handleSelect('components')} >Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={ () => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={ () => handleSelect('props')}>Pros</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={ () => handleSelect('state')}>State</TabButton>
            </menu>

            {/* <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div> */}

            {tabContent}
            
          </section>
        </main>
      </div>
    );
  }
  
  export default App;
  