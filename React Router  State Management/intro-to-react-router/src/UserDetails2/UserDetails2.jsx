import { use, useState } from 'react'
import { Navigate } from 'react-router'
export default function UserDetails2({userPromise}) {
    const [visitHome,setVisitHome] = useState(false)
    const {name,username,email} = use(userPromise)
    if(visitHome){
        return <Navigate to="/"></Navigate>
    }
  return (
    <div>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  )
}
