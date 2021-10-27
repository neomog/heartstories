import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Menu from "./Menu";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import Balanced from "./Images/Balanced.jpg";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  Avatar: {
    marginLeft: 20,
    marginRight: -12
  }
};
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#81d4fa" }} position="fixed">
        <Toolbar>
          <img align="left" src={Balanced} style={{ width: 150, height: 50 }} alt="bal" />

          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
            align="left"
          />
          <Notifications />
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);