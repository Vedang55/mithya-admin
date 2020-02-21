import React from 'react'
import {
    Navbar,
    Nav,
    Button
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
    return (
        <React.Fragment>

            <Navbar bg="light" expand="lg" bg='dark' variant='dark'>
                <Navbar.Brand href="#">MITHYA 2020</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link>
                            <NavLink to="/home" exact className={'navlinkr'} activeClassName={'active'}>
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/events" className={'navlinkr'} activeClassName={'active'}>
                                Events
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink to="/schedule" className={'navlinkr'} activeClassName={'active'}>
                                Schedule
                            </NavLink>
                        </Nav.Link>
                        <Button variant="danger">LOGOUT</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {props.children}

            <footer>
                <div className="row">
                    <div className="col-md-12">
                        <p> <span>&copy;</span> 2020 Copyright : Mithya 2020, Padre Conceicao College of Engineering</p>
                        <p>Designed & Developed By : ALPHACODE</p>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    );
}


export default Layout;