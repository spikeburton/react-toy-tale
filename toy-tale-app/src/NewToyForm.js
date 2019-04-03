import React, { Component } from "react";

class NewToyForm extends Component {
  render() {
    return (
      <div className="container" style={{ display: "block" }}>
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            value=""
            placeholder="Enter a toy's name..."
            class="input-text"
          />
          <input
            type="text"
            name="image"
            value=""
            placeholder="Enter a toy's image URL..."
            class="input-text"
          />
          <br/>
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            class="submit"
          />
        </form>
      </div>
    );
  }
}

export default NewToyForm;
