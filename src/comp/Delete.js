import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function Delete() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/1`).then((res) => setPost(res.data));
  }, []);

  const deletePost = () => {
    axios.delete(`${baseUrl}/1`).then(() => {
      alert("Post deleted!");
    });
    setPost(null);
  };

  if (!post) return "No post!";

  return (
    <div>
      <h1>Delete post via Axios</h1>
      <span>Click to delete the post</span>

      <button onClick={deletePost}>delete</button>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
    </div>
  );
}

export default Delete;
