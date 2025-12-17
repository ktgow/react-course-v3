import React from 'react';
import ReactDOM from 'react-dom/client';

import books from './books';
import Book from './Book';
import './index.css';


function BookList() {
    const getBook = (id) => books.find((book) => book.id === id);
    return (
	<section>
	    <h1>Top Selling Books</h1>
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
	</section>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
