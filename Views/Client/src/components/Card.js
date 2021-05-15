import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

import Cart from "./Cart";

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
    this.state = {
      orders : [],
    };


    // handleChange = this.state.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  } 

  addCart(order) {
    this.setState({ orders: [...this.state.orders, order] });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
        .post("/orders", this.state)
        .then(({ data }) => {
          console.log(data);
          this.props.setState({ orders: [...this.state.orders, data] });
        })
        .catch((error) => {
          console.log(error);
        });
    }



  render() {
    const { classes } = this.props;
    return (
      <div className="card-container">
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={this.props.product.image}
            onChange={this.handleChange}
            title={this.props.product.name}
          />
          <CardContent>
            <CardHeader title={this.props.product.name} onChange={this.handleChange} />
            <Typography variant="body2" color="textSecondary" component="p">
              {/* add btn  */}
              <IconButton aria-label="add to favorites" onClick={this.handleSubmit.bind(this)} >
                <FavoriteIcon />
              </IconButton>
              {this.props.product.description}
            </Typography>
            <CardHeader title={`€ ${this.props.product.price}`} />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(CardDetails);