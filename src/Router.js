import React from 'react'
import { BrowserRouter,Route,Switch, Router } from 'react-router-dom'
import App from './App'
import About from './About'

const Routers = () => (
    <BrowserRouter>
    <Switch>
     <Route exact path  ='/' component = {App}/>     
     <Route exact path  ='/about' component = {About}/>     
    </Switch>    
    </BrowserRouter>

)
export default Routers;