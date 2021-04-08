import { Component, SyntheticEvent } from 'react';

interface INoToken {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    token: any;
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
        this.handleSubmitReg = this.handleSubmitReg.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmitReg(event: SyntheticEvent): void {
        event.preventDefault();

        fetch("http://localhost:4000/user/login", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("token", data.sessionToken);
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
                <h1>Log In!</h1>
                <form onSubmit={this.handleSubmitReg}>
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