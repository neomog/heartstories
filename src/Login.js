import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

import axios from "axios";




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
    padding: theme.spacing(8, 0, 6)
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
}
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    const data = {
      username: username,
      password: password
    };
    axios
      .post("http://anonymousbackend.heartstories.fireswitch.com.ng/login.php", {
        params: data
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Box marginTop={5} style={{
        backgroundColor: "#0D123C", padding: "20px", borderRadius: "10px"}}>
            <section className='profile-page'>
        <form className={classes.formStyles}>
        <div id='aviurl' className={classes.formInputs}>
          <Typography variant="h3" className={classes.typo}>Login</Typography>
          <p style={{textAlign: "center", color: "#FF7C9C", fontFamily: "BlinkMacSystemFont"}}>Read anonymous stories from your friends <br />and send anonymous messages to your friends for free.</p>
        </div>
        <div className={classes.formInputs}>
          <label  style={{width: "100%"}}><p className={classes.textStylingInputs}>Your Usename</p>
            <input name='username' type='text' style={{color: "#fff"}} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" className={classes.input} />
          </label>
          <label style={{width: "100%"}}><p className={classes.textStylingInputs}>Your password</p>
            <input name='password' type='password'  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className={classes.input} />
          </label>

          <Link to="/newproject"  className={classes.link}>
                    <Button variant="contained" color="secondary" onClick={handleSubmit} className={classes.btnLink}>
                      Login
                    </Button>
                  </Link>
          

        </div>
        </form>
        
      </section>
            </Box>
            
            
          </Container>
        </div>
       
      </main>
    </React.Fragment>
  );
}
