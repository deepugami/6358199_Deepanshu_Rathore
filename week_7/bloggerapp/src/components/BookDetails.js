import React from 'react';

function BookDetails({ show }) {
  const books = [
    { title: "Master React", pages: 670 },
    { title: "Deep Dive into Angular 11", pages: 800 },
    { title: "Mongo Essentials", pages: 450 }
  ];
  

  if (!show) {
    return null;
  }
  
  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.pages}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
