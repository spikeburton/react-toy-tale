import React, { Component } from 'react'
import ToyHeader from './ToyHeader';
import NewToyForm from './NewToyForm';
import ToyCollection from './ToyCollection'

class App extends Component {
  render() {
    return (
      <div>
        <ToyHeader />
        <NewToyForm />
        <ToyCollection />
      </div>
    )
  }
}

export default App
