import React from 'react';

function GuestView({ onLogin }) {
  const flights = [
    { id: 1, from: 'New Delhi', to: 'Mumbai', departure: '10:00 AM', price: '₹4,500' },
    { id: 2, from: 'Bangalore', to: 'Kolkata', departure: '12:30 PM', price: '₹5,200' },
    { id: 3, from: 'Chennai', to: 'Hyderabad', departure: '03:45 PM', price: '₹3,800' },
    { id: 4, from: 'Mumbai', to: 'Goa', departure: '06:15 PM', price: '₹3,200' }
  ];

  return (
    <div className="guest-view">
      <h1>Flight Information (Guest View)</h1>
      <p>Browse available flights below. Please log in to book tickets.</p>
      
      <div className="flight-list">
        <h2>Available Flights</h2>
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Departure Time</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id}>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.departure}</td>
                <td>{flight.price}</td>
                <td>
                  <button 
                    onClick={() => alert("Please login to book tickets")}
                    className="book-btn disabled"
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="login-section">
        <p>Already have an account?</p>
        <button onClick={onLogin} className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default GuestView;
