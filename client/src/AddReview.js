import React, { useState } from 'react';
import axios from 'axios';

export default ({ bookId }) => {
    const [content, setContent] = useState('');

    const onAddReview = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/books/${bookId}/reviews`, {content});
        
        setContent('');
    };

    return <div>
        <form onSubmit={onAddReview} style={{marginTop:'10px'}}>
            <div className="form-group">
                <label>Add a Review</label>
                <input value={content}
                onChange={ e=> setContent(e.target.value) }
                className="form-control" />
            </div>
            <button className="btn btn-info"
            style={{marginTop: '10px'}}>Add</button>
        </form>
    </div>
}