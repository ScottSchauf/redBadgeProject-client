import { Component } from 'react';
import Register from './Register';
import Login from './Login';

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

    render() {
        return (
            <div>
                <Register/>
                <hr/>
                <Login/>
            </div>
        )
    }
}