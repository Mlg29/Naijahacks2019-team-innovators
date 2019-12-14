import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"
import { Navbar, Nav, Button } from "react-bootstrap"



function Navigation() {
    return (
        <div>
                <Navbar bg="light" expand="lg" className="nav-bg">
                    <Navbar.Brand href="/"><img className="logo1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576094329/f22ietnqwtslcbasqym1.png" alt="" width="150" height="50" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" style={{color: "red", fontWeight: "bold",marginLeft: "5rem"}}>Home</Nav.Link>
                            <Nav.Link href="/about"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>About Us</Nav.Link>
                            <Nav.Link href="/waste-collection"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>Waste Collection</Nav.Link>
                            <Nav.Link href="/recycling"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>Recycling</Nav.Link>
                            <Nav.Link href="/signup" style={{marginLeft: "1rem"}}><Button className="btn btn-success" variant="outline-success">Sign Up</Button></Nav.Link>
                            <Nav.Link href="/login" style={{marginLeft: "1rem"}}><Button className="btn btn-success" variant="outline-success">Log In</Button></Nav.Link>                    
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Navigation