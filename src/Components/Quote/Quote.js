import React, { Component } from 'react';
import QuoteRating from '../Rating/QuoteRating';

class Quote extends Component {
    render() {
        return (
            <div>
                <p style={{ marginBottom: 20, marginTop: 15, color: 'purple' }}>{this.props.quote}</p>
                <QuoteRating />
            </div>
        )
    }
}

export default Quote;