import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import firebase from '../../firestore';
import HomeCard from '../Home/HomeCard'
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.firestore();
var docRef = db.collection("scores").doc("event_scores");



const Atab = (props) => {
    const [eventsList, setEventsList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       const listener = docRef.onSnapshot((doc)=>{
            setEventsList(doc.data().events);
            setLoading(false)
        })

        return(()=>{listener()})
    }, []);



    if (loading) {
        return (<ClipLoader
            size={60}
            color={"#123abc"}
            loading={loading}
        />);
    }
    else {
        return (
            <div className="tab-content">
                <div className="tab-pane container active">
                    <div className="row">
                        {
                            eventsList ? ((eventsList).map((item, index) => {
                                return <HomeCard data={item} index={index}/>
                            })) : <p>no data</p>

                        }

                    </div>
                </div>
            </div>
        );
    }
}



const HomeTab = (props) => {
    const [key, setKey] = useState('day1');


    return (
        <Atab />

    );

}

export default HomeTab;