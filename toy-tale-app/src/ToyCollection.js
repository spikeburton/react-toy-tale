import React, { Component } from 'react'
import ToyCard from './ToyCard';

import { toys } from './resources/toys';

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
