import React, { Component } from 'react'
import ToyHeader from './ToyHeader';
import NewToyForm from './NewToyForm';
import AddToyButton from './AddToyButton';
import ToyCollection from './ToyCollection'

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false
    }
  }

  handleNewToyButton = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  render() {
    return (
      <div>
        <ToyHeader />
        <NewToyForm display={this.state.displayForm} />
        <AddToyButton handleClick={this.handleNewToyButton} />
        <ToyCollection />
      </div>
    )
  }
}

export default App
