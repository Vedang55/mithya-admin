import React, { useState } from 'react'
import { Badge } from 'react-bootstrap'
import firebase from '../../firestore';

import UpdateHomeModal from './UpdateHomeModal';

var db = firebase.database();
const eventRef = db.ref('events/');


const HomeCard = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteEvent = () => {
        if (window.confirm(`Are you sure you want to delete event ${props.data.name}`)) {
            const k = props.data.key;
            db.ref('events/' + k).set(null, (error) => {
                if (error) {
                    alert(`Event ${props.data.name} could not be deleted, please try again`);
                } else {
                    alert(`Event ${props.data.name} Deleted sucessfully`);
                }
            });
        }
    }

    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '100%' }}>
                {/* <img src={require('../../assets/IMAGES/pubg.png')} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type :</Badge> {props.data.type} */}
                        <Badge variant="dark">COMP </Badge> : 3000
                    </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">MECH </Badge> : 3000
                    </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">ETC </Badge> : 3000
 :                   </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">IT </Badge> : 3000
                    </p>
                    <button onClick={() => { handleShow() }} className="btn btn-primary">Update Scores</button> &nbsp;

                </div>
            </div>

            <UpdateHomeModal show={show} handleClose={handleClose} handleShow={handleShow} data={{ ...props.data }} />

        </div>

    );
}


export default HomeCard;