import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const PartnerInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
      <div className="container-fluid">
           
      <div className="row infoHeading">
        <div className="col-md-12 text-center">
        <div className="textHeading">যেমন 'জান্নাতের সাথী' আশা করেন</div>
        </div>
      </div>
   

      
      
      {user.pStatus === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বৈবাহিক অবস্থা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pStatus}</div> </div>
             </div>}
      {user.pAge === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বয়স</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pAge}</div> </div>
             </div>}
      {user.pColor === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্ণ</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pColor}</div> </div>
             </div>}
      {user.pHeight === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">উচ্চতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pHeight}</div> </div>
             </div>}
      {user.pEdu === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ন্যূনতম শিক্ষাগত যোগ্যতা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pEdu}</div> </div>
             </div>}
      {user.pProf === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">পেশা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pProf}</div> </div>
             </div>}
      {user.partDistrict === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">জেলা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.partDistrict}</div> </div>
             </div>}
      {user.pEconomic === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">অর্থনৈতিক অবস্থা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pEconomic}</div> </div>
             </div>}
      {user.pVirtue === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">জান্নাতের সাথীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pVirtue}</div> </div>
             </div>}
      
      
     
      
      </div>
      </Card>
    )
}

export default PartnerInfo
