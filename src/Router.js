import React from 'react'
import { BrowserRouter,Route,Switch, Router } from 'react-router-dom'
import App from './App'

const Routers = () => (
    <BrowserRouter>
    <Switch>
     <Route exact path  ='/' component = {App}/>        
    </Switch>    
    </BrowserRouter>

)
export default Routers;