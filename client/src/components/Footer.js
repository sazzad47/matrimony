import React from 'react'
import { Link } from 'react-router-dom'
import {Card,Typography, Grid} from '@material-ui/core'

const Footer = () => {
  const firstLogin = localStorage.getItem('firstLogin')
    return (
       
        <footer className='footer mt-5'>
        <div className='footerMenus px-2 px-md-3 px-lg-5 row'>
          <div className='footerMenu align-items-start col-12 col-md-6 col-lg-3'>
            <div className='row'>Services</div>
            <div className='row'><Link className='footerLink' to={firstLogin? "/edit_biodata" : "/register"}>Create your bio-data</Link></div>
            <div className='row'><Link className='footerLink' to="/quiz">Quiz</Link></div>
            <div className='row'><Link className='footerLink' to="/reportProblem">Report a Problem</Link></div>
           
          </div>
          <div className='footerMenu align-items-start col-12 col-md-6 col-lg-3'>
            <div className='row'>Website</div>
            <div className='row'><Link className='footerLink' to="/help&support">FAQs</Link></div>
            <div className='row text-start'><Link className='footerLink' to="terms&policies">Terms & Privacy Policies</Link></div>
           
          </div>
          <div className='footerMenu align-items-start col-12 col-md-6 col-lg-3'>
            <div className='row'>Contact</div>
            <div className='row'>Hotline: (+880) 1709006114</div>
            <div className='row'>Email: jannatersathi@gmail.com</div>
            
    
          </div>
          <div className='footerMenu align-items-start col-12 col-md-6 col-lg-3 followUs'>
            <div className='row'>Follow Us</div>
            <div className='row social'>
                <a href="https://www.facebook.com/JannaterSathiOfficial" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>Our facebook page </a></div>
            <div className='row social'>
            <a href="https://www.facebook.com/groups/JannaterSathiOfficial" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>Our facebook group </a></div>
            <div className='row social'>
            <a href="https://www.youtube.com/channel/UCTzCZLjeeAGO1go16_ITjDQ" target="_blank" rel="noreferrer">
                 <i className="bi bi-youtube"></i>Our youtube channel</a></div>
        
          </div>
         
         </div>
         <div className='footer-footer'>
          
           <div className='copyright'>© 2022 JannaterSathi. All rights reserved.</div>
        </div>
      </footer>
    )
}

export default Footer
