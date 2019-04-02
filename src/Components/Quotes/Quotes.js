import React from 'react';
import QuoteSize  from '../QuoteSize/QuoteSize';

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            show: false,
            apiResult: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.generateQuote();
    }

    componentDidMount() {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/10')
            .then(result => result.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    show: true,
                    text: result[0],
                    apiResult: result
                })
            })
            .catch(error => this.setState({ error }));
    }

    generateQuote = () => {
        const chosenQuote = [];
        const quotes = this.state.apiResult;
        let randomNumber = Math.floor((Math.random() * this.state.apiResult.length) + 1);

        quotes.forEach(function(element, index){
            if(index === randomNumber) {
                chosenQuote.push(element);
            }
        })
        this.setState({ text: chosenQuote })
    }


    render() {
        return(
            <div>
                <QuoteSize 
                    handleClick={this.handleClick}
                    text={this.state.text}
                />
            </div>
        )
    }
}

export default Quotes;