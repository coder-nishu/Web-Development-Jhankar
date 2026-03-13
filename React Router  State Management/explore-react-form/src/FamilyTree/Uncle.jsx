import React from 'react'
import Cousin from './Cousin'

export default function Uncle() {
  return (
    <div className='border'><h3>Uncle</h3>
    <div className="flex">
        <Cousin name={'isha'}/>
    <Cousin name={'sara'}/>
    </div>
    </div>
  )
}
