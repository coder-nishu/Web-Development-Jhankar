import React, { useContext } from 'react'
import { AssetContext } from './FamilyTree'

export default function Brother() {
  const asset_2 = useContext(AssetContext)
  return (
    <div className='border'>
      Brother
      <h3>{asset_2}</h3>
    </div>
  )
}
