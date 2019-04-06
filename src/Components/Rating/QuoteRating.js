import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class QuoteRating extends Component {
    // It should let me give it rating of 1 to 5 on a quote
    // It should not let the same IP address / session rate more than 1 time

    render() {
        return (
            <div style={{ marginBottom: 50 }}> 
                <StarRatings 
                    rating={2.403}
                    starDimension="40px"
                    starSpacing="15px" />
            </div>
        )
    }
}

export default QuoteRating;