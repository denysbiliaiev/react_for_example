import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SignInForm from '../components/signIn'
import SignUpForm from '../components/signUp'
import { signIn } from '../ducks/auth'
import AuthNavigation from '../containers/AuthNavigation'

class Auth extends Component {
    render() {
        return (
            <div className="content">
                <AuthNavigation />
                <div className="route">
                    <Route
                        path="/auth/signIn"
                        render={() => <SignInForm onSubmit={this.props.signIn} />}
                    />
                    <Route path="/auth/signUp" component={SignUpForm} />
                </div>
            </div>
        )
    }

    signIn = ({ email, password }) => this.props.signIn(email, password)
}

export default connect(null, { signIn })(Auth)
