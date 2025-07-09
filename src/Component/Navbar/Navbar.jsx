import React from "react"
import './Navbar.css'
const Navbar=()=> {
    return(
        <>
        <div className="Navbar-logo-cont">
            <div className="Navbar-logo">
                <h2>EV-CARS</h2>
            </div>
            <div className="Navbar-cont">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Category</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar