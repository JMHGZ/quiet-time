import React, { Component } from "react";
import Nav from "./Nav";
import JournalForm from "./JournalForm/index";
import Post from "./Post.jsx";
import userService from "./utils/userService";
import SignupPage from "./pages/SignupPage/SignupPage";
import "./App.css";

class App extends Component {
  state = {
    user: userService.getUser(),
    isShowing: true,
    posts: [],
    joke: ""
  };

  componentDidMount = () => {
    getQuotes().then(results => {
      console.log(results.value);
      this.setState({
        joke: results.value
      });
    });
  };

  handleAddPost = ({ title, posts }) => {
    const url = "http://localhost:3001/api/posts";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ title, posts })
    };

    handleFetch(url, options).then(results => {
      this.setState({
        posts: [...this.state.posts, results],
        isShowing: false
      });
    });
  };

  // handleUpdatePost = async updatedPostData => {
  //   const updatedPost = await quoteAPI.update(updatedPostData);
  //   const newPostsArray = this.state.posts.map(p =>
  //     p._id === updatedPost._id ? updatedPost : p
  //   );
  //   this.setState({ posts: newPostsArray }, () => this.props.history.push("/"));
  // };

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
          content={item.post}
          handleDelete={this.handleDelete}
          id={index}
        />
      );
    });
    return (
      <div className="App container">
        <Nav content={title} />

        <SignupPage signIn={this.handleSignupOrLogin} />
        {this.state.isShowing ? (
          <div>
            {this.state.joke}
            <JournalForm
              handleAddPost={this.handleAddPost}
              handleToggle={this.handleShowForm}
            />
            <ul>{composedPosts}</ul>
          </div>
        ) : (
          <button onClick={this.handleShowForm}>Post</button>
        )}
      </div>
    );
  }
}

export default App;

async function handleFetch(url, options) {
  const stream = await fetch(url, options);
  const json = await stream.json();
  return await json;
}

async function getQuotes() {
  const initialFetch = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await initialFetch.json();
  return joke;
}
