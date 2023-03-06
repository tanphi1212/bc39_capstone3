import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className='container'>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* Brand */}
            <Link to={''} className="navbar-brand text-white" >CYBERCASPTONE</Link>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/list-movie'} className="nav-link" >Movie</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>

    )
}
