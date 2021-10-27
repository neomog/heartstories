import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";




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
    color: "primary",
    marginBottom: "10px"
},
btnLink: {
    width: "100%", 
    fontSize: "20px"
}
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Login() {
  const classes = useStyles();

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
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt='' className={classes.imgStyles} />
          <Typography variant="h3" className={classes.typo}>Add Mail</Typography>
          <p style={{textAlign: "center", color: "#FF7C9C", fontFamily: "BlinkMacSystemFont"}}>Add your email so that you can reset your 
<br />password easily later.</p>
          {/* <input name='aviurl' type='file' /> */}
        </div>
        <div className={classes.formInputs}>
          <label  style={{width: "100%"}}><p className={classes.textStylingInputs}>Your Mail</p>
            <input name='username' type='text' style={{backgroundColor: "#0D123C"}} placeholder="Enter Email"
            className={classes.input} />
          </label>
          <Link to="/newproject"  className={classes.link}>
                    <Button variant="contained" color="secondary" className={classes.btnLink}>
                      Add MAil
                    </Button>
                  </Link>

          <Link to="/newproject"  className={classes.link}>
                    <Button variant="contained" color="secondary" className={classes.btnLink}>
                      Skip For Now
                    </Button>
                  </Link>
          
          {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center" >
                <Grid item>
                  <Link to="/newproject">
                    <Button variant="contained" color="primary">
                      Create new project
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/account">
                    <Button variant="outlined" color="primary">
                      edit profile
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div> */}
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
