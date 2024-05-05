import './App.scss';
import React from 'react'
import retrieveRandomQuote from './fetch'


class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quote: "default",
      author: "author",
    }

  }

  componentDidMount() {
    this.newQuote()
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
    <div id="container" className="container-fluid align-items-center">
      <link href='https://fonts.googleapis.com/css?family=open-sans' rel='stylesheet'></link>
      <div id="quote-box" className="card text-bg-dark" style={{width:'20rem'}}>
        <img src="./wallpaper.jpg" className="card-img-top"></img>
        <div className="card-body">
          <h1 id="text" className="card-title text-center open-sans">{this.state.quote}</h1>
          <p id="author" className='text-center'>— {this.state.author}</p>
          <div className="row">
            <div className="col-xs-10">
              <buttton id="new-quote" className="btn btn-primary" onClick={this.newQuote.bind(this)}>New Quote</buttton>
            </div>
            <div className="col-xs-1">
              <a id="tweet-quote" href="twitter.com/intent/tweet" className='btn btn-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
