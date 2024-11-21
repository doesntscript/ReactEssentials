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

import { useEffect, useState } from "react";

import { CORE_CONCEPTS } from './data.js';



const DynamicDescription = () => {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * reactDescriptions.length);
      setDescriptionIndex(newIndex);
    }, 1500 );
    
    return () => clearInterval(intervalId);
  }, []);

  return reactDescriptions[descriptionIndex];
}



function Header() {
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
     <DynamicDescription /> React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

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

function CoreConcept({image, title , description}) {
  return (
    <>
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    </>
  )
}

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
  