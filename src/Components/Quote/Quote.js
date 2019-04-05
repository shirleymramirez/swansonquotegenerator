import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                <p style={{ marginBottom: 50 }}>{this.props.quote}</p>
            </div>
        )
    }
}

export default Quote;