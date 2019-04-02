import React from 'react';
import Button from 'react-bootstrap/Button';

class QuoteSize extends React.Component {
    render() {
        return(
            <div> 
                <h1>Quote Generator from Ron Swanson Quotes API”</h1>
                <Button 
                    className='button'
                    variant="success" 
                    onClick={this.props.handleClick}>
                    Get Quotes
                </Button>
                {/* populate the DOM with quotes once button is clicked */}
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default QuoteSize;