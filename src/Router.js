import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import App from './App'
import About from './About'
import Services from './service'
import Portfolio from './portfolio'
import ContactUs from './contactus'
import NavBar from "./organisms/navbar";

const Routers = () => (
    <BrowserRouter>
    <NavBar/>
    <Switch>
     <Route exact path  ='/' component = {App}/>     
     <Route exact path  ='/about' component = {About}/>
     <Route exact path  ='/service' component = {Services}/>
     <Route exact path  ='/portfolio' component = {Portfolio}/>
     <Route exact path  ='/contactus' component = {ContactUs}/>
    </Switch> 
    </BrowserRouter>

)
export default Routers;