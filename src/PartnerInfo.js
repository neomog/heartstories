import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function PartnerInfo() {
  const classes = useStyles();
  const [type, setType] = React.useState("");

  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography align="center" variant="h6">
        Enter contact details for your builder or customer, so we can invite
        them to join the project.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Customer/Builder First Name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Customer/Builder Last Name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            type="email"
            id="email"
            name="email"
            label="Customer/Builder Email Address"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
