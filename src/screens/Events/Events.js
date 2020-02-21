import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

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

                <div className="mulday">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">ACE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1">KING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu2">QUEEN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu3">JACK</a>
                        </li>
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                        <div className="tab-pane container active" id="home">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="IMAGES/pubg.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PUBG</h5>
                                            <p className="card-text">
                                                Rules :
                                    </p>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis
                                                maiores reiciendis, perspiciatis, enim quo doloribus nam optio adipisci odio
                                                libero nesciunt. Suscipit, voluptatibus? Possimus itaque ipsa inventore vel
                                                odio.
                                    </p>
                                            <a href="#" className="btn btn-primary">Update Event</a> &nbsp; <a href="#"
                                                className="btn btn-danger">Delete Event</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="tab-pane container fade" id="menu1">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="IMAGES/pubg.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PUBG</h5>
                                            <p className="card-text">
                                                Rules :
                                    </p>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis
                                                maiores reiciendis, perspiciatis, enim quo doloribus nam optio adipisci odio
                                                libero nesciunt. Suscipit, voluptatibus? Possimus itaque ipsa inventore vel
                                                odio.
                                    </p>
                                            <a href="#" className="btn btn-primary">Update Event</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="tab-pane container fade" id="menu2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="IMAGES/pubg.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PUBG</h5>
                                            <p className="card-text">
                                                Rules :
                                    </p>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis
                                                maiores reiciendis, perspiciatis, enim quo doloribus nam optio adipisci odio
                                                libero nesciunt. Suscipit, voluptatibus? Possimus itaque ipsa inventore vel
                                                odio.
                                    </p>
                                            <a href="#" className="btn btn-primary">Update Event</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="tab-pane container fade" id="menu3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="IMAGES/pubg.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PUBG</h5>
                                            <p className="card-text">
                                                Rules :
                                    </p>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis
                                                maiores reiciendis, perspiciatis, enim quo doloribus nam optio adipisci odio
                                                libero nesciunt. Suscipit, voluptatibus? Possimus itaque ipsa inventore vel
                                                odio.
                                    </p>
                                            <a href="#" className="btn btn-primary">Update Event</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

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