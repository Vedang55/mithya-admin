import React, { useState } from 'react'
import { Badge } from 'react-bootstrap'
import firebase from '../../firestore';
import UpdateScheduleModal from './UpdateScheduleModal'

var db = firebase.database();
const eventRef = db.ref('events/');


const ScheduleCard = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteSech = () => {
        if (window.confirm(`Are you sure you want to delete this event from schedule ${props.data.name}`)) {
            const k = props.data.key;
            db.ref('schedule/' + k).set(null, (error) => {
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
                        <Badge variant="dark">LOCATION </Badge> : {props.data.venue}
                    </p>
                    {/* <p className="card-text">
                        <Badge variant="dark">DATE </Badge> : 27-01-2020
                    </p> */}
                    
                    <p className="card-text">
                        <Badge variant="dark">TIME </Badge> : {props.data.time}
                    </p>
                    <p className="card-text">
                        <Badge variant="dark">DAY </Badge> : {props.data.day}
                    </p>
                    <button onClick={() => { handleShow() }} className="btn btn-primary">Update Schedule</button> &nbsp;
                    <button onClick={deleteSech} className="btn btn-danger">Delete Schedule</button>

                </div>
            </div>

            <UpdateScheduleModal show={show} handleClose={handleClose} handleShow={handleShow} data={{ ...props.data }} />

        </div>

    );
}


export default ScheduleCard;