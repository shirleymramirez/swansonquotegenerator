import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                <p style={{ marginBottom: 50 }}>{this.props.smallQuotes}</p>
                <p style={{ marginBottom: 50 }}>{this.props.mediumQuotes}</p>
                <p style={{ marginBottom: 50 }}>{this.props.largeQuotes}</p>
                {/* {console.log(this.props.quote)} */}
            </div>
        )
    }
}

export default Quote;