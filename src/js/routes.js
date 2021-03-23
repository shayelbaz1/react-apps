/*
    This is here where all the routes lives
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Layout
import PageLayout from './layouts/PageLayout';

// Pages
import PageHome from './pages/Home';
import TodoList from './components/TodoList';
import { Fetch } from './pages/Fetch';
import Pokemons from './pages/Pokemons';
import converter from './pages/Converter';


class Routes extends Component {
    render() {
        return (
            <PageLayout>
                <Route exact={true} path="/" component={PageHome} />
                <Route exact={true} path="/todo-list" component={TodoList} />
                <Route exact={true} path="/fetch" component={Fetch} />
                <Route exact={true} path="/pokemons" component={Pokemons} />
                <Route exact={true} path="/converter" component={converter} />
            </PageLayout>
        )
    }
}

export default Routes;