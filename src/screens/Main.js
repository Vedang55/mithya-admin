import React, { useState, useEffect } from 'react'
import firebase from '../firestore';
import classes from './Main.module.css'
var db = firebase.firestore();


const EventForm = (props) => {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);


    const newEvent = () => {
        setData(state => {
            const newData = { ...state };
            newData[props.index].push({ name: '', type: props.index, rules: [] });
            return newData;
        })
    }

    // const newrule = (itemIndex) => {
    //     setData(state => {
    //         const newData = { ...state };
    //         newData[props.index][itemIndex].rules.push('');
    //         return newData;
    //     })
    // }

    // const delrule = (itemIndex, ruleIndex) => {
    //     setData(state => {
    //         const newData = { ...state };
    //         newData[props.index][itemIndex].rules.splice(ruleIndex, 1);
    //         return newData;
    //     })
    // }

    const ruleChange = (e, itemIndex) => {
        e.persist();
        setData((state) => {
            const newData = { ...state };
            newData[props.index][itemIndex].rules = e.target.value;
            return newData;
        })
    }

    const namechange = (newtxt, itemIndex) => {
        newtxt.persist();
        setData((state) => {
            const newData = { ...state };
            newData[props.index][itemIndex].name = newtxt.target.value;
            return newData;
        })
    }

    const pushFirestore = () => {
        db.collection("data").doc("data").update({
            event_data: [...data.ace, ...data.king, ...data.queen, ...data.jack],
        })
            .then(function () {
                console.log("Document successfully updated!");
                alert("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
                alert("Error writing document: ", error);
            });

    }
    console.log(data[props.index][0].rules);

    return (
        <div>
            <h1 onClick={pushFirestore} className={classes.push}>Push Changes to firestore</h1>
            {data[props.index].map((item, itemIndex) => {
                return (
                    <div className={classes.RuleCard}>
                        Event Name: <input type='text' value={item.name} onChange={(e) => { namechange(e, itemIndex) }} />
                        <button>Delete</button>

                        <div className={classes.RuleContainer}>
                            Rules
                            <textarea rows='10' value={item.rules} onChange={(e)=>{ruleChange(e,itemIndex)}}/>
                        </div>

                    </div>
                );
            })}

            <button onClick={newEvent}>New Event</button>
        </div>
    );
}


const Main = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoadng] = useState(true);

    useEffect(() => {
        let unsubscribe = db.collection("data").onSnapshot(function () {
            fetchData();
        });

        return (() => {
            unsubscribe();
        });
    }, []);

    const fetchData = () => {

        db.collection("data").doc('data').get().then((querySnapshot) => {
            const fetchedData = querySnapshot.data().event_data;
            processData(fetchedData);
        });
    }

    const processData = (eventData) => {
        const ace = [];
        const king = [];
        const queen = [];
        const jack = [];

        eventData.forEach(element => {
            switch (element.type) {
                case 'ace':
                    ace.push({ name: element.name, rules: element.rules, type: element.type });
                    break;
                case 'king':
                    king.push({ name: element.name, rules: element.rules, type: element.type });
                    break;
                case 'queen':
                    queen.push({ name: element.name, rules: element.rules, type: element.type });
                    break;
                case 'jack':
                    jack.push({ name: element.name, rules: element.rules, type: element.type });
                    break;

            }
        });

        setData({
            ace: ace,
            king: king,
            queen: queen,
            jack: jack
        });

        setLoadng(false);

    }



    const fsetActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    }
    let active = '';
    switch (activeTab) {
        case 0:
            active = 'ace';
            break
        case 1:
            active = 'king';
            break
        case 2:
            active = 'queen';
            break
        case 3:
            active = 'jack';
            break
    }
    if (!loading) {
        return (
            <div className={classes.Container}>
                <div className={classes.Tabs}>
                    <h3 className={activeTab === 0 ? classes.Active : undefined} onClick={() => { fsetActiveTab(0) }}>Ace</h3>
                    <h3 className={activeTab === 1 ? classes.Active : undefined} onClick={() => { fsetActiveTab(1) }}>King</h3>
                    <h3 className={activeTab === 2 ? classes.Active : undefined} onClick={() => { fsetActiveTab(2) }}>Queen</h3>
                    <h3 className={activeTab === 3 ? classes.Active : undefined} onClick={() => { fsetActiveTab(3) }}>Jack</h3>
                </div>
                <EventForm data={{ ...data }} index={active} />

            </div>
        );
    }
    else {
        return (null);
    }
}

export default Main;