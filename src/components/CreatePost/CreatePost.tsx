import React, { useEffect, useRef } from "react";
import classes from "./CreatePost.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import comment from "../../assets/images/comment.png";
import Emoji from "../Emoji/Emoji";

const CreatePost = (props: any) => {
  const textRef: any = useRef("");
  const { createPost } = props;

  useEffect(() => {
    textRef.current.focus();
  }, []);

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
      <div className={`${classes.input} flex`}>
        <Emoji image={comment} />
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
