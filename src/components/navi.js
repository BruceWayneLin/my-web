import React from 'react'
import { Link } from 'react-router-dom'

function Navi() {
    const navStyle =  {
        color: 'black'
    }
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navi