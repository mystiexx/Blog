import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'



class Header extends Component {
    render() {
        return (
                <Navbar fixed="top" position="sticky" className="navbar">
                    <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-link">
                    <Nav.Link className="link">
                        <Link to="/" className="link-text" style={{color: 'black'}}>Home</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                            )
    }
}
export default Header;
