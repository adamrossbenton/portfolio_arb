import React from "react"
import {Link} from "react-router-dom"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

function Header() {
    
    const navbarTitle = {
        color: "white",
        padding: "5px",
        display: "flex",
        textAlign: "left",
    }

    const arb = {
        fontSize: "small",
        marginBottom: "0px"
    }

    const homeLink = {
        color: "white",
        textDecoration: "none",
        display: "flex",
    }

    return <div className="header-container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="header-navbar">
            <div style={navbarTitle}>
                <Link to="/" style={homeLink}>
                    <img src="adamrossbenton_transparent.png" alt="" id="navbar-logo"/>
                    <div>
                        <p style={arb}>adam</p>
                        <p style={arb}>ross</p>
                        <p style={arb}>benton</p>
                    </div>
                </Link>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Projects">
                        <NavDropdown.Item href ="/projects">View All</NavDropdown.Item>
                        {/* I probably shouldn't hardcode these urls but whatevs */}
                        {/* ¯\_(ツ)_/¯ */}
                        <NavDropdown.Item href="/projects/1">AVARICE The Smith</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/2">Minotaur</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/3">chowdr</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/4">halfprice</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/5">TRICKS: THE MEETING</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
}

export default Header