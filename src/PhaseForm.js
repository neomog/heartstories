import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import PhaseData from "./PhaseData";
// import Form from "./ProjectPhases";
// import DiscreteSlider from "./Slider";
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Table from "./StageTable/Table";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(1)
  },
  textField: {
    width: "10ch"
  }
}));

export default function PaymentForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    deposit: "",
    retention: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  return (
    <React.Fragment>
      <Typography align="center" variant="h6">
        Enter information about each stage of your build.
      </Typography>
      <Grid align="center" container spacing={3}>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            <Typography>Deposit as % of overall project cost</Typography>
          </FormControl>
          <FormControl
            className={clsx(
              classes.margin,
              classes.withoutLabel,
              classes.textField
            )}
          >
            <Input
              id="deposit"
              placeholder="10"
              value={values.deposit}
              onChange={handleChange("deposit")}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "deposit"
              }}
              type="number"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            <Typography>Retention as % of overall project cost</Typography>
          </FormControl>
          <FormControl
            className={clsx(
              classes.margin,
              classes.withoutLabel,
              classes.textField
            )}
          >
            <Input
              id="retention"
              placeholder="5"
              value={values.retention}
              onChange={handleChange("retention")}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "retention"
              }}
              type="number"
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
