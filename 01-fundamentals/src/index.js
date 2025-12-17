import React from 'react';
import ReactDOM from 'react-dom/client';

import books from './books';
import Book from './Book';
import './index.css';


function BookList() {
    const getBook = (id) => books.find((book) => book.id === id);
    return <section className='booklist'>
	       {books.map((book) =>
		   <Book
		       getBook={getBook}
		       id={book.id}
		       key={book.id}
		   />)
	       }
	   </section>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
