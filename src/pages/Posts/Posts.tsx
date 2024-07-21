import React, { useState } from "react";
import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";
import CreatePost from "../../components/CreatePost/CreatePost";
import {
  initialData,
  initialPostData,
  defaultPostData,
} from "../../utils/post.meta";
import { useAuth } from "../../App";

const Posts = () => {
  const [data, setData] = useState(initialPostData);
  const context: any = useAuth();
  const title = initialData.title;
  const description = initialData.description;

  const createPost = (data: string) => {
    const temp = defaultPostData;
    temp.post = data;
    temp.username = String(Date.now());
    setData((prev: any) => [...prev, temp]);
  };

  const openLoginPage = () => {
    context.dispatch({ type: "signup", payload: true });
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.title} font-500`}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes["create-post-container"]}>
        <CreatePost createPost={createPost} />
      </div>

      {(data || []).map((res: any) => (
        <div className={classes["post-container"]} key={res.username}>
          <Post {...res} openLoginPage={openLoginPage} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
