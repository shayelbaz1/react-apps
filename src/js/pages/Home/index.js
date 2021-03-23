import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions
import { exampleAction } from '../../actions/exampleActions'

@connect((store) => {
    return {
        example: store.example,
    }
})
class PageHome extends Component {
    
    componentDidMount() {
        document.title = "Home";
    }

    sayHelloRegular=()=>{
        console.log('sayHelloRegular:')
        console.log(this)
        
    }
    
    sayHello=()=>{
        console.log('sayHello:')    
        console.log(this)
    }

    render() {
        if(!this.props.example) {
            // Dispatch action
            this.props.dispatch(exampleAction(true));
        }

        // Alert the store
        console.log(this.props.example);

        return (
            <div>
                <h1>Home Route</h1>
                <button onClick={this.sayHello}>sayHello</button>
                <button onClick={this.sayHelloRegular}>sayHelloRegular</button>
            </div>
        )
    }
}

export default PageHome;