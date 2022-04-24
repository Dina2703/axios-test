import { client } from "./client";
import { useEffect, useState } from "react";

function Put() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.get("/1").then((res) => {
      setPost(res.data);
    });
  }, []);

  function updatePost() {
    client
      .put("/1", {
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
