

// import React from 'react'

// const TabButton = (props) => {
//   return (
//     <>
//     <li><button> {props.children} </button></li>
//     </>
//   )
// }

// export default TabButton;


// Using with Object Destructuring
import React from 'react'

const TabButton = ({children , onSelect , isSelected}) => {
  
  return (
    <>
    <li><button className={isSelected ? 'active' : undefined} onClick={onSelect} > {children} </button></li>
    </>
  )
}

export default TabButton; 

// Atribute Props using variable label 

// const TabButton = ({ label }) => {
//   return (
//     <>
//     <li><button> {label} </button></li>
//     </>
//   )
// }

// export default TabButton; 