import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import Home from "./components/Home";
import Numbers from "./components/Numbers";
import Recordings from "./components/Recordings";
import Settings from "./components/Settings";

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/numbers">Numbers</Link></li>
                <li><Link to="/recordings">Recordings</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
            <hr/>
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
