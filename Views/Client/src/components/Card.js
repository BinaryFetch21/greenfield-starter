import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

const classes = useStyles();
export default class RecipeReviewCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-container">
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={this.props.productData.image}
            title={this.props.productData.name}
          />
          <CardContent>
            <CardHeader title={this.props.productData.name} />
            <Typography variant="body2" color="textSecondary" component="p">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {this.props.productData.description}
            </Typography>
            <CardHeader title={this.props.productData.price} />
          </CardContent>
        </Card>
      </div>
    );
  }
};