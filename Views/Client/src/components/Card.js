import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className="card-container">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://images.footlocker.com/is/image/FLEU/314102669604_01?wid=630&hei=630&fmt=png-alpha"
          title="Jordan 1 Mid"
        />
        <CardContent>
          <CardHeader title="Jordan 1 Mid" />
          <Typography variant="body2" color="textSecondary" component="p">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            White-Arctic Orange-Black
          </Typography>
          <CardHeader title="€ 129,99" />
        </CardContent>
      </Card>
    </div>
  );};