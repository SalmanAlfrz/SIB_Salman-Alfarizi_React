import React from "react"

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'user1',
            password: '12345'
        }
    }
    getUsername() {
        return this.state.username
    }
    setUsername = () => {
        this.setState({
            username: 'user2'
        })
    }
    render() {
        return (
            <>
                <h1>{this.getUsername()}</h1>
                <br />
                <button onClick={this.setUsername}>setUsername</button>
            </>

        )
    }
}

export default Users