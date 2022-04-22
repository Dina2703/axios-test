import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Get() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((res) => {
      setPost(res.data);
    });
  }, []);
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
