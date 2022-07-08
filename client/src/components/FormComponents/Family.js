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
        fatherN:'',motherN:'',fatherO:'',motherO:'',brother:'',
        sister:'',brotherInfo:'',sisterInfo:'',uncleInfo:'', familyStatus:'',
    }
    const [userData, setUserData] = useState(initState)
    const {fatherN,motherN,fatherO,motherO,brother,
        sister,brotherInfo,sisterInfo,uncleInfo,familyStatus  } = userData

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
        dispatch(updateProfileUser({userData,approval,  auth}))
    }

    return (
        <div className="edit_profile">
            

            <form onSubmit={handleSubmit}>
                

            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                  
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                    
                     label="পিতার নাম"
                     id="fatherN"
                     name="fatherN"
                     value={fatherN}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                    <div className={classes.textfield}>
                    
                    <small>
                    আপনার পিতার নাম আমরা গোপন রাখবো। আপনি ও ওয়েবসাইট কর্তৃপক্ষ বাদে আপনার পিতার নাম কেউ দেখতে পাবে না।
                    </small>
                    </div>
                    
                </div>
              
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                    
                     label="মাতার নাম"
                     id="motherN"
                     name="motherN"
                     value={motherN}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                    <div className={classes.textfield}>
                    
                    <small>
                    আপনার মাতার নাম আমরা গোপন রাখবো। আপনি ও ওয়েবসাইট কর্তৃপক্ষ বাদে আপনার মাতার নাম কেউ দেখতে পারবে না।
                    </small>
                    </div>
                    
                </div>
              
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                    
                     label="পিতার পেশা"
                     id="fatherO"
                     name="fatherO"
                     value={fatherO}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                  
                    
                </div>
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container >
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                    
                     label="মাতার পেশা"
                     id="motherO"
                     name="motherO"
                     value={motherO}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                  
                    
                </div>
              
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>ভাই ক'জন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="brother"
                 name="brother"
                 value={brother}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>ভাইয়ের সংখ্যা</option>
                   <option value = "ভাই নেই">ভাই নেই</option>
                        <option value = "১ জন">১ জন</option>
                        <option value = "২ জন">২ জন</option>
                        <option value = "৩ জন">৩ জন</option>
                        <option value = "৪ জন">৪ জন</option>
                        <option value = "৫ জন">৫ জন</option>
                        <option value = "৬ জন">৬ জন</option>
                        <option value = "৭ জন">৭ জন</option>
                        <option value = "৮ জন">৮ জন</option>
                        <option value = "৯ জন">৯ জন</option>
                        <option value = "১০ জন">১০ জন</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বোন ক'জন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="sister"
                 name="sister"
                 value={sister}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বোনের সংখ্যা</option>
                   <option value = "বোন নেই">বোন নেই</option>
                        <option value = "১ জন">১ জন</option>
                        <option value = "২ জন">২ জন</option>
                        <option value = "৩ জন">৩ জন</option>
                        <option value = "৪ জন">৪ জন</option>
                        <option value = "৫ জন">৫ জন</option>
                        <option value = "৬ জন">৬ জন</option>
                        <option value = "৭ জন">৭ জন</option>
                        <option value = "৮ জন">৮ জন</option>
                        <option value = "৯ জন">৯ জন</option>
                        <option value = "১০ জন">১০ জন</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              

                {brother==="ভাই নেই"? null
                : brother==="১ জন"?
                <div className="custom-form mt-4 mr-3 ml-1">
                    <h6> ভাই সম্পর্কে তথ্য *</h6>
                     <Grid container>
                       <textarea
                      
                       rows="4"
                        required
                      
                        className='textArea'
                       
                      
                       
          
                        id="brotherInfo"
                        name="brotherInfo"
                        value={brotherInfo}
                        onChange={handleInput}
                        
                       />
                     
                       </Grid>
                       <div className={classes.textfield}>
                      
                       <small>
                  আপনার ভাইয়ের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বর্তমান অবস্থান লিখুন।
                  </small>
                      </div>
                   </div>
               
                  
                    :
                    <div className="custom-form mt-4 mr-3 ml-1">
                    <h6> ভাইদের সম্পর্কে তথ্য *</h6>
                     <Grid container>
                       <textarea
                      
                       rows="4"
                        required
                      
                        className='textArea'
                       
                      
                       
          
                        id="brotherInfo"
                        name="brotherInfo"
                        value={brotherInfo}
                        onChange={handleInput}
                        
                       />
                     
                       </Grid>
                       <div className={classes.textfield}>
                      
                      <small>
                      সকল ভাইয়ের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বর্তমান অবস্থান লিখুন।
                      </small>
                      </div>
                   </div>
                   
                    
                }
                {sister==="বোন নেই"? null
                : sister==="১ জন"?
                <div className="custom-form mt-4 mr-3 ml-1">
                <h6> বোন সম্পর্কে তথ্য *</h6>
                 <Grid container>
                   <textarea
                  
                   rows="4"
                    required
                  
                    className='textArea'
                   
                  
                   
      
                    id="sisterInfo"
                    name="sisterInfo"
                    value={sisterInfo}
                    onChange={handleInput}
                    
                   />
                 
                   </Grid>
                   <div className={classes.textfield}>
                  
                   <small>
                  আপনার বোনের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বিবাহিত হলে স্বামীর পেশা লিখুন। 
                  </small>
                  </div>
               </div>
              
              
                :
                <div className="custom-form mt-4 mr-3 ml-1">
                <h6> বোনদের সম্পর্কে তথ্য *</h6>
                 <Grid container>
                   <textarea
                  
                   rows="4"
                    required
                  
                    className='textArea'
                   
                  
                   
      
                    id="sisterInfo"
                    name="sisterInfo"
                    value={sisterInfo}
                    onChange={handleInput}
                    
                   />
                 
                   </Grid>
                   <div className={classes.textfield}>
                  
                  <small>
                  সকল বোনের শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা, পেশা, বিবাহিত হলে স্বামীর পেশা লিখুন। 
                  </small>
                  </div>
               </div>
               
                
                }
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6> চাচা মামাদের সম্পর্কে তথ্য *</h6>
               <Grid container>
                 <textarea
                
                 rows="4"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="uncleInfo"
                  name="uncleInfo"
                  value={uncleInfo}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                  
                  <small>
                  জানাতে না চাইলে ঘরটি ফাঁকা রাখুন। 
                  </small>
                  </div>
             </div>
              
              <div className="custom-form mt-4 mr-3 ml-1">
              <h6> পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="familyStatus"
                  name="familyStatus"
                  value={familyStatus}
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
