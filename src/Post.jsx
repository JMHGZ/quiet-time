import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, content, user, handleDelete, id }) => {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <h6>{user}</h6>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Post;

Post.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  content: PropTypes.string,
  handleDelete: PropTypes.func,
  id: PropTypes.string
};
