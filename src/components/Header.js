import React from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

function Header() {
    return <div className="header-container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="header-navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Projects">
                        <NavDropdown.Item href ="/projects">View All</NavDropdown.Item>
                        <NavDropdown.Item href="">TRICKS: THE MEETING</NavDropdown.Item>
                        <NavDropdown.Item href="">halfprice</NavDropdown.Item>
                        <NavDropdown.Item href="">chowdr</NavDropdown.Item>
                        <NavDropdown.Item href="">MINOTAUR</NavDropdown.Item>
                        <NavDropdown.Item href="">AVARICE the Smith</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <img src="adamrossbenton_transparent.png" alt="" id="navbar-logo"/>
        </Navbar>
    </div>
}

export default Header