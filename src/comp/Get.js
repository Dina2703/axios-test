import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Get() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //invalid url will trigger an 404 error
    axios
      .get(`${baseURL}/ops`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) {
    return "No post!";
  }
  return (
    <div>
      <h1>GET via Axios</h1>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
    </div>
  );
}

export default Get;
