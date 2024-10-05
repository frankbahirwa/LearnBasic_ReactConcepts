import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookLists = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/library/books/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  const handleDelete = (bookId) => {

    axios.delete(`http://localhost:8000/library/books/${bookId}/`)
      .then(response => {
        alert('Book deleted successfully:', response.data);
       
        setBooks(books.filter(book => book.id !== bookId));
      })
      .catch(error => {
        console.error('There was an error deleting the book:', error);
      });
  };

  return (
    <div className='absolute left-[10cm]'>
      <h1>Books List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id} className="border p-2 mb-2">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <button
              onClick={() => handleDelete(book.id)}
              className="bg-red-500 text-white p-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookLists;
