import classes from "./Emoji.module.css";

interface Args {
  image: string;
}

const Emoji = (props: Args) => {
  const { image } = props;

  return (
    <div className={classes["comment-image"]}>
      <img className={classes.icon} src={image}></img>
    </div>
  );
};

export default Emoji;
