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
        this.generateQuote();
    }

    handleMediumQuoteClick() {
        this.generateQuote();
    }

    handleLargeQuoteClick() {
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
                    smallQuotes: result.map((number) => { 
                        return number.split(' ').length
                    }).filter((word) => { return word <= 4 }),
                    mediumQuotes: result.map((number) => {
                        return number.split(' ').length
                    }).filter((word) => { return word >= 5 && word <= 12 }),
                    largeQuotes: result.map((number) => {
                        return number.split(' ').length
                    }).filter((word) => {return word >= 13 })
                })
            })
            .catch(error => this.setState({ error }));
    }

    generateQuote() {
        // generates a random number that range from 0 to the length of the quotes array in the Swanson API and add 1
        console.log('this.state.apiResult.length: ' + this.state.apiResult.length);
        let randomNumber = Math.floor((Math.random() * this.state.apiResult.length) + 1);
       
        this.setState({ quote: this.state.apiResult[randomNumber]})

        if (this.handleSmallQuoteClick) {
            console.log(this.state.smallQuotes);
            this.setState({ smallQuotes: this.state.smallQuotes });
        }
        else if (this.handleMediumQuoteClick) {
            console.log(this.state.mediumQuotes);
            this.setState({ mediumQuotes: this.state.mediumQuotes });
        } 
        else if (this.handleLargeQuoteClick)  {
            console.log(this.state.mediumQuotes);
            this.setState({ largeQuotes: this.state.largeQuotes });
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