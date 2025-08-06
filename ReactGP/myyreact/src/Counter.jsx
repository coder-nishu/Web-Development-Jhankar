import React, { useState } from 'react'

export default function counter() {
    // let myData = 0;
    const [myData,setMyData] = useState(0);
      const myStyle = {
        border: "1px solid black",
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",
    };
    const increment = () => {
        setMyData(myData + 1)
    }
    const decrement = () => {
        setMyData(myData - 1)
        
    }

  return (
    <div style={myStyle}>
        <h1>Counter {myData}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}
