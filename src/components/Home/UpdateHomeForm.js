import React, { useState } from 'react';
import firebase from '../../firestore';
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.database();
const eventRef = db.ref('events/');

const UpdateHomeForm = (props) => {
    const [rulesTextarea, setRulesTextarea] = useState('');
    const [eventNameInput, setEventNameInput] = useState('');
    const [selectValue, setSelectValue] = useState('ACE');
    const [sending, setSending] = useState(false);




    const handleSubmit = (event) => {
        event.preventDefault();
        setSending(true);
        var newEventRef = eventRef.push();
        newEventRef.set({
            name: eventNameInput,
            type: selectValue,
            rules: rulesTextarea
        }, (error) => {
            setSending(false);
            if (error) {
                alert('failed to add event, try again');
            } else {
                alert(`event ${eventNameInput} added sucessfully`);
                setRulesTextarea('');
                setEventNameInput('');
            }
        });
    }

    const rulesTextareaChange = (event) => {
        setRulesTextarea(event.target.value);
    }

    const eventNameInputChange = (event) => {
        setEventNameInput(event.target.value);
    }

    const selectChange = (event) => {
        setSelectValue(event.target.value);
    }


    return (
        <div className="form-scoreboard">
            <form onSubmit={handleSubmit}>
                {/* Event Name Row */}
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="inputEmail4">EVENT NAME</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            placeholder="eg. Antakshari"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">COMP</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            placeholder="eg. 2000"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">MECH</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            placeholder="eg. 2000"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">ETC</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            placeholder="eg. 2000"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">IT</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            placeholder="eg. 2000"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div>
                </div>

                {sending ? (<ClipLoader
                    size={30}
                    color={"#123abc"}
                    loading={sending}
                />)
                    : (<button type="submit" className="btn btn-primary">UPDATE SCHEDULE</button>)}

            </form>
        </div>

    );
}


export default (UpdateHomeForm)