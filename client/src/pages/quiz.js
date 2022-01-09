import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import { Helmet } from 'react-helmet-async'

const Quiz = () => {
    const download = (e) => {
        e.preventDefault();
        axios({
            url: "https://jannatersathi.com",
            method:'GET',
            responseType:'blob',
        }).then((res) => {
           FileDownload(res.data, 'ইসলামী আকীদা – ড. খন্দকার আব্দুল্লাহ জাহাঙ্গীর.pdf')
        })
    }
    return (
        <div className="App"> 
        <Helmet>
         <title>Quiz</title>
         <meta name='description' content="ইলমে নববীকে সবার মাঝে ছড়িয়ে দিতেই আমাদের এই ক্ষুদ্র প্রচেষ্টা..."/>
          <link rel='canonical' href='/terms&policies'/>
      </Helmet>
      <Typography gutterBottom variant="h5" align="center">
      JannaterSathi.com Quiz Contest
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="body3">
            <Typography variant='h6' style={{fontWeight:'bold'}}>রেজিস্ট্রেশনঃ</Typography> <br/>
            <ul>
                <Typography>অংশগ্রহণ করার জন্য আগেই কোনো রেজিস্ট্রেশ করতে হবে না। কোনো প্রকার ফি-ও দিতে হবে না। যে ফর্মের মাধ্যমে পরীক্ষা নেয়া হবে, ঐ ফর্মেই আপনার নাম, জেলার নাম, ও মোবাইল নাম্বার লিখার জন্য টেক্সট ফিল্ড থাকবে।  </Typography>
                
            </ul><br/>
            
            <Typography variant='h6' style={{fontWeight:'bold'}}>পরীক্ষা যেভাবে অনুষ্ঠিত হবেঃ</Typography> <br/>
            <ul>
                <Typography>পরীক্ষা অনুষ্ঠিত হবে গুগল ফর্মের মাধ্যমে, যাতে ৩০ টি MCQ থাকবে,যা সমাধান করার জন্য সময় থাকবে ১৫ মিনিট, পূর্ণমান ১০০। একাধিক প্রতিযোগী একই স্কোর প্রাপ্ত হলে যিনি আগে সাবমিট করবেন, মেধাক্রমে তিনি উপরে থাকবেন। গুগল ফর্মের লিঙ্ক যথাসময়ে JannaterSathi.com এর ফেইসবুক পেইজে দেয়া হবে।</Typography>
                
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>তারিখ ও সময়ঃ</Typography> <br/>
            <ul>
                <Typography>JannaterSathi.com প্রতি মাসের প্রথম শুক্রবার রাত ৯.০০ টায় এই কুইজের আয়োজন করে। </Typography>
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>বিষয় ও প্রস্তুতিঃ</Typography> <br/>
            <Typography>প্রতিযোগীদের নির্বাচনে ফেব্রুয়ারি মাসের বিষয় নির্বাচিত হয়েছে 'আক্বীদা'। প্রতিযোগীদের প্রস্তুতির সুবিধার্থে আমরা সবগুলো প্রশ্ন তৈরি করবো ড. খন্দকার আব্দুল্লাহ জাহাঙ্গীর স্যার কর্তৃক লিখিত 'ইসলামী আকীদা' বই থেকে। বইটির PDF ডাউনলোড করতে ডাউনলোড বাটনে ক্লিক করুন <Button disableFocusRipple disableRipple onClick={(e) => download(e)} variant='contained' color='primary'> Download PDF </Button></Typography>
            <br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>পুরস্কারঃ</Typography> <br/>
            <ul>
               <Typography>প্রথম, দ্বিতীয় ও তৃতীয় স্থান অধিকারীকে পুরস্কৃত করা হবে। (সংখ্যাটি প্রতিযোগীর সংখ্যার উপর ভিত্তি করে পরবর্তীতে বাড়ানো হবে ইন শা আল্লাহ) </Typography>
                
            </ul><br/>
          </Typography> 
            
            
          </CardContent>
        </Card>
      </Grid>
    </div>
    )
}

export default Quiz
