import React from "react";
import Post from "./components/Post/Post";
import Posts from "./pages/Posts/Posts";

function App() {
  const data: any = {
    title: "Hello Jane",
    description:
      "How are you doing today? Would you like to share something with the community 🤗",
  };
  return (
    <div className="App">
      <Posts data={data} />
    </div>
  );
}

export default App;
