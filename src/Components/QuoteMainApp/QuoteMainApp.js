import React from 'react';
import QuoteSize from '../QuoteSize/QuoteSize';
import Quote from '../Quote/Quote';

class QuoteMainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            show: false,
            apiResult: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.generateQuote();
    }

    // update component when data is retrieved using AJAX results to set local state
    componentDidMount() {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/100')
            .then(result => result.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    show: true,
                    quote: result[0],
                    apiResult: result
                })
            })
            .catch(error => this.setState({ error }));
    }

    generateQuote = () => {
        const chosenQuote = [];
        const quotes = this.state.apiResult;

        // generates a random number that range from 0 to the length of the quotes array in the Swanson API
        let randomNumber = Math.floor((Math.random() * this.state.apiResult.length) + 1);

        quotes.forEach(function (element, index) {
            if (index === randomNumber) {
                chosenQuote.push(element);
            }
        })
        //update our text state through the elements pushed in the chosenQuote
        this.setState({ quote: chosenQuote })
    }


    render() {
        // const buttons = this.state.quote.map((button, i) => {
        //     const selected =    
        // })

        return (
            <div>
                <QuoteSize handleClick={this.handleClick} />
                <Quote quote={this.state.quote}/>
            </div>
        )
    }
}

export default QuoteMainApp;