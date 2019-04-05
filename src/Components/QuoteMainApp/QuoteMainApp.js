import React, { Component } from 'react';
import QuoteSize from '../QuoteSize/QuoteSize';
import Quote from '../Quote/Quote';

class QuoteMainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            show: false,
            apiResult: null,
            id: false,
            smallQuotes: [],
            mediumQuotes:[],
            largeQuotes: []
        }
        this.handleSmallQuoteClick = this.handleSmallQuoteClick.bind(this);
        this.handleMediumQuoteClick = this.handleMediumQuoteClick.bind(this);
        this.handleLargeQuoteClick = this.handleLargeQuoteClick.bind(this);
    }

    handleSmallQuoteClick() {
        console.log('smallButton was clicked');
        this.generateQuote();
    }

    handleMediumQuoteClick() {
        console.log('mediumButton was clicked');
        this.generateQuote();
    }

    handleLargeQuoteClick() {
        console.log('largeButton was clicked'); 
        this.generateQuote();
    }

    // update component when data is retrieved using AJAX results to set local state
    componentDidMount() {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/100')
            .then(result => result.json())
            .then((result) => {
                // console.log(result);
                this.setState({
                    show: true,
                    quote: result[0],
                    apiResult: result,
                    smallQuotes: result.filter((word) => { return word.split(' ').length <= 4 }),
                    mediumQuotes: result.filter((word) => { return word.split(' ').length >= 5 && word.split(' ').length <= 12 }),
                    largeQuotes: result.filter((word) => { return word.split(' ').length >= 13 })
                })
            })
            .catch(error => this.setState({ error }));
    }

    generateQuote() {
        // generates a random number that range from 0 to the length of the quotes array in the Swanson API and add 1

        if (this.handleSmallQuoteClick) {
            let randomNumber = Math.floor((Math.random() * this.state.smallQuotes.length) + 1);
            console.log('smallQuotesLength: ' + this.state.smallQuotes.length);
            console.log('randomNumber: ' + randomNumber);

            this.setState({ smallQuotes: this.state.smallQuotes[randomNumber] });
            console.log("smallQuotes: " + this.state.smallQuotes);
        }

        if (this.handleMediumQuoteClick) {
            let randomNumber = Math.floor((Math.random() * this.state.mediumQuotes.length) + 1);
            console.log('mediumQuotesLength: ' + this.state.mediumQuotes.length);
            console.log('randomNumber: ' + randomNumber);

            this.setState({ mediumQuotes: this.state.mediumQuotes[randomNumber] });
            console.log("mediumQuotes: " + this.state.mediumQuotes);
        } 

        if (this.handleLargeQuoteClick)  {
            let randomNumber = Math.floor((Math.random() * this.state.largeQuotes.length) + 1);
            console.log('largeQuotesLength: ' + this.state.largeQuotes.length);
            console.log('randomNumber: ' + randomNumber);

            this.setState({ largeQuotes: this.state.largeQuotes[randomNumber] });
            console.log("largeQuotes: " + this.state.largeQuotes);
        }
    }

    render() {
        return (
            <div>
                <QuoteSize 
                    onSmallQuoteClick={this.handleSmallQuoteClick}
                    onMediumQuoteClick={this.handleMediumQuoteClick}
                    onLargeQuoteClick={this.handleLargeQuoteClick} />
                <Quote 
                    smallQuotes={this.state.smallQuotes}
                    mediumQuotes={this.state.mediumQuotes}
                    largeQuotes={this.state.largeQuotes} />
            </div>
        )
    }
}

export default QuoteMainApp;