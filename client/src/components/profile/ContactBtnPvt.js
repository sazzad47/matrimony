import { Grid, Typography,Button, makeStyles, Card } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  },
  BioSearchBox: {
    backgroundColor:'#880e4f',
    color:'	#FFFFFF',
    margin:'15px',
    maxHeight:'100px',
    '&:hover': {
      backgroundColor: 'hsl(320, 94%, 21%)',
      color: '#FFFFFF',
      outline:'none',
      cursor:'pointer'
    }
    
},
   

 
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
               <Typography align='center' style={{marginTop:'30px'}}>উক্ত {user.gender==="পাত্রের বায়োডাটা"? "পাত্র" : "পাত্রী"} আপনার অভিভাবককে যোগাযোগ করতে বলেছেন। যোগাযোগ করতে নীচের বাটনে চাপুন।</Typography><br/><br/>
              
               <Link style={{ textDecoration: 'none', }} to="/contactRequest">
     <Card className={classes.BioSearchBox}  elevation={3}>
        
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={12} md={12}>
             <Typography variant='body1' align="center">যোগাযোগ</Typography>
            </Grid>
            
             
        
             
            
             
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
       
     </Card>
         
     </Link>
           </Grid>
        </div>
       
        </Card>
        </>
     
    )
}

export default ContactBtnPvt
