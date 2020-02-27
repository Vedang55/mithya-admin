import React, { useState } from 'react';
import firebase from '../../firestore';
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.database();
const eventRef = db.ref('events/');

const AddEventForm = (props) => {
    const [rulesTextarea, setRulesTextarea] = useState('');
    const [eventNameInput, setEventNameInput] = useState('');
    const [imageName, setImageName] = useState('');
    const [selectValue, setSelectValue] = useState('ACE');
    const [sending, setSending] = useState(false);




    const handleSubmit = (event) => {
        event.preventDefault();
        setSending(true);
        var newEventRef = eventRef.push();
        newEventRef.set({
            name: eventNameInput,
            type: selectValue,
            rules: rulesTextarea,
            image: imageName
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

    const imageTextChange = (event) => {
        setImageName(event.target.value);
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
                        <br/>
                        {/* <label>Image name</label>
                        <input type="text"
                            className="form-control"
                            placeholder="image name"
                            onChange={imageTextChange}
                            value={imageName}
                        /> */}

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
                <div className="form-group">
                    <label for="inputAddress">RULES</label>
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1" rows="10"
                        placeholder="Type Each rule on separate line"
                        value={rulesTextarea}
                        onChange={rulesTextareaChange}
                        required>
                    </textarea>
                </div>
                {sending ? (<ClipLoader
                    size={30}
                    color={"#123abc"}
                    loading={sending}
                />)
                    : (<button type="submit" className="btn btn-primary">ADD EVENT</button>)}

            </form>
        </div>

    );
}


export default (AddEventForm)