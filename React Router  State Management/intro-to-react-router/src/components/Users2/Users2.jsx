import React from 'react'
import { use } from 'react';

export default function Users2({userPromise}) {
    const users = use(userPromise);
    console.log(users)
  return (
    <div>This is user 2</div>
  )
}
