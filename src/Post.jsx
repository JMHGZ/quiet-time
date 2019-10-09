import React from "react";
import PropTypes from "prop-types";

const Post = ({ content, handleDelete, id }) => {
  return (
    <div key={id}>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Post;

Post.propTypes = {
  content: PropTypes.string,
  handleDelete: PropTypes.func,
  id: PropTypes.string
};
