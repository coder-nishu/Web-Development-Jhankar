import React from 'react'

export default function Link({route}) {
  return (
    <div>
        <li className='mr-8'><a href={route.path}>{route.name}</a></li>
    </div>
  )
}
