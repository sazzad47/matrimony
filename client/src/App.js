import { useEffect } from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/PrivateRouter'

import Home from './pages/home'
import Auth from './pages/auth'
import Register from './pages/register'
import BiodataDetails from '../src/components/profile/BiodataDetails/BiodataDetails'
import Alert from './components/alert/Alert'
import Header from './components/header/Header'
import StatusModal from './components/StatusModal'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import { getPosts } from './redux/actions/postAction'
import { getSuggestions } from './redux/actions/suggestionsAction'
import {getBiodatas} from './redux/actions/getBiodatasAction'

import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
import Peer from 'peerjs'
import { getApplicant } from './redux/actions/applicantAction'

import Biodatas from './pages/biodatas'
import ConatctRequest from './pages/contactRequest'
import SingleBiodata from './pages/biodata/[id]'

import ReportProblem from './pages/reportProblem';
import About from './pages/about';
import Help from './pages/help&support';
import Terms from './pages/terms&policies';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import Pending from './components/Pending'
import Applicants from './components/Applicants'

function App() {
  const firstLogin = localStorage.getItem('firstLogin')
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  useEffect(() => {
    
     dispatch(getApplicant());
     
  }, [dispatch]);
  
  

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])

 
  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])


  return (
    <Router>
      <Alert />

      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <ScrollToTop>
        <div className="main">
         <Header />
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}
          <Route exact path="/" component={Home} />
          {firstLogin? null : <Route exact path="/biodatas" component={Biodatas}/>}
          {firstLogin? null : <Route exact path="/contactRequest" component={ConatctRequest}/>}
          {firstLogin? null : <Route exact path="/reportProblem" component={ReportProblem}/>}
          {firstLogin? null : <Route exact path="/about" component={About}/>}
          {firstLogin? null : <Route exact path="/help&support" component={Help}/>}
          {firstLogin? null : <Route exact path="/terms&policies" component={Terms}/>}

          <Route exact path="/auth" component={Auth}/>
          <Route exact path="/biodatas/:id" component={BiodataDetails}/>
          
          <Route exact path="/register" component={Register} />
          <Route path="/pending" exact component={auth.user?.role ==='admin'? Pending : Home} />
          <Route path="/applicants" exact component={auth.user?.role ==='admin'? Applicants : Home} />
          <PrivateRouter exact path="/:page" component={PageRender} /> 
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
          <Redirect to='/'/>
          <Footer/>
        </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
