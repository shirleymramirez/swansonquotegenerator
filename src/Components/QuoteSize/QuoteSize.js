import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class QuoteSize extends Component {
    
    render() {
        // It should show me a quote that are 4 words or less if I choose small
        // It should show me a quote that is 5 words to 12 words if I choose medium
        // It should show me a quote that is 13 words or larger if I choose large
        return (
            <div>
                <Button 
                    className='button'
                    variant='success'
                    onClick={this.props.onSmallQuoteClick}>
                    Small Quotes
                </Button>
                <Button
                    className='button'
                    variant='success'
                    onClick={this.props.onMediumQuoteClick}>
                    Medium Quotes
                </Button>
                <Button
                    className='button'
                    variant='success'
                    onClick={this.props.onLargeQuoteClick}>
                    Large Quotes
                </Button>
            </div>
        )   
    }
}


export default QuoteSize;