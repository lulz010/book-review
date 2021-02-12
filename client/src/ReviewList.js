import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default ({ bookId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const res = await axios.get(`http://localhost:4001/books/${bookId}/reviews`);
    
        setReviews(res.data);
    };

    const renderReviews = reviews.map(review => {
        return <li key={review.id}>{review.content}</li>;
    });

    return <div>{renderReviews}</div>
}