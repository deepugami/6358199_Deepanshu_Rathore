import React, { Component } from 'react';

class SyntheticEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        
        this.handlePress = this.handlePress.bind(this);
    }
    
    handlePress(e) {
        this.setState({
            message: "I was clicked"
        });
        
        console.log("Event type:", e.type);
        console.log("Target:", e.target);
    }
    
    render() {
        return (
            <div className="synthetic-event-container">
                <h2>Synthetic Event Example</h2>
                <button onMouseDown={this.handlePress}>
                    OnPress Event
                </button>
                <div className="message">
                    {this.state.message && <p>{this.state.message}</p>}
                </div>
            </div>
        );
    }
}

export default SyntheticEvent;
