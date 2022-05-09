import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux'


import { createRequests } from '../redux/actions/deleteAction';

const DeleteBiodata = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state)
  const [fullname, setFullname] = useState(auth.user.fullname)
  const [mobile, setMobile] = useState(auth.user.urMobile)
  const [email, setEmail] = useState(auth.user.email)
  const [reason, setReason] = useState('')
  const [action, setAction] = useState('')
  const [biodataNumber, setBiodataNumber] = useState(auth.user.index)
  
  

   
   
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createRequests({ fullname, mobile, email, reason, action, biodataNumber,}))
}

    return (
      <div className="App"> 
      <Helmet>
         <title>Delete Your Biodata</title>
         <meta name='description' content="আপনার বায়োডাটা ডিলিট/হাইড করতে আবেদন ফর্মটি পূরণ করুন।"/>
          <link rel='canonical' href='/deleteBiodata'/>
      </Helmet>
      <Typography gutterBottom variant="h5" align="center">
        ডিলিট/হাইড করার আবেদন ফর্ম 
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="body3">
            বায়োডাটা ডিলিট/হাইড করতে নীচের আবেদন ফর্মটি পূরণ করুন।<br/><br/>
            আপনার জন্য দু'টো অপশন রয়েছেঃ <br/><br/>
            ১. আপনি বায়োডাটা সম্পূর্ণভাবে ডিলিট করতে পারবেন। এক্ষেত্রে আপনার বায়োডাটা আমাদের ওয়েবসাইট থেকে মুছে যাবে, যা পুনরায় ফিরিয়ে আনা সম্ভব না।<br/><br/>
            ২. আপনি চাইলে আপনার বায়োডাটা হাইড করে রাখতে পারবেন। এক্ষেত্রে আপনার বায়োডাটা আপনি ছাড়া কেউ দেখতে পাবে না। পরবর্তীতে যেকোনো সময় পাবলিশ বাটনে ক্লিক করলে আপনার বায়োডাটা পুনরায় পাবলিশ করা হবে ইন শা আল্লাহ।<br/><br/>
          </Typography> 
            
            <form onSubmit={handleSubmit}>

              
              <Grid container spacing={1}>
              <div className='d-none'>
                <Grid  item xs={12}>
                  <TextField 
                  placeholder="আপনার পূর্ণ নাম লিখুন" 
                  label="পূর্ণ নাম" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="fullname"
                  name="fullname"
                  value={auth.user.fullname}
                  onChange={(e) => {
                    setFullname(e.target.value) }} />
                </Grid>

                <Grid item xs ={12}>
                  <TextField 
                  required
                  fullWidth
                  variant="outlined"
                  label="আপনার বায়োডাটা নং"
                  placeholder="আপনার বায়োডাটার নং"
                  id="biodataNumber"
                  name="biodataNumber"
                  value={auth.user.index}
                  onChange={(e) => {
                    setBiodataNumber(e.target.value) }} 
                   ></TextField>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField 
                  type="number" 
                  placeholder="আপনার মোবাইল নাম্বার লিখুন" 
                  label="মোবাইল নাম্বার" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="mobile"
                  name="mobile"
                  value={auth.user.urMobile}
                  onChange={(e) => {
                    setMobile(e.target.value) }} />
                </Grid>
                <Grid item xs ={12}
               
                >
                  <Typography gutterBottom variant="body2"color="textSecondary" > বায়োডাটায় দেয়া নিজের মোবাইল নাম্বারটি লিখুন। </Typography>
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
                  value={auth.user.email}
                  onChange={(e) => {
                    setEmail(e.target.value) }} />
                </Grid>
                <Grid item xs ={12}
               
                >
                  <Typography gutterBottom variant="body2"color="textSecondary" > বায়োডাটায় দেয়া ই-মেইল এড্রেসটি লিখুন। </Typography>
                </Grid>
                </div>
                <Grid item xs = {12}>
                  <TextField 
                  required
                  select
                  fullWidth
                  variant="outlined"
                  label="যা করতে চাচ্ছেন"
                  id="action"
                  name="action"
                  value={action} 
                  onChange={(e) => {
                    setAction(e.target.value) }} >
                    <option value ="সম্পূর্ণভাবে ডিলিট করতে চাই">সম্পূর্ণভাবে ডিলিট করতে চাই</option>
                    <option value ="হাইড করতে চাই">হাইড করতে চাই</option> 
                    
                    </TextField>
                </Grid>
                {action==="সম্পূর্ণভাবে ডিলিট করতে চাই"? <Grid item xs={12}>
                  <TextField 
                  type="email" 
                  multiline
                  minRows={5}
                  label="ডিলিট করার কারণ" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value) }} />
                </Grid> :
                <Grid item xs={12}>
                  <TextField 
                  type="email" 
                  multiline
                  minRows={5}
                  label="হাইড করার কারণ" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value) }} />
                </Grid>}
                
                <Grid item xs={12}>
                  <Button style={{marginTop:'20px'}} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
       
          
     
     
                
    )
}

export default DeleteBiodata
