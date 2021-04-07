import {IResult} from './Interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface IProps {
    results: IResult[]
}

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      display: "inline-block",
    },
    card: {
        position: "relative",
        display: "inline-block",
        margin: 5,
    },
    poster: {
        height: 100,
    },
    body: {
        height: 150,
        backgroundColor: "white",
        color: "black",
    },
  });


const DisplayResults = ({results}: IProps) => {
    const classes = useStyles();

    return (
        <div>
            {results.map((result) => {
                return (
                    <div className={classes.root}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Movie Poster"
                        height="240"
                        width="50"
                        image={result.Poster}
                        title="Movie Poster"
                        key={result.imdbID}
                        className={classes.poster}
                        />
                        <CardContent className={classes.body}>
                        <Typography key={result.imdbID} gutterBottom variant="h5" component="h2">
                            {result.Title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <a href={`https://www.imdb.com/title/${result.imdbID}`} target="_blank">More Info</a>
                            <br/>
                            {result.Year}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.body}>
                            <h3>Similar Films</h3>
                            <a href="http://www.google.com">TasteDive API results</a>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayResults;