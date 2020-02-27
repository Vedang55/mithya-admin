import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import firebase from '../../firestore';
import ScheduleCard from '../Schedule/ScheduleCard'
import ClipLoader from "react-spinners/ClipLoader";

var db = firebase.database();




const Atab = (props) => {
    const [scheduleList, setscheduleList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        db.ref('schedule/'+props.tab+'/').orderByChild('time').on('value',
            (snapshot) => {
                setscheduleList(snapshot.val());
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
                            scheduleList ? (Object.keys(scheduleList).map((key) => {
                                return <ScheduleCard key={key} data={{ ...scheduleList[key], key: key }} />
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
                <Tab eventKey="ace" title="Day1">
                    <Atab tab={'1'} />
                </Tab>
                <Tab eventKey="king" title="Day2">
                    <Atab tab={'2'} />
                </Tab>
                <Tab eventKey="queen" title="Day3">
                    <Atab tab={'3'} />
                </Tab>

            </Tabs>
        </div>

    );

}

export default ScheduleTab;