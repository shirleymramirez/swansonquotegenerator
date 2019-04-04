import React from 'react';

class Quote extends React.Component {
    render() {
        return (
            <div>
                <p style={{ marginBottom: 50 }}>{this.props.quote}</p>
                {console.log(this.props.quote)}
            </div>
        )
    }
}

export default Quote;