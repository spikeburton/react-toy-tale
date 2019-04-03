import React, { Component } from "react";

class NewToyForm extends Component {
  render() {
    const display = this.props.display ? "block" : "none"

    return (
      <div className="container" style={{ display: display }}>
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            value=""
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <input
            type="text"
            name="image"
            value=""
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br/>
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
