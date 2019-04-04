import React from 'react';
import Button from 'react-bootstrap/Button';

class QuoteSize extends React.Component {
    
    render() {
        return (
            <div>
                <Button 
                    className='button'
                    id='smallButtonQuotes'
                    variant='success'
                    onClick={this.props.handleClick}>
                    Small Quotes
                </Button>
                <Button
                    className='button'
                    id='mediumButtonQuotes'
                    variant='success'
                    onClick={this.props.handleClick}>
                    Medium Quotes
                </Button>
                <Button
                    className='button'
                    id='largeButtonQuotes'
                    variant='success'
                    onClick={this.props.handleClick}>
                    Large Quotes
                </Button>
            </div>
        )   
    }
}


export default QuoteSize;