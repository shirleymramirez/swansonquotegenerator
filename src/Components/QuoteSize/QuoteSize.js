import React from 'react';
import Button from 'react-bootstrap/Button';

class QuoteSize extends React.Component {
    render() {
        return(
            <div> 
                <Button 
                    className='button'
                    variant="success" 
                    onClick={this.props.handleClick}>
                    Get Quotes
                </Button>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default QuoteSize;