import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import './App.css'
import User from './User'
import Form from './Form';
function App() {
  // const [user,setUser] = useState([]);
  // useEffect(() => {
  //   fetch('https://dummyjson.com/users')
  //   .then(res => res.json())
  //   .then( data => setUser(data.users))
  // }, [])
  // console.log(user);
  // return (
  //   <>
  //   <Navbar/>
  //   <div className='flex gap-2 flex-wrap justify-center items-center p-4'> 
  //     {
  //       user.map(user => <User key={user.id} name={user.firstName +" "+ user.lastName} image={user.image} gender={user.gender} phone={user.phone} email = {user.email} />)
  //     }
  //   </div>
  //   </>
  // )
  return (
  <>
  <Form/>
  </>
  )
}

export default App
