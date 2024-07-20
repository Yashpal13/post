import React, { useState } from "react";
import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";
import CreatePost from "../../components/CreatePost/CreatePost";

const initialPostData: any = [
  {
    username: "theresa",
    thumbnail: "assets/images/user1.svg",
    postIcon: "assets/images/wave.svg",
    name: "Theresa Webb",
    timeStamp: "5mins ago",
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
  {
    username: "marvin",
    thumbnail: "assets/images/user1.svg",
    postIcon: "assets/images/sad.svg",
    name: "Marvin McKinney",
    timeStamp: "8mins ago • Edited",
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
];

const Posts = (props: any) => {
  const [data, setData] = useState(initialPostData);
  const { title, description } = props.data;

  const createPost = (data: string) => {
    const temp = {
      username: "marvin",
      thumbnail: "assets/images/user1.svg",
      postIcon: "assets/images/sad.svg",
      name: "Marvin McKinney",
      timeStamp: "8mins ago • Edited",
      post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 24,
    };
    temp.post = data;
    setData((prev: any) => [...prev, temp]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes["create-post-container"]}>
        <CreatePost createPost={createPost} />
      </div>

      {(data || []).map((res: any) => (
        <div className={classes["post-container"]} key={res.username}>
          <Post {...res} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
