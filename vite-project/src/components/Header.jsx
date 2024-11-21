import reactImg from '../assets/react-core-concepts.png';

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

export default Header;
