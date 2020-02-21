import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import EventTab from '../../components/EventTab/EventTab'

const Events = (props) => {
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg" bg='dark' variant='dark'>
                <Navbar.Brand href="homepage.html">MITHYA 2020</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link href="homepage.html">Home</Nav.Link>
                        <Nav.Link href="events.html">Events</Nav.Link>
                        <Nav.Link href="schedule.html">Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </nav> */}


            {/* // <!-- Multi Tab-- > */}
            <div className="container">
                {/* <!-- Form --> */}
                <div className="form-scoreboard">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <label for="inputEmail4">EVENT NAME</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="eg. Antakshari" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">CATEGORY</label>
                                <select id="inputState" className="form-control">
                                    <option selected>ACE</option>
                                    <option>KING</option>
                                    <option>QUEEN</option>
                                    <option>JACK</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">RULES</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                                placeholder="Type Each rule on separate line"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">ADD EVENT</button>
                    </form>
                </div>

                <EventTab/>


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