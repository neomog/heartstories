import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.primary,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
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
      textDecoration: "none",
      color: "primary"
  }
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main style={{backgroundColor: "#0D123C", height: "100vh"}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Box marginTop={5}>
              {/* <AvatarPic /> */}
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="textPrimary"
                gutterBottom 
                style={{color: "#fff", fontFamily: "BlinkMacSystemFont"}}
              >
                Send messages that <br />really matter to you <br />anonymously.
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
                style={{color: "#FF7C9C", fontFamily: "BlinkMacSystemFont"}}
              >
                Share your story with friends and pour <br />out your heart while staying anonymous.
              </Typography>
            </Box>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="left">
                <Grid item>
                  <Link to="/register" className={classes.link}>
                    <Button variant="contained" color="secondary" className={classes.btnLink}>
                      Register now
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
      </main>
    </React.Fragment>
  );
}
