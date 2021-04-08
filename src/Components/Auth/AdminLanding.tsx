import { Component } from 'react';

export default class AdminLanding extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

componentDidMount() {
    console.log('component mounted')
        fetch("http://localhost:4000/admin/userList", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
    }

    // The return below will house a .map function that will return a list of all the users, as well as a delete button next to each.

    render() {
        return (
            <div>
                <h1>Registered Users</h1>
                <p>Once I figure out the token stuff, this is where a list of all users will appear, with a delete button next to each.</p>
            </div>
        )
    }
}