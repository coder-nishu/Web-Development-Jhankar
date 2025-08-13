import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import Users from './Users'
import Posts from './Posts'
import './App.css'
function handleClick(){
  alert("button clicked")
}
const handleClick2 = () => {
  alert("Clicked button 2")
}
const button3 = (num) =>{
 alert(num+10)
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core concept Part 2</h3>
      {/* <Users></Users> */}
      {<Posts></Posts>}
      <Counter/>
      <button onClick={handleClick}> Click Me</button>
      <button onClick={handleClick2}>I am button 2</button>
      <button onClick={() => {alert("its inside button")}}>inside onclick</button>
      {/* ektu vejaila */}
      <button onClick={() => button3(8)}>Button 3</button>
    </>
  )
}

export default App
