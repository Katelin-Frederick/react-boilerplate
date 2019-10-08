import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

import Header from '../components/Header'
import About from '../components/About'
import NotFound from '../components/NotFound'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div id="navigation">
                <NavLink exact={ true } activeClassName='active' className='link' to='/'>Home</NavLink>
                <NavLink activeClassName='active' className='link' to='/about'>About</NavLink>
            </div>
            <div className='container'>
                <Switch>
                    <Route path="/" component={ Header } exact={true} />
                    <Route path="/about" component={ About } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter