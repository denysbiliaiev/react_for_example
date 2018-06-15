import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class AppNavigation extends Component {
    render() {
        return (
            <div className="navigation">
                <NavLink to="/auth/signIn" className="navlink">SignIn</NavLink>
                <NavLink to="/auth/signUp" className="navlink">SignUp</NavLink>
            </div>
        )
    }
}

export default AppNavigation