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
	       <EventExamples/>
	       {books.map((book) =>
		   <Book
		       {...book}
		       key={book.id}
		   />)
	       }
	   </section>;
};

function EventExamples() {
    const handleFormInput = (e) => {
	console.log('form input');
	console.log('Target name:', e.target.name);
	console.log('Target value:', e.target.value);
    }
    const handleButtonClick = () => {
	console.log('button click');
    }
    const handleSubmit = (e) => {
	e.preventDefault();
	console.log('Submit:', e);
    }
    return (
	<section>
	    <form onSubmit={handleSubmit}>
		<h2>Typical form</h2>
		<input
		    type='text'
		    name='example'
		    onChange={handleFormInput}
		    style={{ margin: '1rem 0' }}
		/>
		<button type="submit">click me</button>
	    </form>
	</section>
    );
}

function Book({img, title, author, children}) {
    const handleButtonClick = () => {
	alert('button click');
    };
    return (
	<article
	    className='book'
	    onClick={handleButtonClick}
	>
	    <img src={img} alt={title} />
	    <h2>{title}</h2>
	    <h3>{author}</h3>
	    {children}
	</article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
