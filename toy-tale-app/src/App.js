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
  render() {
    return (
      <div>
        <ToyHeader />
        <NewToyForm display={this.state.displayForm} />
        <AddToyButton />
        <ToyCollection />
      </div>
    )
  }
}

export default App
