import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
	<>
	    <h2>My First Component</h2>
	    <p>A paragraph.</p>
	</>
    );
}
// function Greeting() {
//     return React.createElement('h2', {}, 'Hello, world!');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
