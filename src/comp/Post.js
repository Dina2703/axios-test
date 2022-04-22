import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);
  if (!post) {
    return "No post!";
  }
  function createPost() {
    axios
      .post(baseURL, {
        title: "post by Dina",
        body: "Hello World",
      })
      .then((res) => {
        setPost(res.data);
      });
  }
  return (
    <div>
      <h1>POST via Axios</h1>
      <button onClick={createPost}>Create post</button>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
    </div>
  );
}

export default Post;
