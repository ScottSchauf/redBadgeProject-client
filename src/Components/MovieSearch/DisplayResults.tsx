import {IResult} from './Interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProps {
    results: IResult[]
}

const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
  });

const DisplayResults = ({results}: IProps) => {
    const classes = useStyles();

    return (
        <div>
            {results.map((result) => {
                return (
                    <div>
                        <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Movie Poster"
                        height="240"
                        width="50"
                        image={result.Poster}
                        title="Movie Poster"
                        key={result.imdbID}
                        />
                        <CardContent>
                        <Typography key={result.imdbID} gutterBottom variant="h5" component="h2">
                            {result.Title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {result.imdbID}<br/>
                            {result.Year}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayResults;