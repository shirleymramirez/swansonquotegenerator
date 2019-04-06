import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class QuoteRating extends Component {
    // It should let me give it rating of 1 to 5 on a quote
    // Everytime a button is click, star rating will be shown as well to allow user to rate a quote
    // Rating will be saved in the database with it's associating quote's id
    // Once user rate a quote, the IP address will be saved as well to prevent double rating of the quote using
    // the same IP address
    // It should not let the same IP address / session rate more than 1 time
    // Should make another component for the average rating of the quote

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