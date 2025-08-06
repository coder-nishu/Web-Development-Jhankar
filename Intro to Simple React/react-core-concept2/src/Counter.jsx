import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count+1;
        setCount(newCount);
    }
    const handleDelete = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
  return (
    <div style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
        <p>Count: {count}</p>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleDelete}>reduce</button>
    </div>

  )
}
