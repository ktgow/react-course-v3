import React from 'react';
import ReactDOM from 'react-dom/client';

import books from './books';
import Book from './Book';
import './index.css';


function BookList() {
    const getBook = (id) => books.find((book) => book.id === id);
    return (
	<>
	    <h1 className='title'>Top Selling Books</h1>
	    <div className='booklist'>
		{books.map((book, index) =>
		    <Book
			getBook={getBook}
			id={book.id}
			orderNumber={index + 1}
			key={book.id}
		    />)
		}
	    </div>
	</>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
