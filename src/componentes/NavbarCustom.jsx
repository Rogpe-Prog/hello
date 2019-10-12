import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class NavbarCustom extends Component {
    render(){
        return(
            <Navbar fixed-top="true" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}