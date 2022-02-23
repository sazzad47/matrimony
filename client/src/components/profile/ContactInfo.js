import { Card, makeStyles } from '@material-ui/core';
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
        {user.fullname === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">পূর্ণ নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fullname}</div> </div>
             </div>}
        {user.gMobile === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অভিভাবকের মোবাইল নাম্বার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.gMobile}</div> </div>
             </div>}
        {user.gRelation === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">{user.gender === "পাত্রের বায়োডাটা"?<span>পাত্র যার নাম্বার দিয়েছেন</span>:<span>পাত্রী যার নাম্বার দিয়েছেন</span>}</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.gRelation}</div> </div>
             </div>}
        {user.urEmail === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বায়োডাটা পাঠানোর ই-মেইল এড্রেস</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.urEmail}</div> </div>
             </div>}
        

        
        
        

        
        
       
        
        </div>
        </Card>
    )
}

export default ContactInfo
