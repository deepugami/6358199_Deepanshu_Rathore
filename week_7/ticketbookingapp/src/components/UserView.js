import React, { useState } from 'react';

function UserView({ onLogout, username = "User" }) {
  const flights = [
    { id: 1, from: 'New Delhi', to: 'Mumbai', departure: '10:00 AM', price: '₹4,500' },
    { id: 2, from: 'Bangalore', to: 'Kolkata', departure: '12:30 PM', price: '₹5,200' },
    { id: 3, from: 'Chennai', to: 'Hyderabad', departure: '03:45 PM', price: '₹3,800' },
    { id: 4, from: 'Mumbai', to: 'Goa', departure: '06:15 PM', price: '₹3,200' }
  ];

  const [bookedFlights, setBookedFlights] = useState([]);

  const handleBooking = (flight) => {
    setBookedFlights([...bookedFlights, flight]);
    alert(`Successfully booked flight from ${flight.from} to ${flight.to}`);
  };

  return (
    <div className="user-view">
      <div className="user-header">
        <h1>Flight Booking Portal</h1>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </div>
      
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
                    onClick={() => handleBooking(flight)}
                    className="book-btn"
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {bookedFlights.length > 0 && (
        <div className="booked-flights">
          <h2>Your Booked Flights</h2>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookedFlights.map((flight, index) => (
                <tr key={index}>
                  <td>{flight.from}</td>
                  <td>{flight.to}</td>
                  <td>{flight.departure}</td>
                  <td>{flight.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserView;
