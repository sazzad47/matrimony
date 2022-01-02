import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateBiodata from './createBiodata'
import Rocket from '../images/Rocket.png'
import Nagad from '../images/Nagad.png'
import Bkash from '../images/Bkash.png'
import { createApplicant } from '../redux/actions/applicantAction';
import { Helmet } from 'react-helmet-async';

const ApplicationForm = () => {
  const dispatch = useDispatch()
   
  const [fullname, setFullname] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [district, setDistrict] = useState('')
  const [totalPrice, setTotalPrice] = useState('১০০')
  const [biodataNumber, setBiodataNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [trxID, setTrxID] = useState('')

  

   
    const [toggleState, setToggleState] = useState(1);
   
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createApplicant({ fullname, mobile, email, district, totalPrice, 
      biodataNumber, phoneNumber,trxID}))
}

    return (
      <div className="App"> 
      <Helmet>
          <title>যোগাযোগের আবেদন ফর্ম</title>
          <meta name='description' content='যোগাযোগ তথ্য পেতে আবেদন ফর্মটি পূরণ করুন।'/>
          <link rel='canonical' href='/contactRequest'/>
         </Helmet>
      <Typography gutterBottom variant="h3" align="center">
        আবেদন ফর্ম 
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="body3">
            যোগাযোগ তথ্য পেতে আমাদের নির্ধারিত ফি পরিশোধ করতে হবে। অনুগ্রহ ক'রে নীচের আবেদন ফর্মটি পূরণ ক'রে সাবমিট করুন। 
            ফর্ম সাবমিট করার সর্বোচ্চ ৪৮ ঘন্টার মধ্যে আপনার দেয়া মোবাইল নাম্বারে SMS এর মাধ্যমে যোগাযোগ তথ্য পাঠিয়ে দেয়া হবে ইন-শা-আল্লাহ।<br/><br/>
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
                <Grid item  xs={12}>
                  <TextField 
                  placeholder="আপনার জেলার নাম লিখুন" 
                  label="জেলা" 
                  variant="outlined" 
                  fullWidth 
                  required
                  id="district"
                  name="district"
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value) }} />
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
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value) }} />
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
                <Grid item xs = {6}>
                  <TextField 
                  select
                  fullWidth
                  variant="outlined"
                  label="বায়োডাটার সংখ্যা"
                  id="totalPrice"
                  name="totalPrice"
                  value={totalPrice} 
                  onChange={(e) => {
                    setTotalPrice(e.target.value) }} >
                    <option value ="১০০">১</option>
                    <option value ="২০০">২</option> 
                    <option value ="৩০০">৩</option>
                    <option value ="৪০০" >৪</option>
                    <option value ="৫০০">৫</option> 
                    </TextField>
                </Grid>
                <Grid 
                container 
                alignItems="center"
                justifyContent="center"  
                item xs={6}>
                  সর্বমোট মূল্য = {totalPrice} টাকা। 
                </Grid>
                <Grid item xs ={12}
               
               >
                 <Typography gutterBottom variant="body2"color="textSecondary" > যতটি বায়োডাটার যোগাযোগ তথ্য চাচ্ছেন। </Typography>
               </Grid>
                <Grid item xs ={12}>
                  <TextField 
                  required
                  fullWidth
                  variant="outlined"
                  label="বায়োডাটার নাম্বার"
                  placeholder="000,000,000..."
                  id="biodataNumber"
                  name="biodataNumber"
                  value={biodataNumber}
                  onChange={(e) => {
                    setBiodataNumber(e.target.value) }} 
                   ></TextField>
                </Grid>
                <Grid item xs ={12}
               
                >
                  <Typography gutterBottom variant="body2"color="textSecondary" >যার সাথে যোগাযোগ করতে চাচ্ছেন। একাধিক হলে কমা দিয়ে লিখুন। </Typography>
                </Grid>
                <Grid  
                 container
                 direction="row"
                 style={{ backgroundColor:'navy'}}
                 alignItems="center" item xs={12}>
               
        <Grid item xs={4}>
        <img  src={Bkash} alt="bkash"
        className={toggleState === 1 ? "pay-tab-active" : "pay-tab"}
        onClick={() => toggleTab(1)}
            />
             
            
        </Grid>
        <Grid container justifyContent="center" item xs={4}>
        <img src={Rocket} alt="rocket" 
         className={toggleState === 2 ? "pay-tab-active" : "pay-tab"}
        onClick={() => toggleTab(2)}
            />
             
        </Grid>
        <Grid  container justifyContent="flex-end" item xs={4}>
        <img className="nagad" src={Nagad} alt="nagad" 
        className={toggleState === 3 ? "pay-tab-active" : "pay-tab"}
        onClick={() => toggleTab(3)} 
           />
            
        </Grid>
   
      
                   </Grid>
                <Grid item xs={12}>
                <div
          className={toggleState === 1 ? "apply-content  active-content" : "content"}
        >
       <Typography> নিম্নে উল্লেখিত বিকাশ (Personal) নাম্বারে {totalPrice} টাকা Send Money করুন।</Typography><br/>
       <Typography>বিকাশ (Personal) নাম্বারঃ 01709006114</Typography><br/>
       <Grid item xs={12}>
                  <TextField 
                  type="number" 
                  style={{ maxWidth: 450, paddingBottom: "10px", margin: "0 auto" }}
                 
                  label="Your bKash number"
                  variant="outlined" 
                  fullWidth 
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value) }}
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   type="text" 
                   style={{ maxWidth: 450, paddingBottom: "10px", margin: "0 auto" }}
                   label="Transaction ID" 
                   variant="outlined" 
                   fullWidth 
                   required
                   id="trxID"
                  name="trxID"
                  value={trxID}
                  onChange={(e) => {
                    setTrxID(e.target.value) }} />
                </Grid>
        </div>
        <div
          className={toggleState === 2 ? "apply-content  active-content" : "content"}
        >
            <Typography> নিম্নে উল্লেখিত রকেট (Personal) নাম্বারে {totalPrice} টাকা Send Money করুন।</Typography><br/>
       <Typography>রকেট (Personal) নাম্বারঃ 01709006114</Typography><br/>
       <Grid item xs={12}>
                  <TextField 
                  type="number" 
                  style={{ maxWidth: 450, paddingBottom: "10px", margin: "0 auto" }}
                 
                  label="Your Rocket number"
                  variant="outlined" 
                  fullWidth 
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value) }}
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   type="text" 
                  
                   label="Transaction ID" 
                   variant="outlined" 
                   fullWidth 
                   required
                   id="trxID"
                  name="trxID"
                  value={trxID}
                  onChange={(e) => {
                    setTrxID(e.target.value) }} />
                </Grid>
        </div>
        <div
          className={toggleState === 3 ? "apply-content  active-content" : "content"}
        >
           <Typography> নিম্নে উল্লেখিত নগদ (Personal) নাম্বারে {totalPrice} টাকা Send Money করুন।</Typography><br/>
       <Typography>নগদ (Personal) নাম্বারঃ 01709006114</Typography><br/>
       <Grid item xs={12}>
                  <TextField 
                  type="number" 
                  style={{ maxWidth: 450, paddingBottom: "10px", margin: "0 auto" }}
                 
                  label="Your Nagad number"
                  variant="outlined" 
                  fullWidth 
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value) }}
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                   type="text" 
                  
                   label="Transaction ID" 
                   variant="outlined" 
                   fullWidth 
                   required
                   id="trxID"
                  name="trxID"
                  value={trxID}
                  onChange={(e) => {
                    setTrxID(e.target.value) }} />
                </Grid>
        </div>
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

export default ApplicationForm
