import React, { use } from 'react'
import { MoneyContext } from './FamilyTree'

export default function Sister() {
  const [money,setMoney] = use(MoneyContext)

  return (
    <div className='border'>Sister <br />
    <button onClick={() => {setMoney(money+100)}}>Add +100tk</button></div>
  )
}
