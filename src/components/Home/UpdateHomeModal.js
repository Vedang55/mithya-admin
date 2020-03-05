import React, { useState, useEffect } from 'react'
import {
    Modal, Button
} from 'react-bootstrap'
import firebase from '../../firestore';
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.firestore();

const UpdateHomeModal = (props) => {
    const [eventNameInput, setEventNameInput] = useState('');
    const [comp, setcomp] = useState('');
    const [it, setit] = useState('');
    const [etc, setetc] = useState('');
    const [mech, setmech] = useState('');
    const [sending, setSending] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        var docRef = db.collection("scores").doc("event_scores");
        setSending(true);
        try {
            const scoresArrProm = await docRef.get();
            const scoresArr = scoresArrProm.data().events;
            scoresArr.push({
                name: eventNameInput,
                comp: comp,
                it: it,
                etc: etc,
                mech: mech
            });
            let comptotal = 0, etctotal = 0, ittotal = 0, mechtotal = 0;
            scoresArr.forEach(element => {
                comptotal += parseInt(element.comp);
                etctotal += parseInt(element.etc);
                ittotal += parseInt(element.it);
                mechtotal += parseInt(element.mech);
            });


            var batch = db.batch();

            batch.set(docRef, {
                events: scoresArr
            })


            var totalref = db.collection("scores").doc("EY0IyJetTl5wc1B51Vid");

            batch.set(totalref, {
                comp: comptotal,
                it: ittotal,
                etc: etctotal,
                mech: mechtotal
            });

            batch.commit().then(() => {
                alert('score updated sucessfully')

            }).catch((e) => {
                alert(e);
            })

        }
        catch (e) {
            alert(e)
        }

        setSending(false)

    }


    const eventNameInputChange = (event) => {
        setEventNameInput(event.target.value);
    }





    return (

        <div style={{ padding: '40px' }}>
            <Modal show={props.show} onHide={props.handleClose} animation={true}>
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
                                placeholder="comp score"
                                onChange={(event) => { setcomp(event.target.value) }}
                                value={comp}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">MECH</label>
                            <input type="text"
                                className="form-control"
                                // id="inputEmail4"
                                placeholder="mech score"
                                onChange={(event) => { setmech(event.target.value) }}
                                value={mech}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">ETC</label>
                            <input type="text"
                                className="form-control"
                                // id="inputEmail4"
                                placeholder="etc score"
                                onChange={(event) => { setetc(event.target.value) }}
                                value={etc}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputEmail4">IT</label>
                            <input type="text"
                                className="form-control"
                                // id="inputEmail4"
                                placeholder="it score"
                                onChange={(event) => { setit(event.target.value) }}
                                value={it}
                                required
                            />
                        </div>
                    </div>

                    {sending ? (<ClipLoader
                        size={30}
                        color={"#123abc"}
                        loading={sending}
                    />)
                        : (<button type="submit" className="btn btn-primary">ADD SCORE</button>)}

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


export default UpdateHomeModal;