import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Grid, makeStyles, TextField } from '@material-ui/core'

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
  




const EditProfile = ({setOnEdit}) => {
    const classes = useStyles();
    const initState = {
        lifeP: '', aMazhab: '', politics: '',majar:'',
        dayC:'',fAlem:'',fWriter:'',
    }
    const [userData, setUserData] = useState(initState)
    const {  lifeP, aMazhab, politics,majar,dayC,
        fAlem,fWriter, } = userData

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
        dispatch(updateProfileUser({userData, approval, auth}))
    }

    return (
        <div className="edit_profile">
            

            <form onSubmit={handleSubmit}>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-md-2 mr-lg-auto mr-xl-auto'> ইসলামী দাম্পত্য জীবন নিয়ে আপনার পরিকল্পনা কী? *</h6>
               <Grid container>
                 <textarea
                
                 rows="4"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="lifeP"
                  name="lifeP"
                  value={lifeP}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 > আপনি কোন মাযহাব অনুসরণ করেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="aMazhab"
                  name="aMazhab"
                  value={aMazhab}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6> কোনো রাজনৈতিক মতাদর্শ থাকলে লিখুন। *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="politics"
                  name="politics"
                  value={politics}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6> মাজার সম্পর্কে আপনার বিশ্বাস কী? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="majar"
                  name="majar"
                  value={majar}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
          
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-md-2 mr-lg-auto mr-xl-auto'> আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন। *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fAlem"
                  name="fAlem"
                  value={fAlem}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-md-2 mr-lg-auto mr-xl-auto'> আপনার পছন্দের অন্তত ৩ জন লেখকের নাম লিখুন। *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fWriter"
                  name="fWriter"
                  value={fWriter}
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
