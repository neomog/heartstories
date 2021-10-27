import React from "react";
// import "./styles.css";
// import Nav from "./Nav";
import NavBar2 from "./NavBar2";
import Register from "./Register";
import Login from "./Login";
import AddMail from "./AddMail";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";
import Messages from "./Messages"; 
// import DashTab from "./DashTab";
// import Profile from "./Profile";
// import Settings from "./Settings";
// import Help from "./Help";
// import Copyright from "./Copyright";
import HomePage from "./HomePage";
// import NewProject from "./NewProject";
// import Logout from "./Logout";
// import Invite from "./Invite";
import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// );

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D123C"
    },
    secondary: {
      main: "#FF7C9C"
    },
    light: {
      color: "#ffffff"
    }
  },
  typography: {
    fontFamily: "seaweed script"
  }
});

export default function App() {
  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <NavBar2 />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/addmail" component={AddMail} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed" component={NewsFeed} />
            <Route path="/messages" component={Messages} />
            {/* <Route path="/account" component={Account} />
            <Route path="/dashboard" exact component={DashTab} />
            <Route path="/settings" component={Settings} />
            <Route path="/help" component={Help} />
            <Route path="/logout" component={Logout} />
            <Route path="/invite" component={Invite} /> */}
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}
