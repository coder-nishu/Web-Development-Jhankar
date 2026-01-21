import React from 'react'
import { useLoaderData } from 'react-router'

export default function Users() {
    const users = useLoaderData();
    console.log(users);
  return (
    <div>This is user page</div>
  )
}
