import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieSearch from './Components/MovieSearch/MovieSearch';
import Auth from './Components/Auth/Auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minHeight: "95vh",
      height: "100%",
      borderRadius: 0,
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
            <Auth/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
