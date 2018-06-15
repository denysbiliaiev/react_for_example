import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Auth from './routes/auth'
import Users from './routes/users'
import AppNavigation from './containers/AppNavigation'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="app">
                    <div className="header">
                        <AppNavigation />
                    </div>
                    <div className="route">
                        <Route path="/auth" component={Auth} />
                        <Route path="/users" component={Users} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
