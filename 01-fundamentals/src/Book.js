function Book({getBook, id, orderNumber, children}) {
    const book = getBook(id);
    const {img, title, author} = book;
    return (
	<article
	    className='book'
	    >
	    <span className="number">{orderNumber}</span>
	    <img src={img} alt={title} />
	    <h2>{title}</h2>
	    <h3>{author}</h3>
	    {children}
	</article>
    );
}
export default Book;
