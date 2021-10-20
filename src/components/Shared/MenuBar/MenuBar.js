import React from 'react';
import './MenuBar.css'

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import Button from '@restart/ui/esm/Button';
import { HashLink } from 'react-router-hash-link';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Psychologist Shakib</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme">About</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/workprocess">WorkProcess</Nav.Link>
                        {
                            user.email ? <Button onClick={logOut} variant="light">LogOut</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {user.email && <span className="items m-2 p-2" style={{ color: 'white' }}> <small>This is: {user.displayName}</small> </span>}
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default MenuBar;