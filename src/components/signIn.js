import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignInForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    Email:
                    <Field name="email" component="input" />
                </div>
                <div>
                    Password:
                    <Field name="password" type="password" component="input" />
                </div>
                <button type="submit">SignIn</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm)
