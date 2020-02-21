import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import EventTab from '../../components/EventTab/EventTab'
import AddEventForm from '../../components/EventTab/AddEventForm'



const Events = (props) => {

    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg" bg='dark' variant='dark'>
                <Navbar.Brand href="#">MITHYA 2020</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Events</Nav.Link>
                        <Nav.Link href="#">Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </nav> */}


            {/* // <!-- Multi Tab-- > */}
            <div className="container">
                {/* <!-- Form --> */}
                <AddEventForm />
                <EventTab />


            </div>
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

export default Events;