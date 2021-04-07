import { Component } from 'react';
import AdminLanding from './AdminLanding';
import NoTokenLanding from './NoTokenLanding';
import UserLanding from './UserLanding';

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

tokenFetch() {
    // ComponentDidMount to fetch the token stored in localStorage.getItem("token"), use setState, then display the appropriate display.
}

displaySelector() {
    console.log('test');
    // Examine our state of 'token', and invoke an if/else statement that returns one of three components. ComponentDidUpdate = Reselect a Display (once user registers/signs in, for example).
}

    render() {
        return (
            <div>
                Function that returns one of three displays?
                <NoTokenLanding/>
            </div>
        )
    }
}