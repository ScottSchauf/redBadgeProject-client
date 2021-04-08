import { Component } from 'react';
import AdminLanding from './AdminLanding';
import NoTokenLanding from './NoTokenLanding';
import UserLanding from './UserLanding';

interface IUser {
    id: string;
    token: any;
    isAdmin: boolean;
}

type AcceptedProps = {}

export default class Auth extends Component<AcceptedProps, IUser> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            id: "",
            token: "",
            isAdmin: false,
        };
    }

setToken() {
    localStorage.getItem("token");
    this.setState({
        token: localStorage.getItem("token"),
    })
    console.log(this.state.token);
}

componentDidMount() {
    this.setToken();
}

    render() {
        return (
            <div>
                {
                    (this.state.token !== "" && this.state.isAdmin === false)
                    ? (
                        <>
                        <UserLanding/>
                        </>
                    )
                    : (this.state.token !== "" && this.state.isAdmin === true)
                    ? (
                        <>
                        {/* <AdminLanding/> */}
                        </>
                    )
                    : (
                        <>
                        <NoTokenLanding/>
                        </>
                    )
                }

                {/* <NoTokenLanding/>
                <hr/>
                <AdminLanding/>
                <hr/>
                <UserLanding/> */}
            </div>
        )
    }
}