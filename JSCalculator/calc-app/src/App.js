import './App.scss';
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render(){
    return <h1>{this.props.value ? this.props.value:"Error, null"}</h1>
  }
}


class Button extends React.Component {
  constructor(props) {
    super(props)
    
  }

  mapIdToSymbol = (id) => {
    var map = {
    "one":"1",
    "two":"2",
    "three":"3",
    "four":"4",
    "five":"5",
    "six":"6",
    "seven":"7",
    "eight":"8",
    "nine":"9",
    "zero":"0",
    "decimal":".",
    "subtract":"-",
    "add":"+",
    "multiply":"X",
    "divide":"/",
    "clear":"CE",
    "equals":"=",
    }

    return map[id]
  }

  render() {
    return (
      <button onClick={this.props.handler(this.props.id)} id={this.props.id} className={`btn btn-primary key  ${this.props.id === "clear" ? "btn-danger" : this.props.id == "equals" ? "btn-success" : ""}`}>{this.mapIdToSymbol(this.props.id)}</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answer:0,
      equasion:[]
    }
    this.addToEquasion = this.addToEquasion.bind(this)
    this.clearEquasion = this.clearEquasion.bind(this)
    this.submitEquasion = this.submitEquasion.bind(this)

    
  }

  addToEquasion(data) {
    this.setState({
      equasion: [...this.state.equasion, data] 
    })
  }
  clearEquasion() {
    this.setState({
      equasion: [] 
    })
  }
  submitEquasion() {
    this.setState({
      answer: eval(this.state.equasion.join())
    })
  }
   

  render () {
    return (
      <div>
        <Display value={this.state.equasion}/>
        <div className='keys'>
          <Button id="add" handler={this.addToEquasion} />
          <Button id="subtract" handler={this.addToEquasion}/>
          <Button id="multiply" handler={this.addToEquasion}/>
          <Button id="divide" handler={this.addToEquasion}/>
          <Button id="nine" handler={this.addToEquasion}/>
          <Button id="eight" handler={this.addToEquasion}/>
          <Button id="seven" handler={this.addToEquasion}/>
          <Button id="six" handler={this.addToEquasion}/>
          <Button id="five" handler={this.addToEquasion}/>
          <Button id="four" handler={this.addToEquasion}/>
          <Button id="three" handler={this.addToEquasion}/>
          <Button id="two" handler={this.addToEquasion}/>
          <Button id="one" handler={this.addToEquasion}/>
          <Button id="zero" handler={this.addToEquasion}/>
          <Button id="decimal" handler={this.addToEquasion}/>
          <Button id="clear" handler={this.clearEquasion}/>
          <Button id="equals" handler={this.submitEquasion}/>
        </div>
      </div>
    )
  }
}

export default App;
