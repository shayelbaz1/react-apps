import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Layout
import Header from '../components/Header';
import {Test} from '../pages/Fetch';
import TodoList from '../components/TodoList'

class PageLayout extends Component {
    render() {
        return (
            <div className="layoutRoot">
                <Header />
                <div className="pageContent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageLayout;