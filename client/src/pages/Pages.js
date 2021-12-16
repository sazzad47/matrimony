import React from 'react'
import { useSelector } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/home'
import EditBiodata from '../pages/edit_biodata'
import Auth from '../pages/auth'
import Register from '../pages/register'
import CreateBiodata from './createBiodata'
import ViewBiodata from '../pages/biodata/[id]'
import Dashboard from '../components/profile/Dashboard'
import Biodatas from './biodatas'
import Pending from '../pages/pending'
import ContactRequest from '../pages/contactRequest'
import Applicants from '../pages/applicants'
const Pages = () => {
    const { auth } = useSelector(state => state)
    const isLogged = localStorage.getItem('firstLogin')
    return (
        <div>
            <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/edit_biodata" exact component={isLogged? EditBiodata : Home} />

            <Route path="/login" exact component={isLogged? Home : Auth} />
            <Route path="/register" exact component={isLogged? Home : Register} />

            <Route path="/create_Biodata" exact component={isLogged? CreateBiodata : Home} />
            <Route path="/biodata/:id" exact component={isLogged? ViewBiodata : Home} />
            <Route path="/dashboard/:id" exact component={isLogged? Dashboard : Home} />

            <Route path="/biodatas" exact component={Biodatas} />
            <Route path="/pending" exact component={isLogged? Pending : Home} />

            <Route path="/contactRequest" exact component={ContactRequest} />


            <Route path="/applicants" exact component={isLogged? Applicants : Home} />
            
        </Switch>
        </div>
    )
}

export default Pages
