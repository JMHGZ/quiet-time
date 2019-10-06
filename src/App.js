import React, { Component } from "react";
import Nav from "./Nav";
import JournalForm from "./JournalForm";
import Post from "./Post.jsx";
import userService from "./utils/userService";

import "./App.css";

class App extends Component {
  state = {
    user: userService.getUser(),
    isShowing: true,
    posts: []
  };

  render() {
    const title = <h1>Quiet Time Quotes</h1>;
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <Post
          key={index}
          title={item.title}
          user={item.author}
          content={item.post}
          handleDelete={this.handleDelete}
          id={index}
        />
      );
    });
    return (
      <div className="App container">
        <Nav content={title} />
        {composedPosts}
        {this.state.isShowing ? (
          <JournalForm
            handleAddPost={this.handleAddPost}
            handleToggle={this.handleShowForm}
          />
        ) : (
          <button onClick={this.handleShowForm}>Post</button>
        )}
      </div>
    );
  }
}

export default App;
