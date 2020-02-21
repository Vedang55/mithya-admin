import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

const Atab = (props) => {
    return (
        <div className="tab-content">
            <div className="tab-pane container active" id="ace">
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
        </div>
    );
}



const EventTab = (props) => {
    const [key, setKey] = useState('ace');


    return (

        <div className="mulday">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="ace" title="Home">
                    <Atab />
                </Tab>
                <Tab eventKey="king" title="Profile">
                    <Atab />
                </Tab>
                <Tab eventKey="queen" title="Contact">
                    <Atab />
                </Tab>

                <Tab eventKey="jack" title="Contact">
                    <Atab />
                </Tab>
            </Tabs>
        </div>

    );

}

export default EventTab;