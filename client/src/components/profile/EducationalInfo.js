import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));

const EducationalInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
             <div className="row infoHeading">
               <div className="col-md-12 text-center">
               <div className="textHeading">শিক্ষাগত যোগ্যতা</div>
               </div>
             </div>
          

             
             
             {user.eduMedium === ""? null :
             <div>
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কোন মাধ্যমে পড়াশোনা করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.eduMedium}</div> </div>
             </div>
             {user.eduMedium==="ক্বওমী মাদরাসা"?
             <div>
              
             {user.hifz === "হ্যাঁ"? 
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি পূর্ণ হাফেয?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hifz}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কতো সালে হিফয সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hifzYear}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন মাদরাসা থেকে হিফয সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hifzMadrasa}</div> </div>
             </div>
             </div>:null}
             {user.takmil === "হ্যাঁ"? 
             <div>
             {user.takmil === "হ্যাঁ"? 
             <div>
              
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি তাকমিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmil}</div> </div>
             </div>
            
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কতো সালে তাকমিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmilYear}</div> </div>
             </div>
           
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন মাদরাসা থেকে তাকমিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmilMadrasa}</div> </div>
             </div>
             
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">তাকমিলের ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmilResult}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.takhassus === "হ্যাঁ"? 
             <div>
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি তাখাস্সুস সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhassus}</div> </div>
             </div>
             
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বিষয়ে তাখাস্সুস পড়েছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhassusSubject}</div> </div>
             </div>
             
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কতো সালে তাখাস্সুস সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhassusYear}</div> </div>
             </div>
            
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন মাদরাসা থেকে তাখাস্সুস সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhassusMadrasa}</div> </div>
             </div>
             
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">তাখাস্সুসের ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takhassusResult}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>: null}
             </div>:null}
             
             {user.takmil === "না"? 
             <div>
               <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি তাকমিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmil}</div> </div>
             </div>
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বর্ষ পর্যন্ত পড়েছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.takmilJamat}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.hifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             
             </div>:null}
             {user.eduMedium==="আলিয়া মাদরাসা"?
             <div>
             {user.aliaHifz === "হ্যাঁ"?
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি পূর্ণ হাফেয?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.aliaHifz}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কতো সালে হিফয সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.aliaHifzYear}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন মাদরাসা থেকে হিফয সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.aliaHifzMadrasa}</div> </div>
             </div>
             </div>:null}
             {user.dakhil === "হ্যাঁ"?
             <div>
             {user.dakhil === "হ্যাঁ"?
             <div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি দাখিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dakhil}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">দাখিলের ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dakhilResult}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">দাখিলের বিভাগ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dakhilGroup}</div> </div>
             </div>
            
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">দাখিল পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dakhilYear}</div> </div>
             </div>
             
             </div>:null}
             {user.alim === "হ্যাঁ"? 
             <div>
             {user.alim === "হ্যাঁ"? 
             <div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি আলিম পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alim}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আলিমের ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alimResult}</div> </div>
             </div>
             
            
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আলিম পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alimYear}</div> </div>
             </div>
             {user.fazil==="আলিমের পর আর পড়িনি।"?
              <div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.fazil === "হ্যাঁ"?
             <div>
             {user.fazil === "হ্যাঁ"?
             <div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি ফাযিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazil}</div> </div>
             </div>
            
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazilMadrasa}</div> </div>
             </div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ফাযিল পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazilYear}</div> </div>
             </div>
             {user.kamil==="ফাযিলের পর আর পড়িনি।"?
             <div>
             {user.story === ""? null:
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.kamil === "হ্যাঁ"? 
             <div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি কামিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamil}</div> </div>
             </div>
            
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilMadrasa}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কামিল পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilYear}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কামিলের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilSubject}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             
             
             {user.kamil === "কামিল পড়ছি, এখনো শেষ হয়নি।"? 
             <div>
                <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি কামিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamil}</div> </div>
             </div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বর্ষে পড়ছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilJamat}</div> </div>
             </div>
            
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilMadrasa}</div> </div>
             </div>
             
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কামিলের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.kamilSubject}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.fazil === "ফাযিল পড়ছি, এখনো শেষ হয়নি।"? 
             <div>
               <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি ফাযিল পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazil}</div> </div>
             </div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বর্ষে পড়ছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazilJamat}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fazilMadrasa}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             
             </div>:null}
             {user.alim === "আলিম পড়ছি, এখনো শেষ হয়নি।"?
             <div>
               <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি আলিম পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alim}</div> </div>
             </div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বর্ষে পড়ছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alimJamat}</div> </div>
             </div>
             
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আলিমের বিভাগ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.alimGroup}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.alim==="দাখিলের পর আর পড়িনি।"?
              <div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             
            
             
             </div>:null}
             {user.dakhil === "না"? 
             <div>
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-1": "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন ক্লাস পর্যন্ত পড়েছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dakhilJamat}</div> </div>
             </div>
             {user.story === ""? null :
             <div className={user.aliaHifz === "হ্যাঁ"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>
             :null}
             
             </div>:null}
             {user.eduMedium==="জেনারেল"?
             <div>
               {user.ssc === "হ্যাঁ"? 
               <div>
             {user.ssc === "হ্যাঁ"? 
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি এসএসসি পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.ssc}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এসএসসির ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sscResult}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এসএসসির বিভাগ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sscGroup}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এসএসসি পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sscYear}</div> </div>
             </div>
             {user.hsc==="এসএসসির পর আর পড়িনি।"? 
              <div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.hsc === "হ্যাঁ"?
             <div>
             {user.hsc === "হ্যাঁ"? 
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি এইচএসসি পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hsc}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এইচএসসির ফলাফল</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hscResult}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এইচএসসির বিভাগ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hscGroup}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এইচএসসি পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hscYear}</div> </div>
             </div>
             {user.honors==="না, এইচএসসির পর আর পড়িনি।"? 
              <div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.honors === "হ্যাঁ"?
             <div>
             {user.honors === "হ্যাঁ"?
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি অনার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honors}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অনার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsSubject}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অনার্স পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsYear}</div> </div>
             </div>
             {user.masters==="না, অনার্সের পর আর পড়িনি।"? 
              <div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.masters === "হ্যাঁ"?
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি মাস্টার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.masters}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersSubject}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্স পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersYear}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.masters === "পড়ছি, এখনো শেষ হয়নি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি মাস্টার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.masters}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersSubject}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersJamat}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersMadrasa}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.honors === "অনার্স পড়ছি, এখনো শেষ হয়নি।"?
             <div>
              <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি অনার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honors}</div> </div>
             </div>
             
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অনার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsSubject}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsJamat}</div> </div>
             </div>
             
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsMadrasa}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.honors === "ডিগ্রী সম্পন্ন করেছি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি অনার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honors}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ডিগ্রী পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsYear}</div> </div>
             </div>
             {user.masters==="না, ডিগ্রীর পর আর পড়িনি।"? 
              <div>
             {user.story === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.masters==="হ্যাঁ"?
             <div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি মাস্টার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.masters}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersSubject}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersMadrasa}</div> </div>
             </div>
           
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্স পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersYear}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
            {user.masters==="পড়ছি, এখনো শেষ হয়নি।"?
            <div>
              <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি মাস্টার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.masters}</div> </div>
             </div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাস্টার্সের বিষয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersSubject}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersJamat}</div> </div>
             </div>
             
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.mastersMadrasa}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.honors === "ডিগ্রী পড়ছি, এখনো শেষ হয়নি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি অনার্স সম্পন্ন করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honors}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsJamat}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.honorsMadrasa}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.hsc === "এইচএসসি পড়ছি, এখনো শেষ হয়নি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি এইচএসসি পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hsc}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন বর্ষে পড়ছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hscJamat}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">এইচএসসির বিভাগ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hscGroup}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>
             :null}
             {user.hsc === "ডিপ্লোমা সম্পন্ন করেছি।"?
             <div>
             {user.hsc === "ডিপ্লোমা সম্পন্ন করেছি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি এইচএসসি পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hsc}</div> </div>
             </div>
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ডিপ্লোমা কোন বিষয়ে পড়েছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaSubject}</div> </div>
             </div>
            
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaMadrasa}</div> </div>
             </div>
            
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ডিপ্লোমা পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaYear}</div> </div>
             </div>
             {user.diplomaBsc==="না,ডিপ্লোমার পর আর পড়িনি।"? 
              <div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.diplomaBsc === "হ্যাঁ"?
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি বিএসসি করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBsc}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিএসসি কোন বিষয়ে করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscSubject}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিএসসি পাসের সন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscYear}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             {user.diplomaBsc==="করছি, এখনো শেষ হয়নি।"? 
             <div>
                <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি বিএসসি করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBsc}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিএসসি কোন বিষয়ে করছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscSubject}</div> </div>
             </div>
             
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaBscJamat}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.hsc === "ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।"?
             <div>
               <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কি এইচএসসি পাশ করেছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.hsc}</div> </div>
             </div>
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ডিপ্লোমা কোন বিষয়ে পড়ছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaSubject}</div> </div>
             </div>
           
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">শিক্ষাপ্রতিষ্ঠানের নাম</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaMadrasa}</div> </div>
             </div>
             
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ষ/সেমিস্টার</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.diplomaRunJamat}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-2">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             </div>:null}
             {user.ssc === "না"?
             <div>
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">কোন ক্লাস পর্যন্ত পড়েছেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sscJamat}</div> </div>
             </div>
             {user.story === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অন্যান্য শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.story}</div> </div>
             </div>}
             </div>:null}
             
             </div>:null}
             
            
             </div>}
             
             
            
             
             </div>
             </Card>
    )
}

export default EducationalInfo
