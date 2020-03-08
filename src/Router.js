import React from 'react'
import { BrowserRouter,Route,Switch, Router } from 'react-router-dom'
import App from './App'
import About from './About'
import Services from './service'
import Portfolio from './portfolio'

const Routers = () => (
    <BrowserRouter>
    <Switch>
     <Route exact path  ='/' component = {App}/>     
     <Route exact path  ='/about' component = {About}/>
     <Route exact path  ='/service' component = {Services}/>
     <Route exact path  ='/portfolio' component = {Portfolio}/>
    </Switch>    
    </BrowserRouter>

)
export default Routers;