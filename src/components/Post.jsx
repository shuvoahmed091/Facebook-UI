import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";


import {Comment, MoreVert, Share, ThumbUpAlt} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  nicherpart: {
    display: "flex",
    justifyContent: "space-between", 

  },
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.nicherpart}>
        <Button size="small" color="primary">
          <ThumbUpAlt />         
        </Button>
        <Button size="small" color="primary">
        <Comment />
        </Button>
        <Button size="small" color="primary">
        <Share />
        </Button>
        <Button size="small" color="primary">
        <MoreVert />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
