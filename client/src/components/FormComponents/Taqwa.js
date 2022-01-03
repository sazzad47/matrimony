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
    minHeight: "80px",
    
}
},



   
   

 
}));




const EditProfile = ({setOnEdit}) => {
    const classes = useStyles();
    const initState = {
        salat:'',salatCon:'', dari: '', takhnu: '', poshak: '',mahram:'',
        quran:'',iStudy:'',natok:'',mehnot:'',tahajjud:'', aboutMe: '', 
    }
    const [userData, setUserData] = useState(initState)
    const { salat,salatCon, dari, takhnu, poshak,mahram,quran,iStudy,natok,mehnot,tahajjud,aboutMe,  } = userData

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
                     <Grid container>
                   
                  
                   
                  <TextField
                  fullWidth
                  
                  
                  required
                  label="পাঁচ ওয়াক্ত সালাত আদায় করেন?"
                  variant="outlined"
                  className={classes.textfield}
                  select
                  id="salat"
                  name="salat"
                  value={salat}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="না">না</option>
                  </TextField>
                
                   </Grid>
               
                    
                 </div>
                
                 <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 required
                 multiline
                 maxRows = "200"
                 InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  fullWidth
                  className={classes.textfield}
                  
                  
                  variant="outlined"
                 
                  label="নিয়মিত সালাত আদায় করছেন কতো সময় যাবত?"
                  id="salatCon"
                  name="salatCon"
                  value={salatCon}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
            
            

            {auth.user.gender==="পাত্রের বায়োডাটা"?
            <div>
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  required
                  fullWidth
                  className={classes.textfield}
                  select
                  
                  label="আপনার সুন্নতি দাড়ি আছে?"
                  variant="outlined"
                 
                  
                  id="dari"
                  name="dari"
                  value={dari}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="না">না</option>
                  </TextField>
              
                   </Grid>
               
                    
                 </div>
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  required
                  fullWidth
                  className={classes.textfield}
                  select
                  label="টাখনুর উপর কাপড় পরেন?"
                  
                  
                  variant="outlined"
                 
                  
                  id="takhnu"
                  name="takhnu"
                  value={takhnu}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="না">না</option>
                  </TextField>
                 
                   </Grid>
               
                    
                 </div>
        
                
                 <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 required
                 multiline
                 maxRows = "200"
                 
                  
                  fullWidth
                  className={classes.textfield}
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  variant="outlined"
                 
                  label="ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?"
                  id="poshak"
                  name="poshak"
                  value={poshak}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                   যেমন লিখতে পারেন, পাঞ্জাবী-টুপি, শার্ট-প্যান্ট , ইত্যাদি। 
                    </small>
                    </div>
             </div>
          
            
                </div>
                :
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?"
                   id="poshak"
                   name="poshak"
                   value={poshak}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                  <div  className={classes.textfield}>
                    
                    <small>
                   এখানে আপনার পর্দার বিবরণ দিন। যেমন বোরকা, হাতমোজা-পামোজা্‌, ইত্যাদি পরেন কিনা লিখতে পারেন।
                    </small>
                    </div>
              </div>
           
            }
             
             <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="মাহরাম নন-মাহরাম মেনে চলেন?"
                   id="mahram"
                   name="mahram"
                   value={mahram}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                 
              </div>
             <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  
                   
                   fullWidth
                   className={classes.textfield}
                   InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   variant="outlined"
                  
                   label="শুদ্ধভাবে কুরআন তিলাওয়াত করতে পারেন?"
                   id="quran"
                   name="quran"
                   value={quran}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                 
              </div>

              
                
                {auth.user.eduMedium==="জেনারেল"?
               
               <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="কুরআন-হাদিসের জ্ঞান অর্জনের চেষ্টা করেন?"
                   id="iStudy"
                   name="iStudy"
                   value={iStudy}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                 
              </div>
              :null }
              <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?"
                   id="natok"
                   name="natok"
                   value={natok}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                 
              </div>
              <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="তাহাজ্জুদ সালাত আদায় করেন?"
                   id="tahajjud"
                   name="tahajjud"
                   value={tahajjud}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                  
              </div>
              <div className="form mt-4 mr-3 ml-1">
                <Grid container >
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                 
                   
                   fullWidth
                   className={classes.textfield}
                   InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   variant="outlined"
                  
                   label="দ্বীনের কোনো খেদমতের সাথে যুক্ত আছেন?"
                   id="mehnot"
                   name="mehnot"
                   value={mehnot}
                   onChange={handleInput} 
                   
                  />
                  </Grid>
                  <div className={classes.textfield}>
                    
                    <small>
                    তাবলীগ বা অন্য কোনোভাবে মানুষের কাছে দ্বীন প্রচার-প্রসারের কাজে যুক্ত থাকলে সে-সম্পর্কে লিখতে পারেন।
                    </small>
                    </div>
              </div>
              <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  minRows = "8"
                  
                   
                   fullWidth
                   className={classes.textfield}
                   
                   
                   variant="outlined"
                  
                   label="নিজের সম্পর্কে কিছু লিখুন"
                   id="aboutMe"
                   name="aboutMe"
                   value={aboutMe}
                   onChange={handleInput} 
                   
                  /> 
                  </Grid>
                  <div className={classes.textfield}>
                    
                   {auth.user.gender==="পাত্রের বায়োডাটা"? <small>
                    নিজের শখ-স্বপ্ন, স্বভাব-চরিত্র,পছন্দ-অপছন্দ, ইত্যাদি সম্পর্কে বিস্তারিত লিখুন, যেনো পাত্রীপক্ষ আপনার সম্পর্কে যথাসম্ভব পরিস্খার ধারণা পেতে পারেন। 
                    </small>
                   : <small>
                    নিজের শখ-স্বপ্ন, স্বভাব-চরিত্র,পছন্দ-অপছন্দ, ইত্যাদি সম্পর্কে বিস্তারিত লিখুন, যেনো পাত্রপক্ষ আপনার সম্পর্কে যথাসম্ভব পরিস্খার ধারণা পেতে পারেন। 
                    </small>}
                    </div>
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
