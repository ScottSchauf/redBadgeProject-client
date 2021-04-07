import { Component, SyntheticEvent } from 'react';
import DisplayResults from './DisplayResults';
import {IResult} from './Interfaces';
import Button from '@material-ui/core/Button';
import CSS from 'csstype';

interface IState {
    searchTerm: string;
    results: IResult[];
}

const h2Styles: CSS.Properties = {
    textAlign: "center"
};

const buttonStyles: CSS.Properties = {
    color: "white",
    border: "2px solid white",
    marginLeft: "20px",
    height: "32px",
    width: "20%",
};

const inputStyles: CSS.Properties = {
    backgroundColor: "black",
    border: "2px solid white",
    height: "25px",
    width: "75%",
    color: "white",
};

const formStyles: CSS.Properties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
}

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
    }

    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        this.movieFetch();
    }

    handleChange(event: SyntheticEvent) {
        const input = event.target as HTMLInputElement;
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
                <h2 style={h2Styles}>Search for a Film:</h2>
                <form onSubmit={this.handleSubmit} style={formStyles}>
                    <input type="text" id="searchTerm" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} style={inputStyles}/>
                <Button 
                type="submit"
                style={buttonStyles}
                >
                    Search!
                </Button>
                </form>
                <DisplayResults results={this.state.results}/>
            </div>
        )
    }
}