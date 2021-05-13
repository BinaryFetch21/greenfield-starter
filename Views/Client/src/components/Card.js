import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 172.77,
    width: 307.14,
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
});


class CardDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="card-container">
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={this.props.product.image}
            title={this.props.product.name}
          />
          <CardContent>
            <CardHeader title={this.props.product.name} />
            <Typography variant="body2" color="textSecondary" component="p">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {this.props.product.description}
            </Typography>
            <CardHeader title={this.props.product.price} />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(CardDetails);