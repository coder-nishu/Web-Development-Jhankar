import React from 'react'

export default function Simpleform() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
  return (
    <div>
        <h3>This is form using on submit</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='your name'/>
            <br />
            <input type="email" name="email" placeholder="your email" />
            <br />
            <input type="submit" value="Submit Now" />
        </form>
    </div>
  )
}
