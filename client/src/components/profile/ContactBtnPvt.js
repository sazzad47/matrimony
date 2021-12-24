import { Grid, Typography,Button, makeStyles, Card } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));
const ContactBtnPvt = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
  const { auth } = useSelector(state => state)
    return (
      <>
      
        <Card  className={classes.card}>
        <div className="container-fluid">
           
           <div className="row contactBtnHeading">
             <div className="col-md-12 text-center">
             <div className="textHeading">দৃষ্টি আকর্ষণী</div>
             </div>
           </div>
           <Grid  
           container 
           alignItems="center"
           justifyContent="center"
           item xs={12}
           >
               <Typography align='center' style={{marginTop:'30px'}}>উক্ত {user.gender==="পাত্রের বায়োডাটা"? "পাত্রের" : "পাত্রীর"} অভিভাবক আপনার অভিভাবককে যোগাযোগ করতে বলেছেন। যোগাযোগ করতে নীচের বাটনে চাপুন।</Typography><br/><br/>
              
             <Link to='/contactRequest'> <button className="full-bio-btn mb-4"
              >যোগাযোগ</button></Link> 
           </Grid>
        </div>
       
        </Card>
        </>
     
    )
}

export default ContactBtnPvt
