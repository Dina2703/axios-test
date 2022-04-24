import { useState, useEffect } from "react";
import { client } from "./client";

function Delete({ isDeleted, setIsDeleted }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.get("/1").then((res) => setPost(res.data));
  }, []);

  const deletePost = () => {
    client.delete("/1");
    setIsDeleted(true);
    setPost(null);
  };

  if (!post) return "No post!";

  return (
    <div>
      <button onClick={deletePost} isDeleted>
        delete
      </button>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
    </div>
  );
}

export default Delete;
