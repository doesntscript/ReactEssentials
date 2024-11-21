// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// Como importar imagens do React
import reactImg from './assets/react-core-concepts.png';

import { useEffect, useState } from "react";




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


function App() {
    return (
      <div>
       <Header />
        <main>
          <h2>Time to get started!</h2>
        </main>
      </div>
    );
  }
  
  export default App;
  