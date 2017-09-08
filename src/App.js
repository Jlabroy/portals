import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import History from "./containers/History";
import Home from "./containers/Home";
import Numbers from "./containers/Numbers";
import Recordings from "./containers/Recordings";
import Settings from "./containers/Settings";
import Theme from "./theme";

const App = () => (
    <Router>
        <div>
            {Theme.COMPANY_NAME}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/numbers">Numbers</Link></li>
                <li><Link to="/recordings">Recordings</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/history" component={History}/>
            <Route path="/numbers" component={Numbers}/>
            <Route path="/recordings" component={Recordings}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </Router>
);

export default App;
