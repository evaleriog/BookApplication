import React from 'react';
// import {Link} from 'react-router-dom';

const Card = (props) => (
    <div>
        {/*<Link to={`/book/${props.book.id}`}>*/}
            <img src={`http://covers.openlibrary.org/b/isbn/${props.book.id}-L.jpg`} alt={props.book.title}/>
            <div>
                <h3>{props.book.title}</h3>
                <p>by {props.book.author}</p>
            </div>
        {/*</Link>*/}
    </div>
);

export default Card;