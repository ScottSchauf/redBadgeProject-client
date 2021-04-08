import { Component } from 'react';

interface IUser {
    token: string;
    isAdmin: boolean;
}

export default class Auth extends Component<{}, IUser> {
    constructor(props: {}) {
        super(props);
        this.state = {
            token: "",
            isAdmin: false,
        };
    }

    clearToken(): void {
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <button onClick={this.clearToken} type='submit'>Log Out</button>
                This will house the User's Profile, or prompt them to create one.
                <hr/>
                And this will display the fields to add a film to the collection, as well as the collection.
            </div>
        )
    }
}