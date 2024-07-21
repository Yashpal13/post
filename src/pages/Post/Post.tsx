import React, { useState } from "react";
import ShowPost from "../../components/ShowPost/ShowPost";
import classes from "./Post.module.css";
import CreatePost from "../../components/CreatePost/CreatePost";
import {
  initialData,
  initialPostData,
  defaultPostData,
} from "../../utils/post.meta";
import { useAuth } from "../../context/AuthContextProvider";

const Post = () => {
  const [data, setData] = useState(initialPostData);
  const context: any = useAuth();
  const title: string = initialData.title;
  const description: string = initialData.description;

  const createPost = (data: string) => {
    const temp = { ...defaultPostData };
    temp.post = data;
    temp.username = String(Date.now());
    temp.comments = Math.floor(Math.random() * 10);
    temp.timeStamp = `${Math.floor(Math.random() * 60)}mins ago`;
    setData((prev: any) => [temp, ...prev]);
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
          <ShowPost {...res} openLoginPage={openLoginPage} />
        </div>
      ))}
    </div>
  );
};

export default Post;
