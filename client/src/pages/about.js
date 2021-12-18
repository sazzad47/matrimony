import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { createApplicant } from '../redux/actions/reportAction';

const About = () => {
  const dispatch = useDispatch()
  
  const [fullname, setFullname] = useState('')
  
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [report, setReport] = useState('')
  

  

   
   
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createApplicant({ fullname, email, subject, report, }))
}

    return (
      <div className="App"> 
      <Typography gutterBottom variant="h5" align="center">
      JannaterSathi.com একটি আন্দোলন, যার লক্ষ্য ও উদ্দেশ্য-
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
              <ul className='ml-3'>
                  <li>
                  <Typography gutterBottom variant="body3">
                  অবৈধ প্রেম-ভালোবাসার নিকষ কালো অন্ধকারে যারা নিমজ্জিত, তাদেরকে আলোর পথ দেখানো। <br/><br/>
                 </Typography> 
                  </li>
                 
                  
                  <li>
                  <Typography gutterBottom variant="body3">
                  পার্থিব মোহকে দূরে ঠেলে, দ্বীনদারিতাকে প্রাধান্য দিয়ে জীবনসঙ্গী নির্বাচনে মানুষকে অনুপ্রেরণা দেয়া। <br/><br/>
                 </Typography> 
                  </li>
                  <li>
                  <Typography gutterBottom variant="body3">
                  বিয়েকে সমাজে প্রচলিত বিজাতীয় অপসংস্কৃতি থেকে মুক্ত করে সুন্নাহের আলোয় উদ্ভাসিত করা।  <br/><br/>
                 </Typography> 
                  </li>
                  <li>
                  <Typography gutterBottom variant="body3">
                  স্বামী-স্ত্রীর পারস্পরিক দায়িত্ব-কর্তব্য সম্পর্কে মানুষকে সচেতন ক'রে বিয়ের বন্ধনকে আরো সুসংহত করা।  <br/><br/>
                 </Typography> 
                  </li>

              </ul>
           
            
           
          </CardContent>
        </Card>
      </Grid>
    </div>
       
          
     
     
                
    )
}

export default About
