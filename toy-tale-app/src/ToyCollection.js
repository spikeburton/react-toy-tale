import React, { Component } from 'react'
import './resources/toys'
import { toys } from './resources/toys';
import ToyCard from './ToyCard';

class ToyCollection extends Component {
  render() {
    return (
      <div id="toy-collection">
        {toys.map(toy => <ToyCard key={toy.id} {...toy} />)}
      </div>
    )
  }
}

export default ToyCollection
