import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import firebase from '../../firestore';
import HomeCard from '../Home/HomeCard'
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
                                return <HomeCard key={key} data={{ ...eventsList[key], key: key }} />
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

        <div className="mulday">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="day1" title="DAY - 1">
                    <Atab tab={'day1'} />
                </Tab>
                <Tab eventKey="day2" title="DAY - 2">
                    <Atab tab={'day2'} />
                </Tab>
                <Tab eventKey="day3" title="DAY - 3">
                    <Atab tab={'day3'} />
                </Tab>

            </Tabs>
        </div>

    );

}

export default HomeTab;