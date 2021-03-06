import React, { Component } from "react";
import PropTypes from "prop-types";

class JournalForm extends Component {
  state = {
    author: "",
    post: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault(); //Prevents page from reloading
    this.props.handleAddPost({ ...this.state });
  };

  render() {
    return (
      <form className="blog-form">
        <div>
          <label>post</label>
          <textarea
            type="text"
            name="post"
            onChange={this.handleOnChange}
            value={this.state.post}
          />
        </div>
        <button onClick={this.handleSubmit}>POST</button>
        <button onClick={this.props.handleToggle}>Close</button>
      </form>
    );
  }
}

export default JournalForm;

JournalForm.propTypes = {
  handleToggle: PropTypes.func
};
