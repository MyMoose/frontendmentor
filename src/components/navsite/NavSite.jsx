import React from 'react'
import { Link } from 'react-router-dom'
import './navsite.css'

const NavSite = () => {
    return (

        <div className="links">
            <Link to="/"
                className="navlinks"
            >
                Home
            </Link>

            <Link to="/qrcode"
                className="navlinks"
            >
                Qr Code
            </Link>

            <Link to="/threecolumncard"
                className="navlinks"
            >
                Three Column Card
            </Link>
        </div>

    )
}

export default NavSite