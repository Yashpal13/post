import classes from "./Post.module.css";
import Card from "../Card/Card";
import Emoji from "../Emoji/Emoji";
import { ReactNode } from "react";

interface Args {
  thumbnail: string;
  name: string;
  timeStamp: string;
  post: string;
  comments: ReactNode;
  postIcon: string;
  openLoginPage: React.MouseEventHandler;
}

const Post = (props: Args) => {
  const {
    thumbnail,
    name,
    timeStamp,
    post,
    comments,
    postIcon,
    openLoginPage,
  } = props;

  return (
    <Card>
      <div
        className={`${classes["userinfo-container"]} flex flex-row-space-between`}
      >
        <div className="flex flex-row-space-between">
          <div className={classes.image}>
            <img src={thumbnail} className={"width-100 height-100"}></img>
          </div>
          <div>
            <div className={`${classes.name} font-500`}>{name}</div>
            <div className={`${classes.timestamp} font-500`}>{timeStamp}</div>
          </div>
        </div>
        <div onClick={openLoginPage} className={classes.dots}>
          <img src={"/assets/images/dots.svg"}></img>
        </div>
      </div>
      <div className={`${classes.post} flex`}>
        <Emoji image={postIcon} />
        <div className={classes["post-text"]}>{post}</div>
      </div>
      <div>
        <img
          className={classes["comments-images"]}
          src={"/assets/images/comment.svg"}
        ></img>
        <span className={`${classes["comments-text"]} font-500`}>
          {comments} Comments
        </span>
      </div>
    </Card>
  );
};

export default Post;
