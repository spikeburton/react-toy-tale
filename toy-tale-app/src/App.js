import React, { Component } from "react";
import ToyHeader from "./ToyHeader";
import NewToyForm from "./NewToyForm";
import AddToyButton from "./AddToyButton";
import ToyCollection from "./ToyCollection";

import { toys } from "./resources/toys";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false,
      toys: toys
    };
  }

  handleNewToyButton = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  };

  handleNewToyForm = (e, name, image) => {
    e.preventDefault();

    const newToy = {
      id: this.state.toys[this.state.toys.length - 1].id + 1,
      name,
      image,
      likes: null
    };

    this.setState({
      toys: [...this.state.toys, newToy]
    });

    e.target.reset();
  };

  render() {
    return (
      <div>
        <ToyHeader />
        <NewToyForm
          display={this.state.displayForm}
          handleSubmit={this.handleNewToyForm}
        />
        <AddToyButton handleClick={this.handleNewToyButton} />
        <ToyCollection toys={this.state.toys} />
      </div>
    );
  }
}

export default App;
