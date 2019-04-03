import React, { Component } from 'react'
import ToyCard from './ToyCard';


class ToyCollection extends Component {
  render() {
    return (
      <div id="toy-collection">
        {this.props.toys.map(toy => <ToyCard key={toy.id} {...toy} />)}
      </div>
    )
  }
}

export default ToyCollection
