import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CartItem from "./CartItem.js";
import { Container, Typography, Button, Grid, Link } from "@material-ui/core";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.getCart = this.getCart.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  componentDidMount() {
    axios.get("/orders").then(({ data }) => {
      this.setState({
        orders: data,
      });
      console.log("id of prod", data);
    });
  }

  deleteOrder(id) {
    axios.delete(`/orders/${id}`).then(({ data }) => {
      this.setState({
        orders: this.state.orders.filter(
          (order) => order.product[0]._id !== id
        ),
      });
    });
  }

  getCart() {}

  handleEmptyCart() {
    axios.delete(`/orders`).then(() => {
      this.setState({
        orders: [],
      });
    });
  }

  render() {
    console.log("props", this.props);
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Grid container spacing={3}>
            {this.state.orders.map((order) => (
              <Grid item xs={12} sm={4} key={order._id}>
                <CartItem
                  order={order}
                  key={order._id}
                  deleteOrder={() => this.deleteOrder(order._id)}
                  order={order.product[0]}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="btns">
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={this.handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            href="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Cart);
