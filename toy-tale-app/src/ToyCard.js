import React, { Component } from "react";

class ToyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };
  }

  handleClick = () => {
    console.log('button was clicked')
    const likes = this.state.likes || 0;
    this.setState({
      likes: likes + 1
    });
  };
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} className="toy-avatar" alt="toy-avatar" />
        <p>{this.props.likes ? `${this.state.likes} Likes` : `0 Likes`}</p>
        <button className="like-btn" onClick={this.handleClick}>
          {"Like <3"}
        </button>
      </div>
    );
  }
}

export default ToyCard;
