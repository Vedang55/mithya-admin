import React from 'react';
import './style.css';
import ScrollToTop from "./components/ScrollToTop";
import Events from './screens/Events/Events'
import Schedule from './screens/Schedule/Schedule'
import Login from './screens/Login/Login'
import Home from './screens/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <ScrollToTop>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/schedule" component={Schedule} />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
