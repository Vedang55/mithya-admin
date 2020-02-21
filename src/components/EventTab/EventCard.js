import React from 'react'
import firebase from '../../firestore';
var db = firebase.database();
const eventRef = db.ref('events/');


const EventCard = (props) => {

    const deleteEvent = () => {
        const k = props.data.key;
        db.ref('events/' + k).set(null, (error) => {
            if (error) {
                alert(`Event ${props.data.name} could not be deleted, please try again`);
            } else {
                alert(`Event ${props.data.name} Deleted sucessfully`);
            }
        });
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
                    <button href="#" className="btn btn-primary">Update Event</button> &nbsp;
                    <button onClick={deleteEvent} className="btn btn-danger">Delete Event</button>
                </div>
            </div>
        </div>

    );
}


export default EventCard;