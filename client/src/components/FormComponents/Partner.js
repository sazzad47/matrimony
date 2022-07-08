import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  textfield: {
    margin:'20px'
  
    
   
    
},
tab: {
  backgroundColor:'#3f50b5',
  color:'#FFFFFF',
  height:'35px',

  '&:hover': {
    backgroundColor: '#fff',
    color: '#000000',
    border:'1px solid #000000',
    height:'35px',
  
},
},
inputRoot: {
  minHeight:'50px',
  [theme.breakpoints.down("sm")]:{
    minHeight: "70px",
    
}
},
   
   

 
}));





const EditProfile = ({setOnEdit}) => {
    const classes = useStyles();
    const initState = {
        pAge: '', pColor: '', pHeight: '',pEdu:'',partDistrict:'',
         pStatus: '', pProf: '',pEconomic:'',pVirtue:'',
    }
    const [userData, setUserData] = useState(initState)
    const {  pAge, pColor, pHeight,pEdu,partDistrict, pStatus,
         pProf,pEconomic,pVirtue, } = userData

         const [approval, setApproval] = useState('')
         const  handleApproval = () => {
           setApproval ('no')
         }

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])
    
    
    

     
    

    

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData,approval, auth}))
    }

    return (
        <div className="edit_profile">
            

            <form onSubmit={handleSubmit}>
                

                 <Typography style={{paddingTop:'20px'}} variant='h6' align='center'>যেমন জীবনসঙ্গী আশা করেন</Typography>  
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বৈবাহিক অবস্থা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pStatus"
                  name="pStatus"
                  value={pStatus}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বয়স *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pAge"
                  name="pAge"
                  value={pAge}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বর্ণ *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pColor"
                  name="pColor"
                  value={pColor}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> উচ্চতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pHeight"
                  name="pHeight"
                  value={pHeight}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
         
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> ন্যূনতম শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pEdu"
                  name="pEdu"
                  value={pEdu}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
         
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> পেশা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pProf"
                  name="pProf"
                  value={pProf}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> পেশা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pProf"
                  name="pProf"
                  value={pProf}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> জেলা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="partDistrict"
                  name="partDistrict"
                  value={partDistrict}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> অর্থনৈতিক অবস্থা *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pEconomic"
                  name="pEconomic"
                  value={pEconomic}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
         
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-md-auto mr-lg-auto mr-xl-auto'> জান্নাতের সাথীর যে গুণাবলী আশা করেন *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="pVirtue"
                  name="pVirtue"
                  value={pVirtue}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
               
             <div className="form mt-4 mr-3 ml-1">
                 
                 <Button disableRipple fullWidth className={classes.tab} onClick={() => {
               handleApproval();
             
              }}  type="submit">Save</Button>
                   
                  
               </div>

                

               
            </form>
        </div>
    )
}

export default EditProfile
