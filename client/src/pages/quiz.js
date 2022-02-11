import { Button, Card, CardContent, CircularProgress, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import { Helmet } from 'react-helmet-async'
import DownloadingProgress from '../components/DownloadingProgress'

const Quiz = () => {
   const [start, setStart] = useState(false);
    const download = (e) => {
        e.preventDefault();
        setStart(true);
        
        axios({
            url: `api/pdf`,
            method:'GET',
            responseType:'blob',
        }).then((res) => {
           FileDownload(res.data, 'রোযার মাসআলা-মাসায়েল- সম্পাদনা পরিষদ- ইসলামিক ফাউন্ডেশন.pdf')
           setStart(false);
        })
        
    }
    return (
        <div className="App"> 
        <Helmet>
         <title>Quiz</title>
         <meta name='description' content="ইলমে নববীকে সবার মাঝে ছড়িয়ে দিতেই আমাদের এই ক্ষুদ্র প্রচেষ্টা..."/>
          <link rel='canonical' href='/terms&policies'/>
      </Helmet>
       {start?<div className='loading p-5'><DownloadingProgress/></div>:<div>
      <Typography gutterBottom variant="h5" align="center">
      জান্নাতের সাথী কুইজ মার্চ ২০২২ 
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
                <Typography>পরীক্ষা অনুষ্ঠিত হবে গুগল ফর্মের মাধ্যমে, যাতে ২০ টি MCQ থাকবে,যা সমাধান করার জন্য সময় থাকবে ১৫ মিনিট, পূর্ণমান ১০০। একাধিক প্রতিযোগী একই স্কোর প্রাপ্ত হলে যিনি আগে সাবমিট করবেন, মেধাক্রমে তিনি উপরে থাকবেন। গুগল ফর্মের লিঙ্ক যথাসময়ে JannaterSathi.com এর ফেইসবুক পেইজে দেয়া হবে।</Typography>
                
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>তারিখ ও সময়ঃ</Typography> <br/>
            <ul>
                <Typography>JannaterSathi.com প্রতি মাসের প্রথম শুক্রবার রাত ৯.০০ টায় এই কুইজের আয়োজন করে। মার্চ মাসের কুইজ ৪ মার্চ রোজ শুক্রবার রাত ৯.০০ টায় অনুষ্ঠিত হবে ইনশা আল্লাহ। </Typography>
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>বিষয় ও প্রস্তুতিঃ</Typography> <br/>
            <Typography>প্রতিযোগীদের নির্বাচনে মার্চ মাসের বিষয় নির্বাচিত হয়েছে 'সিয়াম'। প্রতিযোগীদের প্রস্তুতির সুবিধার্থে আমরা সবগুলো প্রশ্ন তৈরি করবো ইসলামিক ফাউন্ডেশন কর্তৃক প্রকাশিত 'রোযার মাসআলা-মাসায়েল' থেকে। বইটির PDF ডাউনলোড করতে ডাউনলোড বাটনে ক্লিক করুন <Button disableRipple onClick={(e) => download(e)} variant='contained' color='primary'> Download PDF </Button></Typography>
            <br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>পুরস্কারঃ</Typography> <br/>
            <ul>
               <Typography>প্রথম, দ্বিতীয় ও তৃতীয় স্থান অধিকারীকে পুরস্কৃত করা হবে (সংখ্যাটি প্রতিযোগীর সংখ্যার উপর ভিত্তি করে পরবর্তীতে বাড়ানো হবে ইন শা আল্লাহ)। এছাড়াও ৮০% এর উপর স্কোর করতে পারলে Certificate of Excellence প্রদান করা হবে ইনশা আল্লাহ। </Typography>
                
            </ul><br/>
          </Typography> 
            
            
          </CardContent>
        </Card>
      </Grid>
      </div>}
    </div>
    )
}

export default Quiz
