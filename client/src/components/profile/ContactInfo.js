import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const ContactInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
        <div className="row infoHeading">
          <div className="col-md-12 text-center">
          <div className="textHeading">বায়োডাটা নং-{user.index} এর যোগাযোগ তথ্য </div>
          </div>
        </div>
        <div className="row infoBox-1">
               <Typography>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহ<br/>
               জান্নাতের সাথী ডট কম থেকে বলছি,<br/><br/>
               বায়োডাটা নং {user.index} এর যোগাযোগ তথ্যঃ<br/><br/>
               {user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের':'পাত্রীর'} অভিভাবকের মোবাইল নাম্বারঃ<br/>
               {user.gMobile}<br/>
               অভিভাবকের সাথে {user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের':'পাত্রীর'} সম্পর্কঃ<br/>
               {user.gRelation}<br/>
               {user.gender==='পাত্রের বায়োডাটা'? 'পাত্রকে':'পাত্রীকে'} বায়োডাটা পাঠানোর ই-মেইল এড্রেসঃ<br/>
               {user.urEmail}<br/><br/>
               যোগাযোগের ক্ষত্রে কোনো ধরনের অসুবিধার সম্মুখীন হলে আমাদেরকে জানানোর অনুরোধ রইলো।</Typography>
        
          </div>
        <div className="row infoBox-2 mt-3">
               <Typography style={{fontWeight:'bold'}}>প্রকাশযোগ্য নয়<br/><br/>
               {user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের':'পাত্রীর'} নামঃ<br/>
               {user.fullname}<br/>
               বাবার নামঃ<br/>
               {user.fatherN}<br/>
               মায়ের নামঃ<br/>
               {user.motherN}<br/>
               {user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের':'পাত্রীর'} মোবাইল নাম্বারঃ<br/>
               {user.urMobile}</Typography><br/>
              
  
        
          </div>

       
        
        </div>
        </Card>
    )
}

export default ContactInfo
