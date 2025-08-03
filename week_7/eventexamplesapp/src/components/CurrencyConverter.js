import React, { Component } from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rupees: '',
            euro: '',
            conversionRate: 0.011 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            rupees: e.target.value,
            euro: ''  // Clear the previous conversion
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { rupees, conversionRate } = this.state;
        
        if (rupees && !isNaN(rupees)) {
            const euroValue = (parseFloat(rupees) * conversionRate).toFixed(2);
            this.setState({
                euro: euroValue
            });
        }
    }
    
    render() {
        return (
            <div className="currency-converter-container">
                <h2>Currency Converter</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label>Enter amount in Indian Rupees (INR):</label>
                        <input 
                            type="number" 
                            value={this.state.rupees}
                            onChange={this.handleChange}
                            placeholder="Enter amount in INR"
                            required
                        />
                    </div>
                    <button type="submit">Convert to Euro</button>
                </form>
                
                {this.state.euro && (
                    <div className="result">
                        <h3>Conversion Result:</h3>
                        <p>{this.state.rupees} INR = {this.state.euro} EUR</p>
                    </div>
                )}
            </div>
        );
    }
}

export default CurrencyConverter;
