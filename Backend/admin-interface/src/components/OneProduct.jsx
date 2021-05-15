import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import RefreshIcon from "@material-ui/icons/Refresh";

const styles = (theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  typography: {
    fontSize: 12,
  },
});


class OneProduct extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className="cart-item">
        <CardMedia
          image={this.props.product.image}
          alt={this.props.product.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">
            {this.props.product.name}
            <Typography variant="h4">
              {`€ ${this.props.product.price}`}
              <Typography variant="body1">{`Brand: ${this.props.product.brand}`}</Typography>
            </Typography>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => this.props.deleteProd(this.props.product._id)}
          >
            Remove
          </Button>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            startIcon={<RefreshIcon />}
            onClick={() => this.props.setProductToUpdate(this.props.product)}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    );
  }};

export default withStyles(styles, { withTheme: true })(OneProduct);