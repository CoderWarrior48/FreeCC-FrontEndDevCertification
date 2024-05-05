import './App.scss';
import React from 'react'
import retrieveRandomQuote from './quotes'


class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quote: "default",
      author: "author",
    }
  }


  newQuote = () => {
    var quote = retrieveRandomQuote()
    this.setState({
      quote: quote.text,
      author: quote.author
    })
  }

  render () {
  return (
    <div class="container-fluid">
      <div id="quote-box" class="card">
        <h1 id="text" class="card-title">{this.state.quote}</h1>
        <p id="author">{this.state.author}</p>
        <div class="row">
          <div class="col-xs-2">
            <buttton id="new-quote" class="btn btn-primary" onClick={this.newQuote.bind(this)}>New Quote</buttton>
          </div>
          <div class="col-xs-1">
            <a id="btn tweet-quote">tweet</a>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
