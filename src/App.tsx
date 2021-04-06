import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieSearch from './Components/MovieSearch/MovieSearch'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: "100vh",
    },
  }),
);

const leftStyle = {
  background: 'black',
  color: 'white',
}


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={leftStyle}>
            <MovieSearch/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            This will house the various landing pages.
            <ul>
              <li>No token will display Register and Log-In Forms</li>
              <li>A token will display a Class component that houses ProfileDisplay and CollectionDisplay components.</li>
              <li>An Admin will see a list of all users, whose names link to their landing pages.</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
