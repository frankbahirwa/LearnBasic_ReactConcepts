import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBook = ({ bookId }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  bookId = 1      

  useEffect(() => {
    
    axios.get(`http://localhost:8000/library/books/${bookId}/`)
      .then(response => {
        const book = response.data;
        setTitle(book.title);
        setName(book.name);
        setAuthor(book.author);
      })
      .catch(error => {
        console.error("There was an error fetching the book details!", error);
      });
  }, [bookId]);

  const handleUpdate = (event) => {
    event.preventDefault();

   
    const updatedBook = {
      title: title,
      name: name,
      author: author
    };


    axios.put(`http://localhost:8000/library/books/${bookId}/`, updatedBook)
      .then(response => {
        alert('Book updated successfully:', response.data);
        setAuthor('')
        setName('')
        setTitle('')
        
      })
      .catch(error => {
        console.error('There was an error updating the book:', error);
      });
  };

  return (
<form onSubmit={handleUpdate} className="space-y-4 absolute left-[10cm] top-[1cm]">
  <div>
  
    <input
      type="text"
      className="border border-gray-300 rounded-lg p-2 w-full"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder='title...'
      required
    />
  </div>
  <div>
    
    <input
      type="text"
      className="border border-gray-300 rounded-lg p-2 w-full"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='name...'
      required
    />
  </div>
  <div>
   
    <input
      type="text"
      className="border border-gray-300 rounded-lg p-2 w-full"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      placeholder='author...'
      required
    />
  </div>
  <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
    Update Book
  </button>
</form>

  );
};

export default UpdateBook;
