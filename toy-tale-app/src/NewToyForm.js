import React, { Component } from "react";

class NewToyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleReset = () => {
    this.setState({ name: "", image: "" });
  };

  render() {
    const display = this.props.display ? "block" : "none";

    return (
      <div className="container" style={{ display: display }}>
        <form
          className="add-toy-form"
          onSubmit={e =>
            this.props.handleSubmit(e, this.state.name, this.state.image)
          }
          onReset={this.handleReset}
        >
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a toy's name..."
            className="input-text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image"
            value={this.state.image}
            placeholder="Enter a toy's image URL..."
            className="input-text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default NewToyForm;
