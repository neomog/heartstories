import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";

import { Link, useHistory } from "react-router-dom";

import ProfileButton from "./ProfileButton";
import Icon from "./linkicon.png";


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArchiveIcon from '@material-ui/icons/Archive';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/Avatar';





const useStyles = makeStyles(theme => ({
    
      formStyles: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column',
        margin: '3%',
        fontFamily: "signika"
      },
      imgStyles: {
        width: '10%',
        marginLeft: '2.5%',
        borderRadius: '150px',
      },
      typo: {
        color: "#fff"
      },
      formInputs: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '2%',
      },
      input: {
        // margin: '5%',
        marginRight: '50%',
        marginBottom: '5%',
        padding: '3%',
        fontSize: '1.25rem',
        backgroundColor: "#0D123C",
        width: "100%",
        border: "none",
        borderBottom: "1px solid #FF7C9C",
        
    },
      input2: {
        margin: '5%',
        padding: '5%',
        borderRadius:'10px',
        fontSize: '1.25rem',
        marginLeft: '5%'
      },
      formRadios: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '80%'
    },
      textStylingRadios: {
        padding: '0',
        margin:'3%',
        marginLeft: '100%',
        width: '100%',
        color:'rgb(0, 0, 0, 60%)',
        textAlign: 'center',
      },
      textStylingInputs: {
        padding: '0',
        margin:'1%',
        // marginLeft: '15%',
        // color:'rgb(0, 0, 0, 60%)',
        textAlign: 'left',
        color: "#fff",
        fontFamily: "signika",
        fontSize: "20px"
      },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: "100%"
    
  },
  heroButtons: {
    marginTop: theme.spacing(4), width: "100%"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  link: {
    width: "70%", 
    textAlign: "center",
    textDecoration: "none",
    color: "primary"
},
btnLink: {
    width: "100%", 
    fontSize: "20px"
},
profile: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: "20px",
        backgroundColor: "#0D123C",
        height: "60vh"
      }
}));

const originalItems = [
  "Share my profile",
  "Share on whatsapp",
  "Share on facebook",
  "Share on instagram",
  "Share on twitter",
  "Change profile name",
  "Change password",
  "Change Email"
];

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}



export default function Login() {

  const history = useHistory();

function goToMessages() {
  history.push({
    pathname: "/messages"
  })
}

function goToNewsfeed() {
  history.push({
    pathname: "/feed"
  })
}

function goToProfile() {
  history.push({
    pathname: "/profile"
  })
}
   const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  const classes = useStyles();
  

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [items, setItems] = useState(originalItems);
  const [searched, setSearched] = useState("");


  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Box marginTop={5} style={{
        backgroundColor: "#0D123C", padding: "20px", borderRadius: "10px"}}>
            <section className='profile-page'>
            <Paper className={classes.profile} style={{ overflow: "scroll"}}>
        
            <List >
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person} style={{borderTop: "1px solid #fff", color: "#FF7C9C"}}>
            <ListItemAvatar>
              <img alt="Profile Picture" src={Icon} />
            </ListItemAvatar>
            <ListItemText primary={
                <Typography variant="h6" style={{ color: "#FF7C9C" }}>
              {primary}
            </Typography>
            } secondary={
                <p variant="h6" style={{ color: "#FF7C9C" }}>
              {secondary}
            </p>
            } />
          </ListItem>
        ))}
      </List>
      </Paper>

      <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}  style={{padding: 0, backgroundColor: "#0D123C"}}
        >
          <BottomNavigationAction label="Feeds" icon={<RestoreIcon />} onClick={goToNewsfeed} style={{color: "#fff", backgroundColor: "#FF7C9C" }} />
          <BottomNavigationAction label="Messages" icon={<FavoriteIcon />} onClick={goToMessages} style={{color: "#fff"}} />
          <BottomNavigationAction label="Profil" icon={<ArchiveIcon />} onClick={goToProfile} style={{color: "#fff"}} />
        </BottomNavigation>
        
      </section>
            </Box>
            
            
          </Container>
        </div>
       
      </main>
    </React.Fragment>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];
