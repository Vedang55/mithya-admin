import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { database } from 'firebase';

const Atab = (props) => {
    return (
        <div className="tab-content">
            <div className="tab-pane container active">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '100%' }}>
                            <img src={require('../../assets/IMAGES/pubg.png')} className="card-img-top" alt="..." />
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
    const [data, setData] = useState();




    return (

        <div className="mulday">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="ace" title="ACE">
                    <Atab />
                </Tab>
                <Tab eventKey="king" title="KING">
                    <Atab />
                </Tab>
                <Tab eventKey="queen" title="QUEEN">
                    <Atab />
                </Tab>

                <Tab eventKey="jack" title="JACK">
                    <Atab />
                </Tab>
            </Tabs>
        </div>

    );

}

export default EventTab;