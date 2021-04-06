import { Component, SyntheticEvent } from 'react';
import DisplayResults from './DisplayResults';
import {IResult} from './Interfaces';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface IState {
    searchTerm: string;
    results: IResult[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default class MovieSearch extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            searchTerm: "",
            results: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    movieFetch = async () => {
        let base_url: string = "http://www.omdbapi.com/"
        let apiKey: string = "c5088d1"
        let url: string = `${base_url}?apikey=${apiKey}&s=${this.state.searchTerm}`

        console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            results: data.Search
        });

        console.log(data.Search);
        console.log(this.state.results);
    }

    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        this.movieFetch();
    }

    handleChange(event: SyntheticEvent) {
        const input = event.target as HTMLInputElement;
        console.log(input.name, input.value)
        this.setState((prevState: IState) => {
            let pick: Pick<IState, keyof IState> = {
                ...prevState,
                [input.name]: input.value
            }
            return pick
        });
    }

    render() {
        return (
            <div>
                <h2>Search for a Film:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="searchTerm" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                <Button 
                type="submit"
                >
                    Search!
                </Button>
                </form>
                <DisplayResults results={this.state.results}/>
            </div>
        )
    }
}