import React from 'react'

const Navbar = ({changetheme}) => {
  return (
    <nav>
      <h1>
      Todo App
      </h1>
      <button className="theme-btn" onClick={()=>changetheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar