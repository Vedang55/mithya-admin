import React, {useState} from 'react';
import './style.css';
import ScrollToTop from "./components/ScrollToTop";
import Events from './screens/Events/Events'
import Schedule from './screens/Schedule/Schedule'
import Login from './screens/Login/Login'
import Home from './screens/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from "./context/auth";

function App() {
  const authHook = useState(false);
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/schedule" component={Schedule} />
        </ScrollToTop>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
