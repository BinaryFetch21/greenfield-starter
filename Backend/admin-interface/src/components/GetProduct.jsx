import React from "react";
import { Container, Typography, Button, Grid } from '@material-ui/core';
import OneProduct from "./OneProduct.jsx"
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
});


class GetProduct extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
  const { classes } = this.props;
  return (
    <>
      <Grid container spacing={3}>
        {this.props.products.map((product) => (
          <Grid item xs={12} sm={4} key={product._id}>
            <OneProduct
              deleteProd={this.props.deleteProd}
              setProductToUpdate={this.props.setProductToUpdate}
              product={product}
              key={product._id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
  }
}
  
export default withStyles(styles, { withTheme: true })(GetProduct);