import React from 'react'

export default function SlideBar() {
  const slideBarStyles = 
  {
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <aside>
        <nav style={slideBarStyles}>
            <p>Side Nav -1</p>
            <p>Side Nav -2</p>
            <p>Side Nav -3</p>
            <p>Side Nav -4</p>
            <p>Side Nav -5</p>
        </nav>
    </aside>
  )
}
