import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

export default () => {
    return <div className="container">
        <h1 style={{color:'purple'}}>Add a Book</h1>
        <AddBook />
        <hr />
        <h1 style={{color:'purple'}}>Books</h1>
        <BookList />
    </div>
};