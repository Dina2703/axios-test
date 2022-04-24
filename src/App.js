import { useState } from "react";
import Delete from "./comp/Delete";
import Get from "./comp/Get";
import Post from "./comp/Post";
import Put from "./comp/Put";

function App() {
  const [isDeleted, setIsDeleted] = useState(false);
  return (
    <div className="App">
      <h2>Axios examples:</h2>
      <Get />

      <Post />
      <Put />
      <h1>Delete post via Axios</h1>
      <div>{isDeleted ? "Post deleted" : "Click to delete the post"}</div>
      <Delete isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
    </div>
  );
}

export default App;
