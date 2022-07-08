import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import pdivisionsData, { ageData, bgData, colorData, heightData, weightData } from './Data'
import { cdivisionsData } from './Data'
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'

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
  [theme.breakpoints.down("md")]:{
    minHeight: "70px",
}
},

labelRoot: {
  fontSize: 15,
  color: "#000000",
  "&$labelFocused": {
    color: "purple"
  },
  marginRight:'18px',
  marginBottom:'50px'

},
labelFocused: {}

   
   

 
}));




const EditProfile = () => {
   const classes = useStyles();
    const initState = {
        fullname: '',gender:'',status:'',pdivision:"",pdistrict:"", pupazila:"", cdivision:"",cdistrict:"",cupazila:"",age:"",color:"",
        height:"",weight:"",bg:"",prof:"",detProf:"",income:"",disease:"",
    }
    const [userData, setUserData] = useState(initState)
    const { fullname,gender,status,pdivision,pdistrict,pupazila,cdivision,cdistrict,cupazila,age ,color,
      height ,weight ,bg ,prof, detProf, income,disease, } = userData
    
    const [approval, setApproval] = useState('')
    const  handleApproval = () => {
      setApproval ('no')
    }
    

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])
    
    
    
    const ages = ageData.map((name) => (
      <option
        key={name}
        value={name}
        className="pl-3"
      >
        {name}
      </option>
    ))
    const colors = colorData.map((name) => (
      <option
        key={name}
        value={name}
        className="pl-3"
      >
        {name}
      </option>
    ))
    const heights = heightData.map((name) => (
      <option
        key={name}
        value={name}
        className="pl-3"
      >
        {name}
      </option>
    ))
    const weights = weightData.map((name) => (
      <option
        key={name}
        value={name}
        className="pl-3"
      >
        {name}
      </option>
    ))
    const bgs = bgData.map((name) => (
      <option
        key={name}
        value={name}
        className="pl-3"
      >
        {name}
      </option>
    ))

    

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData,approval, auth}))
    }

    return (
        <div>
            

            <form onSubmit={handleSubmit}>
                 
                
              
                <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                   
                     label="পূর্ণ নাম"
                     id="fullname"
                     name="fullname"
                     value={fullname}
                     onChange={handleInput}
                     
                    />
                   
                    <div className={classes.textfield}>
                    
                    <small>
                    আপনার নাম গোপন থাকবে। আপনি ও ওয়েবসাইট কর্তৃপক্ষ বাদে আপনার নাম কেউ দেখতে পাবে না। 
                    </small>
                    </div>
                    </Grid>
                </div>
            
               
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বায়োডাটার ধরন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 variant="outlined"
                 select
                 id="gender"
                 name="gender"
                 value={gender}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বায়োডাটার ধরন</option>
                   <option value ="পাত্রের বায়োডাটা">পাত্রের বায়োডাটা</option>
                   <option value ="পাত্রীর বায়োডাটা">পাত্রীর বায়োডাটা</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   
                  <h6>বৈবাহিক অবস্থা  *</h6>
                  <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                 
                 required
                 className='formSelect'
                 variant="outlined"
                 label="বৈবাহিক অবস্থা"
                 select
                 id="status"
                 name="status"
                 value={status}
                 onChange={handleInput}
                 >  
                    <option className='text-muted' value="" disabled selected>বৈবাহিক অবস্থা</option>
                    <option value ="অবিবাহিত" className="pl-4">অবিবাহিত</option>
                   <option value ="ডিভোর্সড" className="pl-4">ডিভোর্সড</option>
                   <option value ="বিধবা" className="pl-4">বিধবা</option>
                   <option value ="বিপত্নীক" className="pl-4">বিপত্নীক</option>
                   <option value ="বিবাহিত" className="pl-4">বিবাহিত</option>
                   
                   
          
                 </select>
                 </Grid>
                 </div>
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বয়স *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="age"
                 name="age"
                 value={age}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বয়স</option>
                   {ages}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বর্ণ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="color"
                 name="color"
                 value={color}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্ণ</option>
                   {colors}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>উচ্চতা *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="height"
                 name="height"
                 value={height}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>উচ্চতা</option>
                   {heights}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>ওজন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="weight"
                 name="weight"
                 value={weight}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>ওজন</option>
                   {weights}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>রক্তের গ্রুপ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="bg"
                 name="bg"
                 value={bg}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>রক্তের গ্রুপ</option>
                   {bgs}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>
                 
                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                  
                 variant="outlined"
                 label="আপনার শারীরিক বা মানসিক বড় কোনো রোগ আছে?"
                 InputProps={{ classes: { root: classes.inputRoot } }}
                 InputLabelProps={{
                 classes: {
                 root: classes.labelRoot,
                 focused: classes.labelFocused
          }
        }}
                 id="disease"
                 name="disease"
                 value={disease}
                 onChange={handleInput}
                 >
                
          
          
                 </TextField>
                 </Grid>
              
                  </div>

            
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>পেশা *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="prof"
                 name="prof"
                 value={prof}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>পেশা</option>
                   {gender==='পাত্রের বায়োডাটা'? <option value="ইমাম">ইমাম</option> :null}
                
                 {gender==='পাত্রের বায়োডাটা'? <option value="মুয়াজ্জিন">মুয়াজ্জিন</option>: null}
                 {gender==='পাত্রের বায়োডাটা'?<option value="খতিব">খতিব</option> : null}
                 {gender==='পাত্রের বায়োডাটা'?<option value="ছাত্র">ছাত্র</option> :<option value="ছাত্রী">ছাত্রী</option>}
                 
                 <option value="ফ্রিল্যান্সার">ফ্রিল্যান্সার</option>
                 <option value="প্রবাসী">প্রবাসী</option>
                 {gender==='পাত্রের বায়োডাটা'?<option value="শিক্ষক">শিক্ষক</option> :<option value="শিক্ষিকা">শিক্ষিকা</option>}
                 {gender==='পাত্রের বায়োডাটা'? <option value="মাদরাসার শিক্ষক">মাদরাসার শিক্ষক</option> :<option value="মাদরাসার শিক্ষিকা">মাদরাসার শিক্ষিকা</option>} 
                 <option value="বিসিএস ক্যাডার">বিসিএস ক্যাডার</option>
                 {gender==='পাত্রের বায়োডাটা'? <option value="বিশ্ববিদ্যালয়ের শিক্ষক">বিশ্ববিদ্যালয়ের শিক্ষক</option> :<option value="বিশ্ববিদ্যালয়ের শিক্ষিকা">বিশ্ববিদ্যালয়ের শিক্ষিকা</option>} 
                 <option value="ডাক্তার">ডাক্তার</option>
                 <option value="ইঞ্জিনিয়ার">ইঞ্জিনিয়ার</option>
                 <option value="ব্যবসায়ী">ব্যবসায়ী</option>
                 <option value="কৃষক">কৃষক</option>
                 <option value="সরকারি চাকরিজীবী">সরকারি চাকরিজীবী</option>
                 <option value="বেসরকারি চাকরিজীবী">বেসরকারি চাকরিজীবী</option>
                 <option value="কিছু করছি না।">কিছু করছি না।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>

                  {prof==="ছাত্রী"? null : 
                  <div className="custom-form mt-4 mr-3 ml-1">
                  <h6> পেশা সম্পর্কিত তথ্য *</h6>
                   <Grid container>
                     <textarea
                    
                     rows="8"
                      required
                    
                      className='textArea'
                     
                    
                     
        
                      id="detProf"
                      name="detProf"
                      value={detProf}
                      onChange={handleInput}
                      
                     />
                   
                     </Grid>
                     {gender==="পাত্রের বায়োডাটা"? <div className={classes.textfield}>
                    
                    {gender === "পাত্রের বায়োডাটা"?<small>
                     এ-অংশটি খুব গুরুত্বপূর্ণ। এখানে আপনার পেশা সম্পর্কে বিস্তারিত লিখুন। ছাত্র হলে স্ত্রীর ভরণ-পোষণ, খোরপোষ কীভাবে বহন করবেন সে-সম্পর্কে লিখুন।
                     </small>
                     : null}
                     </div> :null}
                 </div>
                
               }
                 {prof==="ছাত্রী"? null :<div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="মাসিক আয়"
                     id="income"
                     name="income"
                     value={income}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                    <div className={classes.textfield}>
                    
                   <small>
                     জানাতে না চাইলে ঘরটি ফাঁকা রাখতে পারেন।
                    </small>
                    </div>
                </div>}
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
