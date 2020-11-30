import React from 'react'
import Pages from './Pages'
import {Route, Switch, Redirect} from 'react-router-dom'

const Router  =() => {
    return (
        <React.Suspense fallback={<h1>Loading ......</h1>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp}/>
                <Route path='/weather' component={Pages.Weather}/>
                <Redirect from='*' to='/login'/>
            </Switch>
        </React.Suspense>
    )
}

export default Router
