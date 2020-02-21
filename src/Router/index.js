import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}