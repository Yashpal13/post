import React from "react";
import Post from "./components/Post/Post";
import Posts from "./pages/Posts/Posts";
import Login from "./pages/Login/Login";

function App() {
  const data: any = {
    title: "Hello Jane",
    description:
      "How are you doing today? Would you like to share something with the community 🤗",
  };
  return (
    <div style={{ height: "100%" }}>
      {/* <Posts data={data} /> */}
      <Login />
    </div>
  );
}

export default App;
