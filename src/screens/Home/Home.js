import React from 'react'

import HomeTab from '../../components/Home/HomeTab'
import UpdateHomeForm from '../../components/Home/UpdateHomeForm'
import Layout from '../../layouts/Layout'



const Home = (props) => {

    return (
        <Layout>
            <div className="container">
                <UpdateHomeForm />
                <HomeTab />
            </div>
        </Layout>
    );
}

export default Home;