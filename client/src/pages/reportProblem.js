import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { createApplicant } from '../redux/actions/reportAction';

const ReportProblem = () => {
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
      আমাদের ওয়েবসাইট সংক্রান্ত যেকোনো ধরনের সমস্যা আমাদেরকে অবহিত করুন। 
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="body3">
            আমাদের ওয়েবসাইট সংক্রান্ত যেকোনো ধরনের সমস্যা, জটিলতা, অথবা কোনো বিষয়ে আপনার পরামর্শ থাকলে আমাদেরকে জানাতে পারেন নীচের ফর্মটির মাধ্যমে।<br/><br/>
          </Typography> 
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid  item xs={12}>
                  <TextField 
                  placeholder="আপনার পূর্ণ নাম লিখুন" 
                  label="পূর্ণ নাম" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value) }} />
                </Grid>
               
               
                <Grid item xs={12}>
                  <TextField 
                  type="email" 
                  placeholder="আপনার ই-মেইল এড্রেস লিখুন" 
                  label="ই-মেইল এড্রেস" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value) }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                  type="text" 
                  placeholder="যে বিষয়ে জানাতে চান" 
                  label="বিষয়" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value) }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                  type="text" 
                  multiline
                  minRows={5}
                  label="যা জানাতে চান" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="report"
                  name="report"
                  value={report}
                  onChange={(e) => {
                    setReport(e.target.value) }} />
                </Grid>
             
                
               
                
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
       
          
     
     
                
    )
}

export default ReportProblem
