import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);

  if (!post) {
    return null;
  }
  return (
    <div className="App">
      <h2>Axios examples:</h2>
      <div>Post title:</div>
      <h5> {post.title}</h5>
      <div>Post body:</div>
      <p> {post.body}</p>
    </div>
  );
}

export default App;
