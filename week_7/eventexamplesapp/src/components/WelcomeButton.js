import React, { Component } from 'react';

class WelcomeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: ''
        };
        
        this.showWelcome = this.showWelcome.bind(this);
    }
    
    showWelcome(greeting) {
        this.setState({
            welcomeMessage: greeting
        });
    }
    
    render() {
        return (
            <div className="welcome-container">
                <h2>Welcome Button Example</h2>
                <button onClick={() => this.showWelcome("Welcome to React Events!")}>
                    Say Welcome
                </button>
                <div className="message">
                    {this.state.welcomeMessage && <p>{this.state.welcomeMessage}</p>}
                </div>
            </div>
        );
    }
}

export default WelcomeButton;
