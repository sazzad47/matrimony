import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const MaritalInfo = ({id, dispatch, user,profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
        <div className="row infoHeading">
          <div className="col-md-12 text-center">
          <div className="textHeading">বিয়ে সংক্রান্ত তথ্য</div>
          </div>
        </div>
     

        
        {user.status==="ডিভোর্সড"? 
        <div>
        {user.divorcedC === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ডিভোর্সের কারণ কী এবং পূর্বের সংসারের সময়কাল কতো ছিলো?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedC}</div> </div>
             </div>}
        {user.divorcedCil === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার সন্তান আছে? যদি থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedCil}</div> </div>
             </div>}
             </div>:null}
             {user.status==="বিধবা"?
             <div>

        {user.divorcedC === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার স্বামী কবে কীভাবে ইন্তেকাল করেছিলেন এবং আপনার পূর্বের সংসারের সময়কাল কতো ছিলো?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedC}</div> </div>
             </div>}
        {user.divorcedCil === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার সন্তান আছে? যদি থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedCil}</div> </div>
             </div>}
             </div>:null}
             {user.status==="বিপত্নীক" ?
             <div>
        {user.divorcedC === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার স্ত্রী কবে কীভাবে ইন্তেকাল করেছিলেন এবং আপনার পূর্বের সংসারের সময়কাল কতো ছিলো?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedC}</div> </div>
             </div>}
        {user.divorcedCil === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার সন্তান আছে? যদি থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.divorcedCil}</div> </div>
             </div>}
             </div>:null}
             {user.status==="বিবাহিত"?
             <div>
        {user.cWN === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্তমানে কতজন স্ত্রী আছে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.cWN}</div> </div>
             </div>}
        {user.cWP === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion">{user.cWN==="১ জন"?<div className="bioInfoQ">নতুন বিয়েতে পূর্বের স্ত্রীর অনুমতি আছে?</div>:
               <div className="bioInfoQ">নতুন বিয়েতে পূর্বের স্ত্রীদের অনুমতি আছে?</div>} </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.cWP}</div> </div>
             </div>}
             {user.mCil === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার সন্তান আছে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mCil}</div> </div>
             </div>}
             {user.mCilN === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কতজন সন্তান আছে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mCilN}</div> </div>
             </div>}
             {user.mCilInfo === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion">{user.mCilN==="১ জন"?<div className="bioInfoQ">সন্তান সম্পর্কে তথ্য দিন</div>:
               <div className="bioInfoQ">সন্তান সম্পর্কে তথ্য দিন</div>} </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mCilInfo}</div> </div>
             </div>}
             </div>:null}
             {user.gPermission === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-2" :"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়েতে আপনার অভিভাবক রাজি আছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.gPermission}</div> </div>
             </div>}
             {user.marriageC === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-1" :"row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ে করবেন কেনো?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.marriageC}</div> </div>
             </div>}
             {user.gender==="পাত্রের বায়োডাটা"?
             <div>
             {user.fWR === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-2" :"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকবেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fWR}</div> </div>
             </div>}
             {user.fWPorda === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-1" :"row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর স্ত্রীকে পরিপূর্ণ পর্দায় রাখতে পারবেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fWPorda}</div> </div>
             </div>}
             {user.fWJob === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-2" :"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর স্ত্রীকে চাকরি করার অনুমতি দেবেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fWJob}</div> </div>
             </div>}
             {user.fWStudy === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-1" :"row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর স্ত্রীকে পড়াশোনা করার অনুমতি দেবেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fWStudy}</div> </div>
             </div>}
             {user.marriageGift === ""? null :
             <div className={user.status==="বিবাহিত"? "row infoBox-2" :"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে কোনো প্রকার উপহার কিংবা অর্থ আশা করবেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.marriageGift}</div> </div>
             </div>}
             </div>:null}
             {user.gender==="পাত্রীর বায়োডাটা"?
             <div>
             {user.mWKhedmot === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর শ্বশুর-শ্বাশুড়ীর সাথে থাকতে ইচ্ছুক?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mWKhedmot}</div> </div>
             </div>}
             {user.mWJob === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর চাকরি করতে ইচ্ছুক?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mWJob}</div> </div>
             </div>}
             {user.mWStudy === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের পর পড়াশোনা চালিয়ে যেতে চান?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mWStudy}</div> </div>
             </div>}
             {user.mMohrana === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিয়ের মোহরানা সম্পর্কে আপনার ধারণা কী?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mMohrana}</div> </div>
             </div>}
             </div>:null}
        
       
        
        </div>
        </Card>
    )
}

export default MaritalInfo
