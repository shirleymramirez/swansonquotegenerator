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
                    // conditions for each button depending on number of words in the quotes
                    smallQuotes: result.filter(words => { return words.split(' ').length <= 4 }),
                    mediumQuotes: result.filter(words => { return words.split(' ').length >= 5 && words.split(' ').length <= 12 }),
                    largeQuotes: result.filter(words => { return words.split(' ').length >= 13 }),
                })
            })
            .catch(error => this.setState({ error }));
    }

    handleSmallQuoteClick() {
        this.generateSmallQuote();
    }

    handleMediumQuoteClick() {
        this.generateMediumQuote();
    }

    handleLargeQuoteClick() {
        this.generateLargeQuote();
    }

    generateSmallQuote = () => {    
        // generates a random number index that range from 0 to the length of the filtered smallQuotes array in the Swanson API
        const index = Math.floor((Math.random() * this.state.smallQuotes.length));
        //update quotes on the browser with small quotes
        this.setState({ quotes: this.state.smallQuotes[index] });
    }

    generateMediumQuote = () => {
        // generates a random number index that range from 0 to the length of the filtered mediumQuotes array in the Swanson API
        const index = Math.floor((Math.random() * this.state.mediumQuotes.length));
        //update quotes on the browser with medium quotes
        this.setState({ quotes: this.state.mediumQuotes[index] });
    }     

    generateLargeQuote = () => {
        // generates a random number index that range from 0 to the length of the filtered largeQuotes array in the Swanson API
        const index = Math.floor((Math.random() * this.state.largeQuotes.length));
        //update quotes on the browser with large quotes
        this.setState({ quotes: this.state.largeQuotes[index] });
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