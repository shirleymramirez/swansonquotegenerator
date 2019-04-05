import React, { Component } from 'react';
import QuoteSize from '../QuoteSize/QuoteSize';
import Quote from '../Quote/Quote';

class QuoteMainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: '',
            smallQuotes: [],
            mediumQuotes:[],
            largeQuotes: [],
        }
        this.handleSmallQuoteClick = this.handleSmallQuoteClick.bind(this);
        this.handleMediumQuoteClick = this.handleMediumQuoteClick.bind(this);
        this.handleLargeQuoteClick = this.handleLargeQuoteClick.bind(this);
    }

    // update component when data is retrieved using AJAX results to set local state
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/100')
            .then(result => result.json())
            .then((result) => {
                this.setState({
                    smallQuotes: result.filter(words => { return words.split(' ').length <= 4 }),
                    mediumQuotes: result.filter(words => { return words.split(' ').length >= 5 && words.split(' ').length <= 12 }),
                    largeQuotes: result.filter(words => { return words.split(' ').length >= 13 }),
                })
            })
            .catch(error => this.setState({ error }));
    }

    handleSmallQuoteClick = (e) => {
        e.preventDefault();
        console.log('smallButton was clicked');
        this.generateSmallQuote();
    }

    handleMediumQuoteClick= (e) => {
        e.preventDefault();
        console.log('mediumButton was clicked');
        this.generateMediumQuote();
    }

    handleLargeQuoteClick = (e) => {
        e.preventDefault();
        console.log('largeButton was clicked'); 
        this.generateLargeQuote();
    }

    generateSmallQuote = () => {
        if(this.handleSmallQuoteClick) {
            // generates a random number index that range from 0 to the length of the filtered smallQuotes array in the Swanson API
            const index = Math.floor((Math.random() * this.state.smallQuotes.length));
            console.log('smallQuotesLength: ' + this.state.smallQuotes.length);
            console.log('index: ' + index);

            this.setState({ quotes: this.state.smallQuotes[index] });
            console.log(this.state.quotes);
           }
    }

    generateMediumQuote = () => {
        if (this.handleMediumQuoteClick) {
            const index = Math.floor((Math.random() * this.state.mediumQuotes.length));
            console.log('mediumQuotesLength: ' + this.state.mediumQuotes.length);
            console.log('index: ' + index);

            this.setState({ quotes: this.state.mediumQuotes[index] });
            console.log(this.state.quotes);
        }
    }     

    generateLargeQuote = () => {
        if (this.handleLargeQuoteClick) {
            const index = Math.floor((Math.random() * this.state.largeQuotes.length));
            console.log('largeQuotesLength: ' + this.state.largeQuotes.length);
            console.log('index: ' + index);

            this.setState({ quotes: this.state.largeQuotes[index] });
            console.log(this.state.quotes);
        }
    }   

    render() {
        return (
            <div>
                <QuoteSize 
                    onSmallQuoteClick={this.handleSmallQuoteClick}
                    onMediumQuoteClick={this.handleMediumQuoteClick} 
                    onLargeQuoteClick={this.handleLargeQuoteClick}/>
                <Quote quote={this.state.quotes} />
            </div>
        )
    }
}

export default QuoteMainApp;