import { connect } from "react-redux";
import React from "react";

class App extends React.Component {

  constructor() {
    super()
    //value is for current value of text box, we need it to temp save
    //and pass it to this.state.counter when user click
    this.state = { counter: 0, value: 0 }
    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
    this.addby = this.addby.bind(this);
    this.handleTextBox = this.handleTextBox.bind(this);
  }
  //use see that above manner to binding is a really mess
  //and if you want to use them in another class
  //show redfine and bind on that class
  //it's better to move this to another files
  //you see better approach for this in nexts commits

  increament(){
    this.props.dispatch({
      type: 'INC'
    })
  }

  decreament(){
    this.props.dispatch({
      type: 'DEC'
    })
  }

  addby(){
    this.props.dispatch({
      type: 'ADDBY',
      payload: { counter: this.state.value }
    })
  }

  handleTextBox(event){
    event.preventDefault()
    this.state.value = event.target.value;
  }

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.increament}>Increament</button>
        <button onClick={this.decreament}>Decreament</button>
        <button onClick={this.addby}>Addbybelow</button>
        <input type="number" onChange={this.handleTextBox} placeholder="Add by me"></input>
      </>
    );
  }
}

//ruleofthumb:for variables
const mapStateToProps = (state) => {
  return { counter: state.counter };
};

//ruleofthumb:for functions
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(App);
