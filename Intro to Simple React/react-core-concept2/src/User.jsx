import React from 'react'

export default function ({props}) {
    const {name,email} = props;
    return (
        <div className='box'>
         <h5>Name: {name}</h5>
         <h5>Email: {email}</h5>
        </div>
    )
}
