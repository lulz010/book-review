import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddReview from './AddReview';
import ReviewList from './ReviewList';

export default ()=>{
    const [books, setBooks] = useState({});

    const getBooks = async() => {
        const res = await axios.get('http://localhost:4000/books');
        setBooks(res.data);
    }

    useEffect(()=> {
        getBooks();
    },[]);

    const renderBooks = Object.values(books).map(book => {
        return( 
            <div 
            className="card bg-light"
            style={{ width: '30%', marginBottom: '20px'}}
            key={book.id}
            >
                <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <h6>What readers think:</h6>
                    <ReviewList bookId = {book.id} />
                    <AddReview bookId={book.id} />
                </div>   
            </div>
        );
    });
    return <div>{renderBooks}</div>;
};