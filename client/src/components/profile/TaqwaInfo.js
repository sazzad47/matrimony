import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const TaqwaInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
             <div className="row infoHeading">
               <div className="col-md-12 text-center">
               <div className="textHeading">তাক্বওয়া</div>
               </div>
             </div>
          

             
             
             {user.salat === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">পাঁচ ওয়াক্ত সালাত আদায় করেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.salat}</div> </div>
             </div>}
             {user.salatCon === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">নিয়মিত সালাত আদায় করছেন কতো সময় যাবত?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.salatCon}</div> </div>
             </div>}
             {user.gender==="পাত্রের বায়োডাটা"?
             <div>
             {user.dari === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার সুন্নতি দাড়ি আছে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dari}</div> </div>
             </div>}
             {user.takhnu === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">টাখনুর উপর কাপড় পরেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhnu}</div> </div>
             </div>}
             {user.poshak === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.poshak}</div> </div>
             </div>}
             </div>:null}
             {user.gender==="পাত্রীর বায়োডাটা"?
             <div>
             {user.poshak === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.poshak}</div> </div>
             </div>}
             </div>:null}
             {user.mahram === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাহরাম নন-মাহরাম মেনে চলেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mahram}</div> </div>
             </div>}
             {user.quran === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শুদ্ধভাবে কুরআন তিলাওয়াত করতে পারেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.quran}</div> </div>
             </div>}
             {user.eduMedium==="জেনারেল"?
             <div>
             {user.iStudy === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কুরআন-হাদিসের জ্ঞান অর্জনের চেষ্টা করেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.iStudy}</div> </div>
             </div>}
             </div>:null}
             {user.natok === ""? null :
             <div className={ user.eduMedium==="জেনারেল"? "row infoBox-1":"row infoBox-2"} >
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.natok}</div> </div>
             </div>}
             {user.tahajjud === ""? null :
             <div className={ user.eduMedium==="জেনারেল"? "row infoBox-2":"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">তাহাজ্জুদ সালাত আদায় করেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.tahajjud}</div> </div>
             </div>}
             {user.mehnot === ""? null :
             <div className={ user.eduMedium==="জেনারেল"? "row infoBox-1":"row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">দ্বীনের কোনো খেদমতের সাথে যুক্ত আছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mehnot}</div> </div>
             </div>}
             {user.aboutMe === ""? null :
             <div className={ user.eduMedium==="জেনারেল"? "row infoBox-2":"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">নিজের সম্পর্কে কিছু লিখুন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.aboutMe}</div> </div>
             </div>}
             
             
            
             
             </div>
             </Card>
    )
}

export default TaqwaInfo
