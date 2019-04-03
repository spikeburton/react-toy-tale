import React, { Component } from 'react'

class ToyCard extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} className="toy-avatar" />
        <p>{this.props.likes ? `${this.props.likes} Likes` : `0 Likes`}</p>
        <button className="like-btn">{"Like <3"}</button>
      </div>
    )
  }
}

export default ToyCard
