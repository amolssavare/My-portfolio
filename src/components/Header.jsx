import React from 'react'

const Header = () => {
    return (
        <nav>
            <NavContent />
        </nav>
    )
}
const NavContent = () => (
    <>
        
        <div>
            <a href='#home'>Home</a>
            <a href='#work'>Work</a>
            <a href='#timeline'>experience</a>     
            <a href='#contact'>Contact</a>
        </div>
        <a href='mailto:amolphilsavare@gmail.com'>
            <button>Email</button>
        </a>
    </>
)

export default Header
