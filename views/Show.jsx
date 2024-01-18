import React from 'react'


const myStyle= {
  // color: "#0044FF",
  backgroundColor: "#55AAFF",
  
 
  
};

const Show = ({pokemon}) => {
  return (
    <div style={myStyle}>
      <h1 style={{color: "white"}}>You got to catch them all!</h1>
      <h2 
      >{pokemon.name}</h2>
      <img  src={pokemon.img}/>
      <br/>
      <a href='/pokemon'><h4>Goback</h4></a>
      
    </div>
  )
}

export default Show