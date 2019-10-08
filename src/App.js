import React, { Component } from "react";
import Nav from "./Nav";
import JournalForm from "./JournalForm";
import Post from "./Post.jsx";
import userService from "./utils/userService";

import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage";

class App extends Component {
  state = {
    user: userService.getUser(),
    isShowing: true,
    posts: []
  };

  handleLogout = () => {
    userService.logOut();
    this.setState({
      user: null
    });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    const title = <h1>Quiet Time Quotes</h1>;
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <Post
          key={index}
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
        <SignupPage signIn={this.handleSignupOrLogin} />
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
