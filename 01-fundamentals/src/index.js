import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
    img: './images/HowToDrawEverything.jpg',
    title: 'How To Draw Everything',
    author: 'Emma Greene',
};
const secondBook = {
    img: './images/LearnALot.jpg',
    title: 'Learn A Lot While You Sit On The Pot',
    author: 'Jack Haynes',
};
const thirdBook = {
    img: './images/FromCrookToCook.jpg',
    title: 'From Crook to Cook',
    author: 'Snoop Dogg',
}

function BookList() {
    return <section className='booklist'>
	       <Book
		   author={firstBook.author}
		   title={firstBook.title}
		   img={firstBook.img}>
		   First!
	       </Book>
	       <Book
		   author={secondBook.author}
		   title={secondBook.title}
		   img={secondBook.img} />
	       <Book
		   author={thirdBook.author}
		   title={thirdBook.title}
		   img={thirdBook.img} />
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
