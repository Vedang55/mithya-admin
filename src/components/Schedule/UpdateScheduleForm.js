import React, { useState } from 'react';
import firebase from '../../firestore';
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.database();
const schduleRef = db.ref('schedule/');

const UpdateScheduleForm = (props) => {
    const [timeField, setTimeField] = useState('');
    const [eventNameInput, setEventNameInput] = useState('');
    const [selectValue, setSelectValue] = useState('1');
    const [venueField, setVenue] = useState('');
    const [sending, setSending] = useState(false);




    const handleSubmit = (event) => {
        event.preventDefault();
        setSending(true);
        var newSechRef = schduleRef.push();
        newSechRef.set({
            name: eventNameInput,
            day : selectValue,
            time: timeField,
            venue : venueField
        }, (error) => {
            setSending(false);
            if (error) {
                alert('failed to add event, try again');
            } else {
                alert(`event ${eventNameInput} added sucessfully`);
                // setRulesTextarea('');
                // setEventNameInput('');
            }
        });
    }

    const venueFieldChange = (event) => {
        setVenue(event.target.value);
    }

    const timeFieldChange = (event) => {
        setTimeField(event.target.value)
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
                <div className="form-row">
                    <div className="form-group col-md-3">
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

                    {/* {no need of date} */}
                    {/* <div className="form-group col-md-2">
                        <label for="inputEmail4">DATE</label>
                        <input type="date"
                            className="form-control"
                            // id="inputEmail4"
                            // placeholder="eg. Antakshari"
                            onChange={eventNameInputChange}
                            value={eventNameInput}
                            required
                        />
                    </div> */}

                    <div className="form-group col-md-2">
                        <label for="inputEmail4">TIME</label>
                        <input type="time"
                            className="form-control"
                            // id="inputEmail4"
                            // placeholder="eg. Antakshari"
                            onChange={timeFieldChange}
                            value={timeField}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">VENUE</label>
                        <input type="text"
                            className="form-control"
                            // id="inputEmail4"
                            // placeholder="eg. Antakshari"
                            onChange={venueFieldChange}
                            value={venueField}
                            required
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputState">DAY</label>
                        <select id="inputState" className="form-control" onChange={selectChange} value={selectValue}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
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


export default (UpdateScheduleForm)