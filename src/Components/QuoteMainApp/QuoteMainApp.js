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
            smallQuotes:[],
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

    handleLargeQuoteClick(event) {
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
        let randomNumber = Math.floor((Math.random() * this.state.apiResult.length) + 1);
        
        this.setState({ quote: this.state.apiResult[randomNumber]})

        if (this.handleSmallQuoteClick) {
            var newSmallQuote = this.state.smallQuotes.slice();
            newSmallQuote.push(this.state.smallQuotes);
            this.setState({ smallQuotes: newSmallQuote });
            console.log(this.state.smallQuotes);
        }
        else if (this.handleMediumQuoteClick) {
            var newMediumQuote = this.state.mediumQuotes.slice();
            newMediumQuote.push(this.state.mediumQuotes);
            this.setState({ mediumQuotes: newMediumQuote });
            // console.log(this.state.mediumQuotes);
        } 
        else if (this.handleLargeQuoteClick)  {
            var newlargeQuote = this.state.largeQuotes.slice();
            newlargeQuote.push(this.state.largeQuotes);
            this.setState({ largeQuotes: newlargeQuote });

            // console.log(this.state.largeQuotes);
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