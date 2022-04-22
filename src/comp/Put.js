import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Put() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((res) => {
      setPost(res.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "post by Dina",
        body: "Updated post",
      })
      .then((res) => {
        setPost(res.data);
      });
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1>Update(PUT) via Axios</h1>
      <h4>Click to update the post</h4>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
      <button onClick={updatePost}>Update</button>
    </div>
  );
}

export default Put;
