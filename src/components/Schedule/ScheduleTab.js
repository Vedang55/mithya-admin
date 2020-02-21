import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import firebase from '../../firestore';
import ScheduleCard from '../Schedule/ScheduleCard'
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.database();
const eventRef = db.ref('events/');



const Atab = (props) => {
    const [eventsList, setEventsList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        eventRef.orderByChild('type').equalTo(props.tab.toUpperCase()).on('value',
            (snapshot) => {
                setEventsList(snapshot.val());
                setLoading(false);
            });
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
                            eventsList ? (Object.keys(eventsList).map((key) => {
                                return <ScheduleCard key={key} data={{ ...eventsList[key], key: key }} />
                            })) : <p>no data</p>

                        }

                    </div>
                </div>
            </div>
        );
    }
}



const ScheduleTab = (props) => {
    const [key, setKey] = useState('ace');


    return (

        <div className="mulday">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="ace" title="ACE">
                    <Atab tab={'ace'} />
                </Tab>
                <Tab eventKey="king" title="KING">
                    <Atab tab={'king'} />
                </Tab>
                <Tab eventKey="queen" title="QUEEN">
                    <Atab tab={'queen'} />
                </Tab>

                <Tab eventKey="jack" title="JACK">
                    <Atab tab={'jack'} />
                </Tab>
            </Tabs>
        </div>

    );

}

export default ScheduleTab;