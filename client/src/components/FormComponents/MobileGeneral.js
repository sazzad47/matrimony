import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import pdivisionsData from './Data'
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
    
    
    

      const pdivisions = pdivisionsData.map((pdivision) => (
        <option className="pl-3" key={pdivision.pname} value={pdivision.pname}>
          {pdivision.pname}
        </option>
      ));
    
      const pdistricts = pdivisionsData.find(item => item.pname === pdivision)?.pdistricts.map((pdistrict) => (
        <option className="pl-3"  key={pdistrict.pdname} value={pdistrict.pdname}>
          {pdistrict.pdname}
        </option>
      ));

      const pupazilas =pdivisionsData.find(data => data.pname === pdivision)?.pdistricts.find(item => item.pdname === pdistrict)?.pupazilas.map((pupazila) => (
        <option className="pl-3" key={pupazila} value={pupazila}>
          {pupazila}
        </option>
      ))


    

      const cdivisions = cdivisionsData.map((cdivision) => (
        
        <option className="pl-3" key={cdivision.cname} value={cdivision.cname}>
          {cdivision.cname}
        </option>
      ));
    
      const cdistricts = cdivisionsData.find(item => item.cname === cdivision)?.cdistricts.map((cdistrict) => (
        <option className="pl-3"  key={cdistrict.cdname} value={cdistrict.cdname}>
          {cdistrict.cdname}
        </option>
      ));

      const cupazilas =cdivisionsData.find(data => data.cname === cdivision)?.cdistricts.find(item => item.cdname === cdistrict)?.cupazilas.map((cupazila) => (
        <option className="pl-3" key={cupazila} value={cupazila}>
          {cupazila}
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
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="বায়োডাটার ধরণ"
                 select
                 id="gender"
                 name="gender"
                 value={gender}
                 onChange={handleInput}
                 >
                   <option value ="পাত্রের বায়োডাটা" className="pl-4">পাত্রের বায়োডাটা</option>
                   <option value ="পাত্রীর বায়োডাটা" className="pl-4">পাত্রীর বায়োডাটা</option>
                   
          
                 </TextField>
                 </Grid>
              
                  </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="বৈবাহিক অবস্থা"
                 select
                 id="status"
                 name="status"
                 value={status}
                 onChange={handleInput}
                 >
                    <option value ="অবিবাহিত" className="pl-4">অবিবাহিত</option>
                   <option value ="ডিভোর্সড" className="pl-4">ডিভোর্সড</option>
                   <option value ="বিধবা" className="pl-4">বিধবা</option>
                   <option value ="বিপত্নীক" className="pl-4">বিপত্নীক</option>
                   <option value ="বিবাহিত" className="pl-4">বিবাহিত</option>
                   
                   
          
                 </TextField>
                 </Grid>
              
                  </div>
            
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="বয়স"
                 select
                 id="age"
                 name="age"
                 value={age}
                 onChange={handleInput}
                 >
                   <option value="১৮ বছর" className= "option-select pl-4">১৮ বছর</option>
                        <option value="১৯ বছর" className= "option-select pl-4">১৯ বছর </option>
                        <option value= "২০ বছর" className= "option-select pl-4">২০ বছর</option>
                        <option value= "২১ বছর" className= "option-select pl-4">২১ বছর</option>
                        <option value= "২২ বছর" className= "option-select pl-4">২২ বছর</option> 
                        <option value= "২৩ বছর" className= "option-select pl-4">২৩ বছর</option>
                        <option value= "২৪ বছর" className= "option-select pl-4">২৪ বছর</option> 
                        <option value= "২৫ বছর" className= "option-select pl-4">২৫ বছর</option>
                        <option value= "২৬ বছর" className= "option-select pl-4">২৬ বছর</option> 
                        <option value= "২৭ বছর" className= "option-select pl-4">২৭ বছর</option>
                        <option value= "২৮ বছর" className= "option-select pl-4">২৮ বছর</option> 
                        <option value= "২৯ বছর" className= "option-select pl-4">২৯ বছর</option>
                        <option value= "৩০ বছর" className= "option-select pl-4">৩০ বছর</option> 
                        <option value= "৩১ বছর" className= "option-select pl-4">৩১ বছর</option>
                        <option value= "৩২ বছর" className= "option-select pl-4">৩২ বছর</option> 
                        <option value= "৩৩ বছর" className= "option-select pl-4">৩৩ বছর</option>
                        <option value= "৩৪ বছর" className= "option-select pl-4">৩৪ বছর</option> 
                        <option value= "৩৫ বছর" className= "option-select pl-4">৩৫ বছর</option>
                        <option value= "৩৬ বছর" className= "option-select pl-4">৩৬ বছর</option> 
                        <option value= "৩৭ বছর" className= "option-select pl-4">৩৭ বছর</option>
                        <option value= "৩৮ বছর" className= "option-select pl-4">৩৮ বছর</option> 
                        <option value= "৩৯ বছর" className= "option-select pl-4">৩৯ বছর</option>
                        <option value= "৪০ বছর" className= "option-select pl-4">৪০ বছর</option> 
                        <option value= "৪১ বছর" className= "option-select pl-4">৪১ বছর</option>
                        <option value= "৪২ বছর" className= "option-select pl-4">৪২ বছর</option> 
                        <option value= "৪৩ বছর" className= "option-select pl-4">৪৩ বছর</option>
                        <option value= "৪৪ বছর" className= "option-select pl-4">৪৪ বছর</option> 
                        <option value= "৪৫ বছর" className= "option-select pl-4">৪৫ বছর</option>
                        <option value= "৪৬ বছর" className= "option-select pl-4">৪৬ বছর</option> 
                        <option value= "৪৭ বছর" className= "option-select pl-4">৪৭ বছর</option>
                        <option value= "৪৮ বছর" className= "option-select pl-4">৪৮ বছর</option> 
                        <option value= "৪৯ বছর" className= "option-select pl-4">৪৯ বছর</option>
                        <option value= "৫০ বছর" className= "option-select pl-4">৫০ বছর</option> 
                        <option value= "৫১ বছর" className= "option-select pl-4">৫১ বছর</option>
                        <option value= "৫২ বছর" className= "option-select pl-4">৫২ বছর</option> 
                        <option value= "৫৩ বছর" className= "option-select pl-4">৫৩ বছর</option>
                        <option value= "৫৪ বছর" className= "option-select pl-4">৫৪ বছর</option> 
                        <option value= "৫৫ বছর" className= "option-select pl-4">৫৫ বছর</option>
                        <option value= "৫৬ বছর" className= "option-select pl-4">৫৬ বছর</option> 
                        <option value= "৫৭ বছর" className= "option-select pl-4">৫৭ বছর</option>
                        <option value= "৫৮ বছর" className= "option-select pl-4">৫৮ বছর</option> 
                        <option value= "৫৯ বছর" className= "option-select pl-4">৫৯ বছর</option>
                        <option value= "৬০ বছর" className= "option-select pl-4">৬০ বছর</option> 
                        <option value= "৬১ বছর" className= "option-select pl-4">৬১ বছর</option>
                        <option value= "৬২ বছর" className= "option-select pl-4">৬২ বছর</option> 
                        <option value= "৬৩ বছর" className= "option-select pl-4">৬৩ বছর</option>
                        <option value= "৬৪ বছর" className= "option-select pl-4">৬৪ বছর</option> 
                        <option value= "৬৫ বছর" className= "option-select pl-4">৬৫ বছর</option>
                        <option value= "৬৬ বছর" className= "option-select pl-4">৬৬ বছর</option> 
                        <option value= "৬৭ বছর" className= "option-select pl-4">৬৭ বছর</option>
                        <option value= "৬৮ বছর" className= "option-select pl-4">৬৮ বছর</option> 
                        <option value= "৬৯ বছর" className= "option-select pl-4">৬৯ বছর</option>
                        <option value= "৭০ বছর" className= "option-select pl-4">৭০ বছর</option> 
                        <option value= "৭১ বছর" className= "option-select pl-4">৭১ বছর</option>
                        <option value= "৭২ বছর" className= "option-select pl-4">৭২ বছর</option> 
                        <option value= "৭৩ বছর" className= "option-select pl-4">৭৩ বছর</option>
                        <option value= "৭৪ বছর" className= "option-select pl-4">৭৪ বছর</option> 
                        <option value= "৭৫ বছর" className= "option-select pl-4">৭৫ বছর</option>
                        <option value= "৭৬ বছর" className= "option-select pl-4">৭৬ বছর</option> 
                        <option value= "৭৭ বছর" className= "option-select pl-4">৭৭ বছর</option>
                        <option value= "৭৮ বছর" className= "option-select pl-4">৭৮ বছর</option> 
                        <option value= "৭৯ বছর" className= "option-select pl-4">৭৯ বছর</option>
                        <option value= "৮০ বছর" className= "option-select pl-4">৮০ বছর</option> 
                   
          
                 </TextField>
                 </Grid>
              
                  </div>

              

                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="বর্ণ"
                 select
                 id="color"
                 name="color"
                 value={color}
                 onChange={handleInput}
                 >
                    <option value ="কালো" className="pl-4">কালো</option>
                   <option value ="শ্যামলা" className="pl-4">শ্যামলা</option>
                   <option value ="উজ্জ্বল শ্যামলা" className="pl-4">উজ্জ্বল শ্যামলা</option>
                   <option value ="ফর্সা" className="pl-4">ফর্সা </option>
                   <option value ="উজ্জ্বল ফর্সা" className="pl-4">উজ্জ্বল ফর্সা </option>
          
          
                 </TextField>
                 </Grid>
              
                  </div>
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="উচ্চতা"
                 select
                 id="height"
                 name="height"
                 value={height}
                 onChange={handleInput}
                 >
                   <option value = "৪ ফুট" className= "pl-4">৪ ফুট</option>
                    <option value = "৪ ফুট ১ ইঞ্চি" className= "pl-4">৪ ফুট ১ ইঞ্চি</option>
                    <option value = "৪ ফুট ২ ইঞ্চি" className= "pl-4">৪ ফুট ২ ইঞ্চি</option>
                    <option value = "৪ ফুট ৩ ইঞ্চি" className= "pl-4">৪ ফুট ৩ ইঞ্চি</option>
                    <option value = "৪ ফুট ৪ ইঞ্চি" className= "pl-4">৪ ফুট ৪ ইঞ্চি</option>
                    <option value = "৪ ফুট ৫ ইঞ্চি" className= "pl-4">৪ ফুট ৫ ইঞ্চি</option> 
                    <option value = "৪ ফুট ৬ ইঞ্চি" className= "pl-4">৪ ফুট ৬ ইঞ্চি</option>
                    <option value = "৪ ফুট ৭ ইঞ্চি" className= "pl-4">৪ ফুট ৭ ইঞ্চি</option>
                    <option value = "৪ ফুট ৮ ইঞ্চি" className= "pl-4">৪ ফুট ৮ ইঞ্চি</option>
                    <option value = "৪ ফুট ৯ ইঞ্চি" className= "pl-4">৪ ফুট ৯ ইঞ্চি</option>
                    <option value = "৪ ফুট ১০ ইঞ্চি" className= "pl-4">৪ ফুট ১০ ইঞ্চি</option> 
                    <option value = "৪ ফুট ১১ ইঞ্চি" className= "pl-4">৪ ফুট ১১ ইঞ্চি</option> 
                    <option value = "৪ ফুট ১২ ইঞ্চি" className= "pl-4">৪ ফুট ১২ ইঞ্চি</option> 
                    <option value = "৫ ফুট" className= "pl-4">৫ ফুট</option> 
                    <option value = "৫ ফুট ১ ইঞ্চি" className= "pl-4">৫ ফুট ১ ইঞ্চি</option>
                    <option value = "৫ ফুট ২ ইঞ্চি" className= "pl-4">৫ ফুট ২ ইঞ্চি</option>
                    <option value = "৫ ফুট ৩ ইঞ্চি" className= "pl-4">৫ ফুট ৩ ইঞ্চি</option>
                    <option value = "৫ ফুট ৪ ইঞ্চি" className= "pl-4">৫ ফুট ৪ ইঞ্চি</option>
                    <option value = "৫ ফুট ৫ ইঞ্চি" className= "pl-4">৫ ফুট ৫ ইঞ্চি</option> 
                    <option value = "৫ ফুট ৬ ইঞ্চি" className= "pl-4">৫ ফুট ৬ ইঞ্চি</option>
                    <option value = "৫ ফুট ৭ ইঞ্চি" className= "pl-4">৫ ফুট ৭ ইঞ্চি</option>
                    <option value = "৫ ফুট ৮ ইঞ্চি" className= "pl-4">৫ ফুট ৮ ইঞ্চি</option>
                    <option value = "৫ ফুট ৯ ইঞ্চি" className= "pl-4">৫ ফুট ৯ ইঞ্চি</option>
                    <option value = "৫ ফুট ১০ ইঞ্চি" className= "pl-4">৫ ফুট ১০ ইঞ্চি</option> 
                    <option value = "৫ ফুট ১১ ইঞ্চি" className= "pl-4">৫ ফুট ১১ ইঞ্চি</option> 
                    <option value = "৫ ফুট ১২ ইঞ্চি" className= "pl-4">৫ ফুট ১২ ইঞ্চি</option> 
                    <option value = "৬ ফুট" className= "pl-4">৬ ফুট</option> 
                    <option value = "৬ ফুট ১ ইঞ্চি" className= "pl-4">৬ ফুট ১ ইঞ্চি</option>
                    <option value = "৬ ফুট ২ ইঞ্চি" className= "pl-4">৬ ফুট ২ ইঞ্চি</option>
                    <option value = "৬ ফুট ৩ ইঞ্চি" className= "pl-4">৬ ফুট ৩ ইঞ্চি</option>
                    <option value = "৬ ফুট ৪ ইঞ্চি" className= "pl-4">৬ ফুট ৪ ইঞ্চি</option>
                    <option value = "৬ ফুট ৫ ইঞ্চি" className= "pl-4">৬ ফুট ৫ ইঞ্চি</option> 
                    <option value = "৬ ফুট ৬ ইঞ্চি" className= "pl-4">৬ ফুট ৬ ইঞ্চি</option>
                    <option value = "৬ ফুট ৭ ইঞ্চি" className= "pl-4">৬ ফুট ৭ ইঞ্চি</option>
                    <option value = "৬ ফুট ৮ ইঞ্চি" className= "pl-4">৬ ফুট ৮ ইঞ্চি</option>
                    <option value = "৬ ফুট ৯ ইঞ্চি" className= "pl-4">৬ ফুট ৯ ইঞ্চি</option>
                    <option value = "৬ ফুট ১০ ইঞ্চি" className= "pl-4">৬ ফুট ১০ ইঞ্চি</option> 
                    <option value = "৬ ফুট ১১ ইঞ্চি" className= "pl-4">৬ ফুট ১১ ইঞ্চি</option> 
                    <option value = "৬ ফুট ১২ ইঞ্চি" className= "pl-4">৬ ফুট ১২ ইঞ্চি</option> 
          
          
                 </TextField>
                 </Grid>
              
                  </div>
             
             
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="ওজন"
                 select
                 id="weight"
                 name="weight"
                 value={weight}
                 onChange={handleInput}
                 >
                     <option value ="৩০ কেজি">৩০ কেজি</option>
                  <option value ="৩১ কেজি">৩১ কেজি</option>
                  <option value ="৩২ কেজি">৩২ কেজি</option>
                  <option value ="৩৩ কেজি">৩৩ কেজি</option>
                  <option value ="৩৪ কেজি">৩৪ কেজি</option> 
                  <option value ="৩৫ কেজি">৩৫ কেজি</option>
                  <option value ="৩৬ কেজি">৩৬ কেজি</option>
                  <option value ="৩৭ কেজি">৩৭ কেজি</option>
                  <option value ="৩৮ কেজি">৩৮ কেজি</option>
                  <option value ="৩৯ কেজি">৩৯ কেজি</option> 
                  <option value ="৪০ কেজি">৪০ কেজি</option>
                  <option value ="৪১ কেজি">৪১ কেজি</option>
                  <option value ="৪২ কেজি">৪২ কেজি</option>
                  <option value ="৪৩ কেজি">৪৩ কেজি</option>
                  <option value ="৪৪ কেজি">৪৪ কেজি</option> 
                  <option value ="৪৫ কেজি">৪৫ কেজি</option>
                  <option value ="৪৬ কেজি">৪৬ কেজি</option>
                  <option value ="৪৭ কেজি">৪৭ কেজি</option>
                  <option value ="৪৮ কেজি">৪৮ কেজি</option>
                  <option value ="৪৯ কেজি">৪৯ কেজি</option> 
                  <option value ="৫০ কেজি">৫০ কেজি</option>
                  <option value ="৫১ কেজি">৫১ কেজি</option>
                  <option value ="৫২ কেজি">৫২ কেজি</option>
                  <option value ="৫৩ কেজি">৫৩ কেজি</option>
                  <option value ="৫৪ কেজি">৫৪ কেজি</option> 
                  <option value ="৫৫ কেজি">৫৫ কেজি</option>
                  <option value ="৫৬ কেজি">৫৬ কেজি</option>
                  <option value ="৫৭ কেজি">৫৭ কেজি</option>
                  <option value ="৫৮ কেজি">৫৮ কেজি</option>
                  <option value ="৫৯ কেজি">৫৯ কেজি</option> 
                  <option value ="৬০ কেজি">৬০ কেজি</option>
                  <option value ="৬১ কেজি">৬১ কেজি</option>
                  <option value ="৬২ কেজি">৬২ কেজি</option>
                  <option value ="৬৩ কেজি">৬৩ কেজি</option>
                  <option value ="৬৪ কেজি">৬৪ কেজি</option> 
                  <option value ="৬৫ কেজি">৬৫ কেজি</option>
                  <option value ="৬৬ কেজি">৬৬ কেজি</option>
                  <option value ="৬৭ কেজি">৬৭ কেজি</option>
                  <option value ="৬৮ কেজি">৬৮ কেজি</option>
                  <option value ="৬৯ কেজি">৬৯ কেজি</option> 
                  <option value ="৭০ কেজি">৭০ কেজি</option>
                  <option value ="৭১ কেজি">৭১ কেজি</option>
                  <option value ="৭২ কেজি">৭২ কেজি</option>
                  <option value ="৭৩ কেজি">৭৩ কেজি</option>
                  <option value ="৭৪ কেজি">৭৪ কেজি</option> 
                  <option value ="৭৫ কেজি">৭৫ কেজি</option>
                  <option value ="৭৬ কেজি">৭৬ কেজি</option>
                  <option value ="৭৭ কেজি">৭৭ কেজি</option>
                  <option value ="৭৮ কেজি">৭৮ কেজি</option>
                  <option value ="৭৯ কেজি">৭৯ কেজি</option> 
                  <option value ="৮০ কেজি">৮০ কেজি</option>
                  <option value ="৮১ কেজি">৮১ কেজি</option>
                  <option value ="৮২ কেজি">৮২ কেজি</option>
                  <option value ="৮৩ কেজি">৮৩ কেজি</option>
                  <option value ="৮৪ কেজি">৮৪ কেজি</option> 
                  <option value ="৮৫ কেজি">৮৫ কেজি</option>
                  <option value ="৮৬ কেজি">৮৬ কেজি</option>
                  <option value ="৮৭ কেজি">৮৭ কেজি</option>
                  <option value ="৮৮ কেজি">৮৮ কেজি</option>
                  <option value ="৮৯ কেজি">৮৯ কেজি</option> 
                  <option value ="৯০ কেজি">৯০ কেজি</option>
                  <option value ="৯১ কেজি">৯১ কেজি</option>
                  <option value ="৯২ কেজি">৯২ কেজি</option>
                  <option value ="৯৩ কেজি">৯৩ কেজি</option>
                  <option value ="৯৪ কেজি">৯৪ কেজি</option> 
                  <option value ="৯৫ কেজি">৯৫ কেজি</option>
                  <option value ="৯৬ কেজি">৯৬ কেজি</option>
                  <option value ="৯৭ কেজি">৯৭ কেজি</option>
                  <option value ="৯৮ কেজি">৯৮ কেজি</option>
                  <option value ="৯৯ কেজি">৯৯ কেজি</option> 
                  <option value ="১০০ কেজি">১০০ কেজি</option>
                  <option value ="১০১ কেজি">১০১ কেজি</option>
                  <option value ="১০২ কেজি">১০২ কেজি</option>
                  <option value ="১০৩ কেজি">১০৩ কেজি</option>
                  <option value ="১০৪ কেজি">১০৪ কেজি</option> 
                  <option value ="১০৫ কেজি">১০৫ কেজি</option>
                  <option value ="১০৬ কেজি">১০৬ কেজি</option>
                  <option value ="১০৭ কেজি">১০৭ কেজি</option>
                  <option value ="১০৮ কেজি">১০৮ কেজি</option>
                  <option value ="১০৯ কেজি">১০৯ কেজি</option> 
                  <option value ="১১০ কেজি">১১০ কেজি</option> 
                  <option value ="১১১ কেজি">১১১ কেজি</option> 
                  <option value ="১১২ কেজি">১১২ কেজি</option> 
                  <option value ="১১৩ কেজি">১১৩ কেজি</option> 
                  <option value ="১১৪ কেজি">১১৪ কেজি</option> 
                  <option value ="১১৫ কেজি">১১৫ কেজি</option> 
                  <option value ="১১৬ কেজি">১১৬ কেজি</option> 
                  <option value ="১১৭ কেজি">১১৭ কেজি</option> 
                  <option value ="১১৮ কেজি">১১৮ কেজি</option> 
                  <option value ="১১৯ কেজি">১১৯ কেজি</option> 
                  <option value ="১২০ কেজি">১২০ কেজি</option> 
          
          
                 </TextField>
                 </Grid>
              
                  </div>
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   
                
                   <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 className={classes.textfield}
                 variant="outlined"
                 label="রক্তের গ্রুপ"
                 select
                 id="bg"
                 name="bg"
                 value={bg}
                 onChange={handleInput}
                 >
                 <option value = "A+">A+</option>
                 <option value = "A-">A-</option>
                 <option value = "B+">B+</option>
                 <option value = "B-">B-</option>
                 <option value = "AB+">AB+</option>
                 <option value = "AB-">AB-</option>
                 <option value = "O+">O+</option>
                 <option value = "O-">O-</option>
                 <option value = "জানা নেই">জানা নেই</option>
          
          
                 </TextField>
                 </Grid>
              
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

            
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                  <TextField
                  label="পেশা"
                  select
                  required
                  fullWidth
                  className={classes.textfield}
                  variant="outlined"
                  id="prof"
                  name="prof"
                  value={prof}
                  onChange={handleInput} >
                 
                 <option value="ইমাম">ইমাম</option>
                 <option value="মুয়াজ্জিন">মুয়াজ্জিন</option>
                 <option value="খতিব">খতিব</option>
                 {gender==='পাত্রের বায়োডাটা'?<option value="ছাত্র">ছাত্র</option> :<option value="ছাত্রী">ছাত্রী</option>}
                 
                 <option value="ফ্রিল্যান্সার">ফ্রিল্যান্সার</option>
                 <option value="প্রবাসী">প্রবাসী</option>
                 {gender==='পাত্রের বায়োডাটা'?<option value="শিক্ষক">শিক্ষক</option> :<option value="শিক্ষিকা">শিক্ষিকা</option>}
                 <option value="ডাক্তার">ডাক্তার</option>
                 <option value="ইঞ্জিনিয়ার">ইঞ্জিনিয়ার</option>
                 <option value="ব্যবসায়ী">ব্যবসায়ী</option>
                 <option value="সরকারি চাকরিজীবী">সরকারি চাকরিজীবী</option>
                 <option value="বেসরকারি চাকরিজীবী">বেসরকারি চাকরিজীবী</option>
                 
                 
                
                </TextField>
                    </Grid>
                   
                </div>

                 {prof==="ছাত্রী"? null : <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     multiline
                     maxRows = "200"
                     label="পেশা সম্পর্কিত তথ্য"
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
                </div>}
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
