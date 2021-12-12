import { Paper, makeStyles, Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const AddressInfo = ({id, dispatch, user, profile}) => {

  const classes = useStyles();

    return (
              <Card  className={classes.card}>
            <div className="container-fluid">
           
             <div className="row infoHeading">
               <div className="col-md-12 text-center">
               <div className="textHeading">ঠিকানা</div>
               </div>
             </div>
          

             
             {user.pdivision === ""? null :
             <div className="row infoBox-1">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">স্থায়ী ঠিকানা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.pupazila}, {user.pdistrict}, {user.pdivision}।</div> </div>
             </div>}
              
             {user.cdivision === ""? null :
             <div className="row infoBox-2 ">
               <div className="col-md-6 w-50 w-lg-50 wQuestion"><div className="bioInfoQ">বর্তমান ঠিকানা</div> </div>
               <div className="col-md-6 w-50 w-lg-50 cAnswer"><div className="bioInfoA">{user.cupazila}, {user.cdistrict}, {user.cdivision}।</div> </div>
             </div>}
             
             
            
             
             </div>

        </Card>
        
    )
}

export default AddressInfo
