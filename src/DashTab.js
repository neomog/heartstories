import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PaymentIcon from "@material-ui/icons/Payment";
import ChatIcon from "@material-ui/icons/Chat";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import ProgressTabs from "./ProgressTabs";
import Stats from "./Stats";
import Paper from "@material-ui/core/Paper";
import ProgressBar from "./ProgressBar";
import Button from "@material-ui/core/Button";
import ActionsList from "./ActionsList";
import DashGrid from "./DashGrid";
import Photos from "./Photos";
import ProjectTable from "./ProjectTable";
import Gantt from "./Gantt";
import ProjectProgress from "./ProjectProgress";
import TimelineIcon from "@material-ui/icons/Timeline";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabPanel value={value} index={0}>
        <div>
          <DashGrid />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <Box paddingTop={7} p={0}>
            <ProjectProgress />
          </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <Box paddingTop={7} p={0}>
            <Payments />
          </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <Box paddingTop={7} p={0}>
            <Photos />
          </Box>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <Box paddingTop={7} p={0}>
            Messenger
          </Box>
        </div>
      </TabPanel>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Dash" icon={<DashboardIcon />} {...a11yProps(0)} />
          <Tab label="Project" icon={<TimelineIcon />} {...a11yProps(1)} />
          <Tab label="Payments" icon={<PaymentIcon />} {...a11yProps(2)} />
          <Tab label="Photos" icon={<PhotoLibrary />} {...a11yProps(3)} />
          <Tab label="Messages" icon={<ChatIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
