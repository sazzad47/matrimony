import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const FamilyInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
             <div className="row infoHeading">
               <div className="col-md-12 text-center">
               <div className="textHeading">পারিবারিক তথ্য</div>
               </div>
             </div>
          

             
             
             {user.fatherO === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">পিতার পেশা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.fatherO}</div> </div>
             </div>}
             {user.motherO === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাতার পেশা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.motherO}</div> </div>
             </div>}
             {user.brother === ""? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ভাই ক'জন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.brother}</div> </div>
             </div>}
             {user.sister === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বোন ক'জন?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sister}</div> </div>
             </div>}
             {user.brother === "১ জন"?
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ভাই সম্পর্কে তথ্য</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.brotherInfo}</div> </div>
             </div>
             : user.brother === "ভাই নেই"? null :
             <div className="row infoBox-1 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">ভাইদের সম্পর্কে তথ্য</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.brotherInfo}</div> </div>
             </div>}
             {user.sister === "১ জন"? 
             <div className={user.brother==="ভাই নেই"? "row infoBox-1" : "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বোন সম্পর্কে তথ্য</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sisterInfo}</div> </div>
             </div>
             : user.sister === "বোন নেই"?  null :
             <div className={user.brother==="ভাই নেই"? "row infoBox-1" : "row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বোনদের সম্পর্কে তথ্য</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.sisterInfo}</div> </div>
             </div>}
             {user.uncleInfo === ""? null :
             <div className={user.brother==="ভাই নেই"? "row infoBox-2" : user.sister==="বোন নেই"? "row infoBox-2": "row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">চাচা মামাদের সম্পর্কে তথ্য</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.uncleInfo}</div> </div>
             </div>}
             
             
            
             
             </div>
             </Card>
    )
}

export default FamilyInfo
