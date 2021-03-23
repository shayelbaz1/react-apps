
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import styles from './styles'
import Routes from './routes';
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store()}>
                <Router>
                    test1.0.1
                    <Routes />
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);