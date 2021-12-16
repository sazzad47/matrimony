import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  textfield: {
    margin:'20px',
  
  
    
   
    
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




const EditProfile = () => {
    const classes = useStyles();
    const initState = {
        gCVpermit: '', allTrue: '', noDayvar: '', 
    }
    const label = "আমি আল্লাহ সুবহানাহু ওয়া তা'আলার নামে হলফ করে বলছি, আমার বায়োডাটায় যে তথ্যগুলো দেয়া হয়েছে, আমার জ্ঞানে সব সত্য, এবং আমার অভিভাবকের অনুমতি সাপেক্ষে। কোনো মিথ্যে তথ্য দিয়ে থাকলে তার কোনো দায়ভার JannaterSathi.com নেবে না।"
    const [userData, setUserData] = useState(initState)
    const {  gCVpermit, noDayvar,} = userData
    const [approval, setApproval] = useState('')

    const [allTrue, setAllTrue] = React.useState(false);
    

    const handleChecked = (event) => {
      setAllTrue(event.target.checked);
    };
    const  handleApproval = () => {
      setApproval ('no')
    }

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
      setAllTrue(auth.user)
    }, [auth.user])
    
    
    

     
    

    

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData,approval, allTrue, auth}))
    }

    return (
        <div >
            

            <form onSubmit={handleSubmit}>

              <Grid container style={{padding:'20px'}}>
                <Grid justifyContent="flex-end" item xs={1} md={1} lg={1}>
                <FormControlLabel 
                control={
                <Checkbox
                color="primary"
                 required
                 checked={allTrue} 
                 onChange={handleChecked}
                  />} 
                  />
                </Grid>
                <Grid style={{paddingTop:'7px'}} item xs ={11} md={11} lg={11}>
                 {label}
                </Grid>
             
              </Grid>



          
          
                
               
           
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
