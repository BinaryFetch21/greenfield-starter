import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

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

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className="cart-item">
        <CardMedia
          image={this.props.order.image}
          alt={this.props.order.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">
            {this.props.order.name}
            <Typography variant="body1">
              {`€ ${this.props.order.price}`}
              <Typography variant="body1">{`Brand: ${this.props.order.brand}`}</Typography>
            </Typography>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => this.props.deleteOrder(this.props.order._id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default withStyles(styles, { withTheme: true })(CartItem);