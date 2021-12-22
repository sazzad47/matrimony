import React from 'react'
import { makeStyles,Card } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const AqidaInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
        <div className="row infoHeading">
          <div className="col-md-12 text-center">
          <div className="textHeading">আক্বীদা</div>
          </div>
        </div>
     

        
        
        {user.lifeP === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ইসলামী দাম্পত্য জীবন নিয়ে আপনার পরিকল্পনা কী?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.lifeP}</div> </div>
             </div>}
              
             {user.aMazhab === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনি কোন মাযহাব অনুসরণ করেন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.aMazhab}</div> </div>
             </div>}
             {user.politics === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার আপনার কোনো রাজনৈতিক মতাদর্শ থাকলে লিখুন।</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.politics}</div> </div>
             </div>}
             {user.majar === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাজার সম্পর্কে আপনার বিশ্বাস কী?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.majar}</div> </div>
             </div>}
             {user.dayC === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বিদ'আত সম্পর্কে আপনার ধারণা কী?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.dayC}</div> </div>
             </div>}
             {user.fAlem === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন।</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fAlem}</div> </div>
             </div>}
             {user.fWriter === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার পছন্দের অন্তত ৩ জন লেখকের নাম লিখুন।</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fWriter}</div> </div>
             </div>}
             
        
        
       
        
        </div>
        </Card>
    )
}

export default AqidaInfo
