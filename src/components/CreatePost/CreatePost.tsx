import React, { useEffect, useRef } from "react";
import classes from "./CreatePost.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Emoji from "../Emoji/Emoji";

interface Args {
  createPost: Function;
}

const CreatePost = (props: Args) => {
  const textRef: any = useRef("");
  const { createPost } = props;

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const addPost = () => {
    const text: string = textRef.current.value.trim();
    if (text) {
      createPost(text);
      textRef.current.value = "";
    }
  };

  return (
    <Card>
      <div className={`${classes.title} font-500`}>Create Post</div>
      <div className={`${classes.input} flex`}>
        <Emoji image={"/assets/images/comment.png"} />
        <textarea
          className={classes.textarea}
          placeholder="How are you feeling today?"
          ref={textRef}
        ></textarea>
      </div>
      <div className={"flex flex-row-end"}>
        <div className={classes.btn}>
          <Button text="Post" onClick={addPost} />
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
