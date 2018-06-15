import React, { Component } from 'react'

class Users extends Component {
    users =  [
        {name: 'user_1', email: 'email_1'},
        {name: 'user_2', email: 'email_2'},
        {name: 'user_3', email: 'email_3'},
    ];

    delete = name => () => alert(name)

    render() {
        return (
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.users.map(user => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={this.delete(user.name)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
