import React, { Component } from 'react';
import axios from 'axios'

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newUser = {...this.state.newUser}
        newUser[attribute] = event.target.value
        console.log("Change!")
        this.setState({newUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            "user": this.state.newUser
        })

        console.log(res)

    }

    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;