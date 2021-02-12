import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [bookTitle, setBookTitle] = useState('');

    const onAddBook = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/books', {
            title: bookTitle
        })
    
        setBookTitle('');
    };

    return <div>
        <form onSubmit={onAddBook}>
            <div className="form-group">
                <label>Book Title</label>
                <input value={bookTitle} onChange={e => setBookTitle(e.target.value)} className="form-control"></input>
            </div>
            <button className="btn btn-info" style={{marginTop:'10px'}}>Add</button>
        </form>
    </div>;
};