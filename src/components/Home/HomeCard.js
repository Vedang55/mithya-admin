import React, { useState } from 'react'
import { Badge } from 'react-bootstrap'
import firebase from '../../firestore';

import UpdateHomeModal from './UpdateHomeModal';

var db = firebase.firestore();


const HomeCard = (props) => {


    const deleteEvent = () => {
        if (window.confirm(`Are you sure you want to delete event ${props.data.name}`)) {
            handleSubmit();


        }
    }

    const handleSubmit = async () => {


        try {

            var docRef = db.collection("scores").doc("event_scores");
            const scoresArrProm = await docRef.get();
            const scoresArr = scoresArrProm.data().events;
            scoresArr.splice(props.index, 1)

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
                alert('score deleted sucessfully')
            }).catch((e) => {
                alert(e);
            })

        }
        catch (e) {
            console.log(e)
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
                        <Badge variant="dark">COMP </Badge> : {props.data.comp}
                    </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">MECH </Badge> : {props.data.mech}
                    </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">ETC </Badge> : {props.data.etc}
                        :                   </p>
                    <p className="card-text">
                        {/* <Badge variant="dark">Type </Badge>: {props.data.type} */}
                        <Badge variant="dark">IT </Badge> : {props.data.it}
                    </p>
                    {/* <button onClick={() => { handleShow() }} className="btn btn-primary">Update Scores</button> &nbsp; */}
                    <button onClick={deleteEvent} className="btn btn-danger">Delete Score</button>

                </div>
            </div>

            {/* <UpdateHomeModal show={show} handleClose={handleClose} handleShow={handleShow} data={{ ...props.data }} /> */}

        </div>

    );
}


export default HomeCard;