import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Grid, makeStyles, TextField , InputLabel, FormControl} from '@material-ui/core'
import { yearData } from './Data'

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
        eduMedium: '', 
        hifz: '',hifzYear:'',hifzMadrasa:'', 
        takmil: '',takmilYear:'',takmilMadrasa:'',takmilResult:'',takmilJamat:'',
        takhassus:'',takhassusSubject:'',takhassusMadrasa:'',
        takhassusYear:'',takhassusResult:'',story:'' ,
    
        aliaHifz:'',aliaHifzYear:'',aliaHifzMadrasa:'',dakhil:'',dakhilResult:'',
        dakhilGroup:'',dakhilYear:'',dakhilJamat:'',
        alim:'',alimResult:'',alimGroup:'',alimYear:'',alimJamat:'',
        fazil:'',fazilMadrasa:'',
        fazilYear:'',fazilJamat:'',kamil:'',kamilMadrasa:'',kamilYear:'',kamilSubject:'',
        kamilJamat:'',
    
        ssc:'',sscResult:'',
        sscGroup:'',sscYear:'',sscJamat:'',
        hsc:'',hscResult:'',hscGroup:'',hscYear:'',hscJamat:'',
        diplomaSubject:'',diplomaMadrasa:'',diplomaYear:'',diplomaRunJamat:'',
        diplomaBsc:'',diplomaBscSubject:'',diplomaBscMadrasa:'',diplomaBscYear:'',diplomaBscJamat:'',
        honors:'',honorsMadrasa:'',honorsSubject:'',
        honorsYear:'',honorsJamat:'',masters:'',mastersMadrasa:'',mastersYear:'',mastersSubject:'',
        mastersJamat:'',
    
    }
    const [userData, setUserData] = useState(initState)
    const {  eduMedium,
        hifz,hifzYear,hifzMadrasa, 
        takmil,takmilYear,takmilMadrasa,takmilResult,takmilJamat,
        takhassus,takhassusSubject,takhassusMadrasa,takhassusYear,
        takhassusResult,story,
    
        aliaHifz,aliaHifzYear,aliaHifzMadrasa, dakhil,dakhilResult,dakhilGroup,
        dakhilYear,dakhilJamat,
        alim,alimResult,alimGroup,alimYear,alimJamat,
        fazil,fazilMadrasa,fazilYear,fazilJamat,kamil,
        kamilMadrasa,kamilYear,kamilSubject,kamilJamat,
    
        ssc,sscResult,sscGroup,
        sscYear,sscJamat,
        hsc,hscResult,hscGroup,hscYear,hscJamat,
        diplomaSubject,diplomaMadrasa,diplomaYear,diplomaRunJamat,
        diplomaBsc,diplomaBscSubject,diplomaBscMadrasa,diplomaBscYear,diplomaBscJamat,
        honors,honorsMadrasa,honorsYear,honorsJamat,honorsSubject,masters,
        mastersMadrasa,mastersYear,mastersSubject,mastersJamat,
    } = userData

    const [approval, setApproval] = useState('')
    const  handleApproval = () => {
      setApproval ('no')
    }

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])
    
    
    
    const years = yearData.map((name) => (
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
        dispatch(updateProfileUser({userData, approval, auth}))
    }
   
    return (
        <div className="edit_profile">
            

            <form onSubmit={handleSubmit}>
            <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কোন মাধ্যমে পড়াশোনা করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="eduMedium"
                 name="eduMedium"
                 value={eduMedium}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>পড়াশোনার মাধ্যম</option>
                   <option value="ক্বওমী মাদরাসা">ক্বওমী মাদরাসা</option>
                 <option value="আলিয়া মাদরাসা">আলিয়া মাদরাসা</option>
                 <option value="জেনারেল">জেনারেল</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                
           
               {eduMedium==="ক্বওমী মাদরাসা"? 
               
               
               
               <div>

                 <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি পূর্ণ হাফেয? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hifz"
                 name="hifz"
                 value={hifz}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>হিফযুল কোরআন</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                   <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>  

               {hifz==="হ্যাঁ"? <div>
               <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কতো সালে হিফয সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hifzYear"
                 name="hifzYear"
                 value={hifzYear}
                 onChange={handleInput} 
                 >
                   <option className='text-muted' value="" disabled selected>হিফযের সাল</option>
                   {years}
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="কোন মাদরাসা থেকে হিফয সম্পন্ন করেছেন?"
                     id="hifzMadrasa"
                     name="hifzMadrasa"
                     value={hifzMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
              
                   </div>
                  :null}
                   <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি তাকমিল পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takmil"
                 name="takmil"
                 value={takmil}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাকমিল</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                   <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
         

               
               {takmil==="হ্যাঁ"? <div>
               <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কতো সালে তাকমিল পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takmilYear"
                 name="takmilYear"
                 value={takmilYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাকমিল পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>

         
               
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="কোন মাদরাসা থেকে তাকমিল পাশ করেছেন?"
                     id="takmilMadrasa"
                     name="takmilMadrasa"
                     value={takmilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>তাকমিলের ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takmilResult"
                 name="takmilResult"
                 value={takmilResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাকমিলের ফলাফল</option>
                   <option value = "মুমতায (স্টার মার্ক)">মুমতায (স্টার মার্ক)</option>
                       <option value = "জায়্যিদ জিদ্দান (প্রথম বিভাগ)">জায়্যিদ জিদ্দান (প্রথম বিভাগ)</option>
                       <option value = "জায়্যিদ (দ্বিতীয় বিভাগ)">জায়্যিদ (দ্বিতীয় বিভাগ)</option>
                       <option value = "মাকবুল (তৃতীয় বিভাগ)">মাকবুল (তৃতীয় বিভাগ)</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি তাখাস্সুস সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takhassus"
                 name="takhassus"
                 value={takhassus}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাখাস্সুস</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
           

              {takhassus==="হ্যাঁ"? <div>
              <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     
                     label="তাখাসসুসের বিষয়"
                     id="takhassusSubject"
                     name="takhassusSubject"
                     value={takhassusSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কতো সালে তাখাস্সুস সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takhassusYear"
                 name="takhassusYear"
                 value={takhassusYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাখাস্সুস পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
      
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="কোন মাদরাসা থেকে তাখাস্সুস সম্পন্ন করেছেন?"
                     id="takhassusMadrasa"
                     name="takhassusMadrasa"
                     value={takhassusMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>তাখাস্সুসের ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="takhassusResult"
                 name="takhassusResult"
                 value={takhassusResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>তাখাস্সুসের ফলাফল</option>
                   <option value = "মুমতায (স্টার মার্ক)">মুমতায (স্টার মার্ক)</option>
                       <option value = "জায়্যিদ জিদ্দান (প্রথম বিভাগ)">জায়্যিদ জিদ্দান (প্রথম বিভাগ)</option>
                       <option value = "জায়্যিদ (দ্বিতীয় বিভাগ)">জায়্যিদ (দ্বিতীয় বিভাগ)</option>
                       <option value = "মাকবুল (তৃতীয় বিভাগ)">মাকবুল (তৃতীয় বিভাগ)</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
               

               </div>
               : 
               <div className="custom-form mt-4 mr-3 ml-1">
               <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
                <Grid container>
                  <textarea
                 
                  rows="8"
                   required
                 
                   className='textArea'
                  
                 
                  
     
                   id="story"
                   name="story"
                   value={story}
                   onChange={handleInput}
                   
                  />
                
                  </Grid>
                  <div  className={classes.textfield}>
                     
                     <small>
                     উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                     </small>
                     </div>
                 
              </div>
               
               
               }
                </div>
                 : takmil==="না"?
                <div>
                     <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="কোন বর্ষ (জামাত) পর্যন্ত পড়েছেন?"
                     id="takmilJamat"
                     name="takmilJamat"
                     value={takmilJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
     
                   
                </div>
                 
                <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
               </div>
                :null
               }
              
              </div>
           
            
             
             
             
              : eduMedium==="আলিয়া মাদরাসা"? 
              

              <div>
                 <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি পূর্ণ হাফেয? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="aliaHifz"
                 name="aliaHifz"
                 value={aliaHifz}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>হিফযুল কোরআন</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                   <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>  
                

                {aliaHifz==="হ্যাঁ"? <div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কতো সালে হিফয সম্পন্ন করেছেন?শ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="aliaHifzYear"
                 name="aliaHifzYear"
                 value={aliaHifzYear}
                 onChange={handleInput} 
                 >
                   <option className='text-muted' value="" disabled selected>হিফযের সাল</option>
                   {years}
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
             
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     
                     label="মাদরাসার নাম"
                     id="aliaHifzMadrasa"
                     name="aliaHifzMadrasa"
                     value={aliaHifzMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                
                    </div>
                   :null}
                      <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি দাখিল পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="dakhil"
                 name="dakhil"
                 value={dakhil}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>দাখিল</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
                {dakhil==="হ্যাঁ"? <div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>দাখিলের ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="dakhilResult"
                 name="dakhilResult"
                 value={dakhilResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>দাখিলের ফলাফল</option>
                   <option value = "Golden A+">Golden A+</option>
                       <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>দাখিলের বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="dakhilGroup"
                 name="dakhilGroup"
                 value={dakhilGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>দাখিলের বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>দাখিল পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="dakhilYear"
                 name="dakhilYear"
                 value={dakhilYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>দাখিল পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি আলিম পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alim"
                 name="alim"
                 value={alim}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>আলিম</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                <option value="আলিম পড়ছি, এখনো শেষ হয়নি।">আলিম পড়ছি, এখনো শেষ হয়নি।</option>
                <option value="দাখিলের পর আর পড়িনি।">দাখিলের পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
               
               {alim==="হ্যাঁ"? <div>
               <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আলিমের ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alimResult"
                 name="alimResult"
                 value={alimResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>আলিমের ফলাফল</option>
                   <option value = "Golden A+">Golden A+</option>
                      <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আলিমের বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alimGroup"
                 name="alimGroup"
                 value={alimGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>আলিমের বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আলিম পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alimYear"
                 name="alimYear"
                 value={alimYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>আলিম পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি ফাযিল পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="fazil"
                 name="fazil"
                 value={fazil}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>ফাযিল</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="ফাযিল পড়ছি, এখনো শেষ হয়নি।">ফাযিল পড়ছি, এখনো শেষ হয়নি।</option>
                 <option value="আলিমের পর আর পড়িনি।">আলিমের পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
           
                  
              {fazil==="হ্যাঁ"?
              <div>
                   <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="fazilMadrasa"
                     name="fazilMadrasa"
                     value={fazilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>ফাযিল পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="fazilYear"
                 name="fazilYear"
                 value={fazilYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>ফাযিল পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি কামিল পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="kamil"
                 name="kamil"
                 value={kamil}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>কামিল</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="কামিল পড়ছি, এখনো শেষ হয়নি।">কামিল পড়ছি, এখনো শেষ হয়নি।</option>
                 <option value="ফাযিলের পর আর পড়িনি।">ফাযিলের পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
             
              
                {kamil==="হ্যাঁ"? 
                <div>
                    <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="kamilMadrasa"
                     name="kamilMadrasa"
                     value={kamilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কামিল পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="kamilYear"
                 name="kamilYear"
                 value={kamilYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>কামিল পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="কামিলের বিষয়"
                     id="kamilSubject"
                     name="kamilSubject"
                     value={kamilSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
              
                
              </div>:
              
              kamil==="কামিল পড়ছি, এখনো শেষ হয়নি।"? <div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন বর্ষে পড়ছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="kamilJamat"
                 name="kamilJamat"
                 value={kamilJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্ষ</option>
                   <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="kamilMadrasa"
                     name="kamilMadrasa"
                     value={kamilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
               
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="কামিলের বিষয়"
                     id="kamilSubject"
                     name="kamilSubject"
                     value={kamilSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                
                
                
              </div>:null
                }
              </div>:fazil==="ফাযিল পড়ছি, এখনো শেষ হয়নি।"? <div>
              <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন বর্ষে পড়ছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="fazilJamat"
                 name="fazilJamat"
                 value={fazilJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্ষ</option>
                   <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                 <option value = "তৃতীয় বর্ষ">তৃতীয় বর্ষ</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
                 <div className="form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="fazilMadrasa"
                     name="fazilMadrasa"
                     value={fazilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
               
                
              </div>:null}



              <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
                </div>
                :alim==="আলিম পড়ছি, এখনো শেষ হয়নি।"? 
                <div>
                    <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন বর্ষে পড়ছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alimJamat"
                 name="alimJamat"
                 value={alimJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্ষ</option>
                   <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                 
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আলিমের বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="alimGroup"
                 name="alimGroup"
                 value={alimGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>আলিমের বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>

                </div>:
                alim==="দাখিলের পর আর পড়িনি।"?
                <div>
                    
                    <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
                </div>:null 
                
                
                }
                 </div>
                  : dakhil==="না"?
                 <div>
                    <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন শ্রেণী পর্যন্ত পড়েছেন? *</h6> 
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="dakhilJamat"
                 name="dakhilJamat"
                 value={dakhilJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>শ্রেণী</option>
                   <option value="১০ম">১০ম</option>
                        <option value="৯ম">৯ম</option>
                        <option value="৮ম">৮ম</option>
                        <option value="৭ম">৭ম</option>
                        <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                        <option value="৫ম">৫ম</option>
                        <option value="৪র্থ">৪র্থ </option>
                        <option value="৩য়">৩য়</option>
                        <option value="২য়">২য়</option>
                        <option value="১ম">১ম</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                 
                
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
                </div>
                 :null
                }
               
               </div>
                       
                
                : eduMedium==="জেনারেল"? 
                <div>
                    <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি এসএসসি পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="ssc"
                 name="ssc"
                 value={ssc}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এসএসসি</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
             {ssc==="হ্যাঁ"? <div>
             <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এসএসসির ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="sscResult"
                 name="sscResult"
                 value={sscResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এসএসসির ফলাফল</option>
                   <option value = "Golden A+">Golden A+</option>
                       <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এসএসসির বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="sscGroup"
                 name="sscGroup"
                 value={sscGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এসএসসির বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                        <option value ="কারিগরি">কারিগরি</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এসএসসি পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="sscYear"
                 name="sscYear"
                 value={sscYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এসএসসি পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি এইচএসসি পাশ করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hsc"
                 name="hsc"
                 value={hsc}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এইচএসসি</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="এইচএসসি পড়ছি, এখনো শেষ হয়নি।">এইচএসসি পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।">ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।</option> 
                     <option value="ডিপ্লোমা সম্পন্ন করেছি।">ডিপ্লোমা সম্পন্ন করেছি।</option>
                     <option value="এসএসসির পর আর পড়িনি।">এসএসসির পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
               

            {hsc==="হ্যাঁ"? <div>
            <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এইচএসসির ফলাফল *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hscResult"
                 name="hscResult"
                 value={hscResult}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এইচএসসির ফলাফল</option>
                   <option value = "Golden A+">Golden A+</option>
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
        
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এইচএসসির বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hscGroup"
                 name="hscGroup"
                 value={hscGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এইচএসসির বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                        <option value ="কারিগরি">কারিগরি</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এইচএসসি পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hscYear"
                 name="hscYear"
                 value={hscYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এইচএসসি পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি অনার্স সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="honors"
                 name="honors"
                 value={honors}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>অনার্স</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="অনার্স পড়ছি, এখনো শেষ হয়নি।">অনার্স পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিগ্রী পড়ছি, এখনো শেষ হয়নি।">ডিগ্রী পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিগ্রী সম্পন্ন করেছি।">ডিগ্রী সম্পন্ন করেছি।</option>
                     <option value="না, এইচএসসির পর আর পড়িনি।">না, এইচএসসির পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
             
       
           {honors==="হ্যাঁ"?
           <div>
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="অনার্সের বিষয়"
                     id="honorsSubject"
                     name="honorsSubject"
                     value={honorsSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
          
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="honorsMadrasa"
                     name="honorsMadrasa"
                     value={honorsMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>অনার্স পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="honorsYear"
                 name="honorsYear"
                 value={honorsYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>অনার্স পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি মাস্টার্স সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="masters"
                 name="masters"
                 value={masters}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>মাস্টার্স</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="পড়ছি, এখনো শেষ হয়নি।">পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="না, অনার্সের পর আর পড়িনি।">না, অনার্সের পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
               
             {masters==="হ্যাঁ"? 
             <div>

              
                  <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="মাস্টার্সের বিষয়"
                     id="mastersSubject"
                     name="mastersSubject"
                     value={mastersSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="mastersMadrasa"
                     name="mastersMadrasa"
                     value={mastersMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>মাস্টার্স পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="mastersYear"
                 name="mastersYear"
                 value={mastersYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>মাস্টার্স পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
             
             
           </div>:
           
           masters==="পড়ছি, এখনো শেষ হয়নি।"? <div>
             
          
                 <div className="form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="মাস্টার্সের বিষয়"
                     id="mastersSubject"
                     name="mastersSubject"
                     value={mastersSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                 <div className="form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="mastersJamat"
                     name="mastersJamat"
                     value={mastersJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="mastersMadrasa"
                     name="mastersMadrasa"
                     value={mastersMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
             
           </div>:null
             } 
           </div>:honors==="অনার্স পড়ছি, এখনো শেষ হয়নি।"? <div>
           <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="অনার্সের বিষয়"
                     id="honorsSubject"
                     name="honorsSubject"
                     value={honorsSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="honorsJamat"
                     name="honorsJamat"
                     value={honorsJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="honorsMadrasa"
                     name="honorsMadrasa"
                     value={honorsMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
           
             
             
           </div>: honors==="ডিগ্রী সম্পন্ন করেছি।"? 
           <div>
            
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="honorsMadrasa"
                     name="honorsMadrasa"
                     value={honorsMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>ডিগ্রী পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="honorsYear"
                 name="honorsYear"
                 value={honorsYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>ডিগ্রী পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি মাস্টার্স সম্পন্ন করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="masters"
                 name="masters"
                 value={masters}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>মাস্টার্স</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="পড়ছি, এখনো শেষ হয়নি।">পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="না, ডিগ্রীর পর আর পড়িনি।">না, ডিগ্রীর পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
            
             
             {masters==="হ্যাঁ"? 
             <div>
             <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="মাস্টার্সের বিষয়"
                     id="mastersSubject"
                     name="mastersSubject"
                     value={mastersSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="mastersMadrasa"
                     name="mastersMadrasa"
                     value={mastersMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>মাস্টার্স পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="mastersYear"
                 name="mastersYear"
                 value={mastersYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>মাস্টার্স পাসের সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                    
                 
           </div>:
           
           masters==="পড়ছি, এখনো শেষ হয়নি।"? <div>
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="মাস্টার্সের বিষয়"
                     id="mastersSubject"
                     name="mastersSubject"
                     value={mastersSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                 <div className="form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="mastersJamat"
                     name="mastersJamat"
                     value={mastersJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="mastersMadrasa"
                     name="mastersMadrasa"
                     value={mastersMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           </div>:honors==="ডিগ্রী পড়ছি, এখনো শেষ হয়নি।"? 
           <div>
             
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="honorsJamat"
                     name="honorsJamat"
                     value={honorsJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="honorsMadrasa"
                     name="honorsMadrasa"
                     value={honorsMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           </div>:null
             
             
             }   
           </div>:null} 



             
           <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>


             </div>
             :hsc==="এইচএসসি পড়ছি, এখনো শেষ হয়নি।"? 
             <div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন বর্ষে পড়ছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hscJamat"
                 name="hscJamat"
                 value={hscJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্ষ</option>
                   <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>এইচএসসির বিভাগ *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="hscGroup"
                 name="hscGroup"
                 value={hscGroup}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>এইচএসসির বিভাগ</option>
                   <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
               
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>

             </div>
             : hsc==="ডিপ্লোমা সম্পন্ন করেছি।"? <div>
             
             <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
                     id="diplomaSubject"
                     name="diplomaSubject"
                     value={diplomaSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                   <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="diplomaMadrasa"
                     name="diplomaMadrasa"
                     value={diplomaMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>ডিপ্লোমা পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="diplomaYear"
                 name="diplomaYear"
                 value={diplomaYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনি কি বিএসসি করেছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="diplomaBsc"
                 name="diplomaBsc"
                 value={diplomaBsc}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বিএসসি</option>
                   <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="করছি, এখনো শেষ হয়নি।">করছি, এখনো শেষ হয়নি।</option>
                     <option value="না,ডিপ্লোমার পর আর পড়িনি।">না,ডিপ্লোমার পর আর পড়িনি।</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                
             {diplomaBsc==="হ্যাঁ"?
             <div>
                  <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="বিএসসি কোন বিষয়ে করেছেন?"
                     id="diplomaBscSubject"
                     name="diplomaBscSubject"
                     value={diplomaBscSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                  <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="diplomaBscMadrasa"
                     name="diplomaBscMadrasa"
                     value={diplomaBscMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বিএসসি পাসের সন *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="diplomaBscYear"
                 name="diplomaBscYear"
                 value={diplomaBscYear}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>সন</option>
                   {years}
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
              
             
             </div>: diplomaBsc==="করছি, এখনো শেষ হয়নি।"? 
             <div>
              <div className="form mt-4 mr-3 ml-1">
                   <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="বিএসসি কোন বিষয়ে করছেন?"
                     id="diplomaBscSubject"
                     name="diplomaBscSubject"
                     value={diplomaBscSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                  <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="diplomaBscMadrasa"
                     name="diplomaBscMadrasa"
                     value={diplomaBscMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                  <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="diplomaBscJamat"
                     name="diplomaBscJamat"
                     value={diplomaBscJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
            
             </div>:null}
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
             </div>: hsc==="ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।"? 
             <div>
              <div className="form mt-4 mr-3 ml-1">
                 <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="ডিপ্লোমা কোন বিষয়ে পড়ছেন?"
                     id="diplomaSubject"
                     name="diplomaSubject"
                     value={diplomaSubject}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
           
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="শিক্ষাপ্রতিষ্ঠানের নাম"
                     id="diplomaMadrasa"
                     name="diplomaMadrasa"
                     value={diplomaMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     variant="outlined"
                    
                     label="বর্ষ/সেমিস্টার"
                     id="diplomaRunJamat"
                     name="diplomaRunJamat"
                     value={diplomaRunJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
             
                <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
             
             </div>:hsc==="এসএসসির পর আর পড়িনি।"?
             <div>
               <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
             </div>
             :null
             
             }
              </div>
               : ssc==="না"? 
              <div>
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কোন শ্রেণী পর্যন্ত পড়েছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="sscJamat"
                 name="sscJamat"
                 value={sscJamat}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>শ্রেণী</option>
                   <option value="১০ম">১০ম</option>
                        <option value="৯ম">৯ম</option>
                        <option value="৮ম">৮ম</option>
                        <option value="৭ম">৭ম</option>
                        <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                        <option value="৫ম">৫ম</option>
                        <option value="৪র্থ">৪র্থ </option>
                        <option value="৩য়">৩য়</option>
                        <option value="২য়">২য়</option>
                        <option value="১ম">১ম</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  
            
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6>অন্যান্য শিক্ষাগত যোগ্যতা *</h6>
               <Grid container>
                 <textarea
                
                 rows="8"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="story"
                  name="story"
                  value={story}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div  className={classes.textfield}>
                    
                    <small>
                    উপরে জানাতে পারেননি এমন কোনো শিক্ষাগত যোগ্যতা থাকলে এখানে লিখতে পারেন। 
                    </small>
                    </div>
                
             </div>
             </div>
              :null
             }
            
            </div>
                
                :null } 
                 
                

                

                

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
