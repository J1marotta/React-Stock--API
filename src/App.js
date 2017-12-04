import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock} from './api/iex'
import Error from './components/Error'



class App extends Component {
  state = {
    symbol: 'goog',
    quote: null,
    error: false
  };

  // when the app gets mounted run our load quote
  componentDidMount() {
    this.loadQuote();
  };


  // load our api quote.
  loadQuote() {
    loadQuoteForStock(this.state.symbol)
      // if you get the api back then load the stats into quote
      .then((quote) => {
        console.log(quote)
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
              <Error error={this.state.error}/>
        </span>

      </div>
    );
  }
}

export default App;
