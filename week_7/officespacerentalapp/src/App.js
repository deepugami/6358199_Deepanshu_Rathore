import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  
  const jsxatt = <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="25%" height="25%" alt="Office Space" />;
  
  const ItemName = {Name:"DBS", Rent: 50000, Address:'Chennai'};
  
  const offices = [
    {Name:"DBS", Rent: 50000, Address:'Chennai'},
    {Name:"Google", Rent: 80000, Address:'Bangalore'},
    {Name:"Microsoft", Rent: 65000, Address:'Hyderabad'},
    {Name:"TCS", Rent: 45000, Address:'Pune'}
  ];
  
  let colors=[];
  
  offices.forEach(office => {
    if(office.Rent <= 60000) {
      colors.push('textRed');
    } else {
      colors.push('textGreen');
    }
  });

  return (
    <div className="App">
      <h1>{element} , at Affordable Range </h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={ItemName.Rent <= 60000 ? "textRed" : "textGreen"}> Rent: Rs. {ItemName.Rent}</h3>
      <h3> Address: {ItemName.Address}</h3>
      
      <div className="office-list">
        <h2>Available Office Spaces:</h2>
        {offices.map((office, index) => (
          <div key={index} className="office-item">
            <h3>Name: {office.Name}</h3>
            <h3 className={colors[index]}> Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        ))}
      </div>
        </div>
  );
}

export default App;
