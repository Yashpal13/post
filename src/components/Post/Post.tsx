import React from "react";
import classes from "./Post.module.css";
import Card from "../Card/Card";
import dots from "../../assets/images/dots.svg";
import comment from "../../assets/images/comment.svg";
import Emoji from "../Emoji/Emoji";

const Post = (props: any) => {
  const { thumbnail, name, timeStamp, post, comments, postIcon } = props;
  return (
    <Card>
      <div
        className={`${classes["userinfo-container"]} flex flex-row-space-between`}
      >
        <div className="flex flex-row-space-between">
          <div className={classes.image}>
            <img src={thumbnail}></img>
          </div>
          <div>
            <div className={classes.name}>{name}</div>
            <div className={classes.timestamp}>{timeStamp}</div>
          </div>
        </div>
        <div>
          <img src={dots}></img>
        </div>
      </div>
      <div className={`${classes.post} flex`}>
        <Emoji image={postIcon} />
        <div className={classes["post-text"]}>{post}</div>
      </div>
      <div>
        <img className={classes["comments-images"]} src={comment}></img>
        <span className={classes["comments-text"]}>{comments} Comments</span>
      </div>
    </Card>
  );
};

export default Post;
