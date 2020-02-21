import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

import ScheduleTab from '../../components/Schedule/ScheduleTab'
import UpdateScheduleForm from '../../components/Schedule/UpdateScheduleForm'
import Layout from '../../layouts/Layout'



const Schedule = (props) => {

    return (



        <Layout>
            <div className="container">
                <UpdateScheduleForm />
                <ScheduleTab />
            </div>
        </Layout>
    );
}

export default Schedule;