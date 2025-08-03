import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: ''
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.sayHello = this.sayHello.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    
    decrement() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }
    
    sayHello() {
        this.setState({
            message: 'Hello, Welcome to React Event Handling!'
        });
    }
    
    handleIncrement() {
        this.increment();
        this.sayHello();
    }
    
    render() {
        return (
            <div className="counter-container">
                <h2>Counter Example</h2>
                <div className="counter">
                    <h3>Count: {this.state.count}</h3>
                </div>
                <div className="buttons">
                    <button onClick={this.handleIncrement}>Increment</button>
                    
                    <button onClick={this.decrement}>Decrement</button>
                </div>
                <div className="message">
                    {this.state.message && <p>{this.state.message}</p>}
                </div>
            </div>
        );
    }
}

export default Counter;
