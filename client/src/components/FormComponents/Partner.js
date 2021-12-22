import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Grid, makeStyles, TextField } from '@material-ui/core'

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
                

                   
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="বৈবাহিক অবস্থা"
                  id="pStatus"
                  name="pStatus"
                  value={pStatus}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="বয়স"
                  id="pAge"
                  name="pAge"
                  value={pAge}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="বর্ণ"
                  id="pColor"
                  name="pColor"
                  value={pColor}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="উচ্চতা"
                  id="pHeight"
                  name="pHeight"
                  value={pHeight}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="ন্যূনতম শিক্ষাগত যোগ্যতা"
                  id="pEdu"
                  name="pEdu"
                  value={pEdu}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="পেশা"
                  id="pProf"
                  name="pProf"
                  value={pProf}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="জেলা"
                  id="partDistrict"
                  name="partDistrict"
                  value={partDistrict}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 maxRows = "200"
                  required
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="অর্থনৈতিক অবস্থা"
                  id="pEconomic"
                  name="pEconomic"
                  value={pEconomic}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 multiline
                 minRows = "8"
                  required
                  fullWidth
                  className={classes.textfield}
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  variant="outlined"
                 
                  label="জান্নাতের সাথীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন"
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
