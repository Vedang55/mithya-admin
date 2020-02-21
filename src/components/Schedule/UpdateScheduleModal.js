import React, { useState, useEffect } from 'react'
import {
    Modal, Button
} from 'react-bootstrap'
import firebase from '../../firestore';
import ClipLoader from "react-spinners/ClipLoader";


var db = firebase.database();
const eventRef = db.ref('events/');

const UpdateScheduleModal = (props) => {

    const [rulesTextarea, setRulesTextarea] = useState(props.data.rules);
    const [eventNameInput, setEventNameInput] = useState(props.data.name);
    const [selectValue, setSelectValue] = useState(props.data.type.toUpperCase());
    const [sending, setSending] = useState(false);

    useEffect(() => {
        setRulesTextarea(props.data.rules);
        setEventNameInput(props.data.name);
        setSelectValue(props.data.type.toUpperCase());
    }, [props.data]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSending(true);
        var updateEventRef = db.ref('events/' + props.data.key);
        updateEventRef.set({
            name: eventNameInput,
            type: selectValue,
            rules: rulesTextarea
        }, (error) => {
            setSending(false);
            if (error) {
                alert('failed to update event, try again');
            } else {
                alert(`event ${eventNameInput} updated sucessfully`);
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

        <div style={{ padding: '40px' }}>
            <Modal show={props.show} onHide={props.handleClose} animation={true}>
                <form style={{ padding: '40px' }} onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-8">
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
                        <div className="form-group col-md-4">
                            <label for="inputState">CATEGORY</label>
                            <select id="inputState" className="form-control" onChange={selectChange} value={selectValue}>
                                <option>ACE</option>
                                <option>KING</option>
                                <option>QUEEN</option>
                                <option>JACK</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">DATE</label>
                            <input type="date"
                                className="form-control"
                                // id="inputEmail4"
                                // placeholder="eg. Antakshari"
                                // onChange={eventNameInputChange}
                                // value={eventNameInput}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">TIME</label>
                            <input type="time"
                                className="form-control"
                                // id="inputEmail4"
                                // placeholder="eg. Antakshari"
                                // onChange={eventNameInputChange}
                                // value={eventNameInput}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">VENUE</label>
                            <input type="text"
                                className="form-control"
                                // id="inputEmail4"
                                placeholder="eg. Auditorium"
                                onChange={eventNameInputChange}
                                // value={eventNameInput}
                                required
                            />
                        </div>
                    </div>


                </form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                    {sending ? (<ClipLoader
                        size={30}
                        color={"#123abc"}
                        loading={sending}
                    />)
                        : (<button type="submit" onClick={handleSubmit} className="btn btn-primary">Save Changes</button>)}
                </Modal.Footer>
            </Modal>

        </div>

    );
}


export default UpdateScheduleModal;