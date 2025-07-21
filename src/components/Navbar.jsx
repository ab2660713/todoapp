import React from 'react'

const Navbar = ({ changeTheme }) => {
    return (
        <nav>
            <h1>Todo App</h1>
            <button className="theme-btn" onClick={() => changeTheme()}>Change Theme</button>
        </nav>
    )
}

export default Navbar
