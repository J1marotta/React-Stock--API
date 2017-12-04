import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock} from './api/iex'



class App extends Component {
  state = {
    symbol: null,
    quote: null
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
        this.setState({ quote: quote})
      })
      // if errors print them
      .catch((err) => {
        console.log(err)
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
        </span>

      </div>
    );
  }
}

export default App;
