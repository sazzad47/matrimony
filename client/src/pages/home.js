import React, { useEffect } from 'react'

import homePhoto from '../images/homeAyat.png'
import Instructions from '../components/contents/Instructions'

import { useSelector } from 'react-redux'

import BioSearch from '../components/home/BioSearch'

import { Button, Grid, makeStyles, Paper, Typography, Card } from '@material-ui/core';
import { Helmet } from 'react-helmet-async'
import BioSearchByNumber from './../components/home/BioSearchByNumber';
import CreateBioBtn from '../components/home/CreateBioBtn'


let scroll = 0;

const useStyles = makeStyles((theme)=>({
  BioSearchBox: {
    backgroundColor:'#880e4f',
    color:'	#FFFFFF',
    minWidth:'400px',
    minHeight:'50px'
    
},
  
     
  
    
    
  
  
   
  }));

const Home = () => {
    const classes = useStyles();
    const { auth, theme } = useSelector(state => state)
    const firstLogin = localStorage.getItem('firstLogin')

    

   

    return (
      <>
      <Helmet>
          <title>Home</title>
          <meta
           name="description"
           content="দুনিয়া থেকে জান্নাতে যাওয়ার এ-আঁকা বাঁকা কণ্টকাকীর্ণ পথটা পাড়ি দেয়ার জন্য এমন একজন সাথী প্রয়োজন, যাকে দেখলে আল্লাহর কথা মনে পড়ে, যার কথা শুনলে..."  
           
           />
           <meta name='keywords' content='বিয়ে পাত্র পাত্রী বায়োডাটা বিয়ের সুন্নাহ দ্বীনদার পাত্র পাত্রী মোহর স্বামী স্ত্রী'/>
      </Helmet>
        <div className="home d-flex justify-content-center">
          <div className='col my-0 my-md-5 my-lg-5'>
          <div className='row'>

          
             
              <div className="col-md-4 order-2 mt-5 mt-md-4 mt-lg-4 order-md-1 order-lg-1">
                 
            
             <div className='mb-4'>

            <BioSearch/>
             </div>
             <div className='mb-5'>

             <BioSearchByNumber/>
             </div>
             <div className='mt-5 pt-2 d-block d-md-none d-lg-none'>

          <CreateBioBtn/>
             </div>
            
               </div>
        <div className='col-md-8 order-1 order-md-2 order-lg-2'>
          <img src ={homePhoto} className="img-fluid"/>
                
             </div>
             
              </div>
              <div className='row'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
              
              <div style={{minWidth:'400px'}} className='mt-5 d-none d-md-block d-lg-block'>

             <CreateBioBtn/>
                </div>
            
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <Instructions/>

                </div>
              </div>
              </div>
        </div>
        </>
    )
}

export default Home
