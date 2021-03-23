import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render() {
        return (
            <header>
                <Link to={"/"}>Home | </Link>
                <Link to={"/todo-list"}>Todo List | </Link>
                <Link to={"/fetch"}>Fetch | </Link>
                <Link to={"/pokemons"}>Pokemons | </Link>
                <Link to={"/converter"}>Converter</Link>
            </header>
        )
    }
}

export default Header;