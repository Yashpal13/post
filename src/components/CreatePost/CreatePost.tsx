import React, { useRef } from "react";
import classes from "./CreatePost.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import comment from "../../assets/images/comment.png";

const CreatePost = (props: any) => {
  const textRef: any = useRef("");
  const { createPost } = props;

  const addPost = () => {
    const text = textRef.current.value.trim();
    if (text) {
      createPost(text);
      textRef.current.value = "";
    }
  };

  return (
    <Card>
      <div className={classes.title}>Create Post</div>
      <div className={classes.input}>
        <div className={classes["comment-image"]}>
          <img className={classes.icon} src={comment}></img>
        </div>
        <textarea
          className={classes.textarea}
          placeholder="How are you feeling today?"
          ref={textRef}
        ></textarea>
      </div>
      <div className={"flex flex-row-end"}>
        <div className={classes.btn}>
          <Button title="Post" onClick={addPost} />
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
