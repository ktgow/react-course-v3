import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
    {
	img: './images/HowToDrawEverything.jpg',
	title: 'How To Draw Everything',
	author: 'Emma Greene',
	id: 1,
    },
    {
	img: './images/LearnALot.jpg',
	title: 'Learn A Lot While You Sit On The Pot',
	author: 'Jack Haynes',
	id: 2,
    },
    {
	img: './images/FromCrookToCook.jpg',
	title: 'From Crook to Cook',
	author: 'Snoop Dogg',
	id: 3,
    },
];

function BookList() {
    return <section className='booklist'>
	       {books.map((book) =>
		   <Book
		       {...book}
		       key={book.id}
		   />)
	       }
	   </section>;
};

function Book({img, title, author, children}) {
    return (
	<article className='book'>
	    <img src={img} alt={title} />
	    <h2>{title}</h2>
	    <h3>{author}</h3>
	    {children}
	</article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
