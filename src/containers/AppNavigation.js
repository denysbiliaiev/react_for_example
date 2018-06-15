import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class AppNavigation extends Component {
    render() {
        return (
            <div className="navigation">
                <NavLink to="/auth" className="navlink">Auth</NavLink>
                <NavLink to="/users" className="navlink">Users</NavLink>
            </div>
        )
    }
}

export default AppNavigation