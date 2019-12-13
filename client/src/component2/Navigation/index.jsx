import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"



function Navigation() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <Link to={"/"} ><img className="logo1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576094329/f22ietnqwtslcbasqym1.png" alt="" width="150" height="50" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item pr-4 active">
                <Link to="/" style={{color: "red", fontWeight: "bold",marginLeft: "5rem"}} >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/About" style={{color: "grey", fontWeight: "bold"}} >About Us</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/service" style={{color: "grey", fontWeight: "bold"}} >Waste Collection</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/team" style={{color: "grey", fontWeight: "bold"}} >Recycling</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/our-food" style={{color: "grey", fontWeight: "bold"}} >Composition</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/signup"  > <button className="btn btn-success">Sign Up</button> </Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/login"  > <button className="btn btn-success">Login</button> </Link>
                </li>
                
                
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navigation