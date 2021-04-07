import { Component, SyntheticEvent } from 'react';

interface INoToken {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    token: string;
}

export default class NoTokenLanding extends Component<{}, INoToken> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            token: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        
        this.setState({

        })
    }

    handleChange(event: SyntheticEvent) {
        const input = event.target as HTMLInputElement;
        this.setState((prevState: INoToken) => {
            let pick: Pick<INoToken, keyof INoToken> = {
                ...prevState,
                [input.name]: input.value
            }
            return pick
        });
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="firstName"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                    <input
                    type="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    />
                    <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}