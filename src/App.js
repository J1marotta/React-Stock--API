import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock, loadLogoForStock} from './api/iex'
import Error from './components/Error'
import Logo from './components/Logo'

console.log(loadLogoForStock('goog'))

class App extends Component {
  state = {
    symbol: 'ter',
    quote: null,
    error: false,
    logo:  'ter'
  };

  // when the app gets mounted run our load quote
  componentDidMount() {
    this.loadQuote();
  };


  // load our api quote.
  loadQuote() {
    loadLogoForStock(this.state.symbol)
      .then((logo) => {
        this.setState({ logo: logo })
      })
      .catch((err) => {
        this.setState({error: true, logo: null})
      })
    loadQuoteForStock(this.state.symbol)
      // if you get the api back then load the stats into quote
      .then((quote) => {
        // console.log(quote)
        this.setState({ quote: quote, error: false})
      })
      // if errors print them
      .catch((err) => {
        this.setState({error: true, quote: null})
      })
  }



  //handle our intake to change state
  handleSymbolchange = (event) => {
    console.log(event.target.value);
    const symbol = event.target.value;
    this.setState({ symbol: symbol });
  }

  handleButtonClick = (event) => {
    this.loadQuote();
  }


  render() {
    return (
      <div className="App">
        <br/>
        <Error error={this.state.error}/>
        <Logo  {...this.state.logo}/>
        <StockInfo {...this.state.quote}/>
        <span>
          <input
            value={this.state.symbol}
            placeholder="Enter Symbol"
            onChange= {this.handleSymbolchange}
          />
          <button
            onClick = {this.handleButtonClick} > Get Quote
          </button>
        </span>
      </div>
    );
  }
}

export default App;
