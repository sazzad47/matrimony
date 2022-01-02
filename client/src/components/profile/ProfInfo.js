import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const ProfInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
        <div className="container-fluid">
           
        <div className="row infoHeading">
          <div className="col-md-12 text-center">
          <div className="textHeading">অন্যান্য তথ্য</div>
          </div>
        </div>
     

        
        
        
              
             {user.income === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">মাসিক আয়</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.income}</div> </div>
             </div>}
             {user.detProf === ""? null :
             <div className={user.income===""? "row infoBox-2":"row infoBox-1"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">পেশা সম্পর্কে বিস্তারিত বলুন</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.detProf}</div> </div>
             </div>}
             {user.disease === ""? null :
             <div className={user.income===""? "row infoBox-1":"row infoBox-2"}>
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">আপনার শারীরিক বা মানসিক বড় কোনো রোগ আছে?</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.disease}</div> </div>
             </div>}
             
             
        
        
       
        
        </div>
        </Card>
    )
}

export default ProfInfo
