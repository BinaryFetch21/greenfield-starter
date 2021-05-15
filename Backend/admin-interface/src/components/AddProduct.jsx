import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.prodToUpdate._id,
      name: this.props.prodToUpdate.name || "",
      price: this.props.prodToUpdate.price || "",
      image: this.props.prodToUpdate.image || "",
      description: this.props.prodToUpdate.description || "",
      brand: this.props.prodToUpdate.brand || "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
      if (this.state._id){
      axios
        .patch(`/products/${this.state._id}`, this.state)
        .then(({ data }) => {
          this.props.updateProd(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("/products", this.state)
        .then(({ data }) => {
          console.log(data);
          this.props.addProd(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add / Update Product
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.name}
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.price}
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.image}
                  label="Image"
                  name="image"
                  autoComplete="image"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="brand"
                  label="Brand"
                  onChange={this.handleChange}
                  value={this.state.brand}
                  autoComplete="brand"
                />
              </Grid>
            </Grid>
            <Button
              onClick={this.handleSubmit.bind(this)}
              fullWidth
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddProduct);