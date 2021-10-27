import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import PersonIcon from "@material-ui/icons/Person";
import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import SendIcon from "@material-ui/icons/Send";
import LockIcon from "@material-ui/icons/Lock";
import { Grid, Button } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "transparent"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    padding: "0 34.5px 0 34.5px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 5,
    overflow: "inherit"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#FF7C9C"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FF7C9C",
    color: "fff",
    textAlign: "center"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    textAlign: "center"
    
  },
  link: {
    textDecoration: "none",
    fontStyle: "seaweed script"
  },
  navLink: {
    marginRight: "10px",
    justifyContent: "flex-end"
  },
  navFont: {
    fontFamily: "seaweed-script"
  },
  btnLink: {
    color: "secondary"
  },
  contactbtnLink: {
     color: "#FF7C9C",
     border: "1px solid #FF7C9C"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
    link: {
    textAlign: "center",
    textDecoration: "none",
    color: "#0D123C"
},
sidebarAlign: {
  textAlign: "center",
  margin: 0
}
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
        
          <Typography variant="h6" noWrap className={classes.title}>
          <Link to="/"  className={classes.link} style={{color: "#FF7C9C"}}>
            HeartStories
            </Link>
          </Typography>
          
          <Grid container spacing={2} className={classes.navLink}>
                <Grid item>
                  <Link to="/newproject" className={classes.link}>
                    <Button variant="outline" className={classes.contactbtnLink}>
                      Contact us
                    </Button>
                  </Link>
                </Grid>
                
                <Grid item>
                  <Link to="/register" className={classes.link}>
                    <Button variant="contained" color="secondary" className={classes.btnLink}>
                      Register
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/login" className={classes.link}>
                    <Button variant="contained" color="secondary" className={classes.btnLink}>
                      Login
                    </Button>
                  </Link>
                </Grid>
              </Grid>
          
          <Notifications />
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
          
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }} 
      >
        <div className={classes.drawerHeader} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List >
          <Link to="/" className={classes.link}>
            <ListItem onClick={handleDrawerClose} button>
              <ListItemText primary={<p className={classes.sidebarAlign}>Logout</p>} />
            </ListItem>
          </Link>
          <Link to="/" className={classes.link}>
            <ListItem onClick={handleDrawerClose} button>
              <ListItemText primary={<p className={classes.sidebarAlign}>Rate App</p>} />
            </ListItem>
          </Link>

          <Link to="/profile" className={classes.link}>
              <ListItem onClick={handleDrawerClose} button>
                <ListItemText primary={<p className={classes.sidebarAlign}>Profile</p>} />
              </ListItem>
          </Link>

          <Link to="/feed" className={classes.link}>
            <ListItem onClick={handleDrawerClose} button>
              <ListItemText primary={<p className={classes.sidebarAlign}>Feeds</p>} />
            </ListItem>
          </Link>

          <Link to="/messages" className={classes.link}>
            <ListItem onClick={handleDrawerClose} button>
              <ListItemText primary={<p className={classes.sidebarAlign}>Messages</p>} />
            </ListItem>
          </Link>

          
          
        </List>

        
      </Drawer>
    </div>
  );
}
