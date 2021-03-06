import React from 'react'

import EventTab from '../../components/EventTab/EventTab'
import AddEventForm from '../../components/EventTab/AddEventForm'
import Layout from '../../layouts/Layout'



const Events = (props) => {

    return (
        <Layout>
            <div className="container">
                <AddEventForm />
                <EventTab />
            </div>
        </Layout>
    );
}

export default Events;