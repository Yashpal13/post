import React from "react";
import classes from "./CreatePost.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const CreatePost = () => {
  return (
    <Card>
      <div className={classes.title}>Create Post</div>
      <div className={classes.input} >
        <textarea className={classes.textarea} placeholder="How are you feeling today?"></textarea>
      </div>
      <div className={classes.btn}>
        <Button title='Post'/>
      </div>
    </Card>
  );
};

export default CreatePost;
