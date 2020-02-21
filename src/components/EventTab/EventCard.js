import React, { useState } from 'react'
import firebase from '../../firestore';
import UpdateModal from './UpdateModal'

var db = firebase.database();
const eventRef = db.ref('events/');


const EventCard = (props) => {

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
                        Type : {props.data.type}
                    </p>
                    <p className="card-text">
                        Rules :
                    </p>
                    <p className="card-text">
                        {props.data.rules}
                    </p>
                    <button onClick={()=>{handleShow()}} className="btn btn-primary">Update Event</button> &nbsp;
                    <button onClick={deleteEvent} className="btn btn-danger">Delete Event</button>
                </div>
            </div>

            <UpdateModal show={show} handleClose={handleClose} handleShow={handleShow} data={{...props.data}}/>

        </div>

    );
}


export default EventCard;