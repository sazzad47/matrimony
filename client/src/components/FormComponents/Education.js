import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Button, Grid, makeStyles, TextField , InputLabel, FormControl} from '@material-ui/core'

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
                  select
                  label="আপনি কোন মাধ্যমে পড়াশোনা করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="eduMedium"
                  name="eduMedium"
                  value={eduMedium}
                  onChange={handleInput}
                  >
                 <option value="ক্বওমী মাদরাসা">ক্বওমী মাদরাসা</option>
                 <option value="আলিয়া মাদরাসা">আলিয়া মাদরাসা</option>
                 <option value="জেনারেল">জেনারেল</option>
                  </TextField>
                  
                   </Grid>
               
                    
                 </div>

           
                
               {eduMedium==="ক্বওমী মাদরাসা"? 
               
               
               
               <div>
                    <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  select
                  label="আপনি কি পূর্ণ হাফেয?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hifz"
                  name="hifz"
                  value={hifz}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                 
              

               {hifz==="হ্যাঁ"? <div>
               <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                   
                  <TextField
                  select
                  label="কতো সালে হিফয সম্পন্ন করেছেন?"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hifzYear"
                  name="hifzYear"
                  value={hifzYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
                   </Grid>
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
              <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                 
                   
                  <TextField
                  select
                  label="আপনি কি তাকমিল পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  id="takmil"
                  name="takmil"
                  value={takmil}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                
              
              

               
               {takmil==="হ্যাঁ"? <div>

               <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                
                   
                  <TextField
                  select
                  label="কতো সালে তাকমিল পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="takmilYear"
                  name="takmilYear"
                  value={takmilYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                
                   </Grid>
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
              
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="তাকমিলের ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="takmilResult"
                  name="takmilResult"
                  value={takmilResult}
                  onChange={handleInput}
                  >
                       <option value = "মুমতায (স্টার মার্ক)">মুমতায (স্টার মার্ক)</option>
                       <option value = "জায়্যিদ জিদ্দান (প্রথম বিভাগ)">জায়্যিদ জিদ্দান (প্রথম বিভাগ)</option>
                       <option value = "জায়্যিদ (দ্বিতীয় বিভাগ)">জায়্যিদ (দ্বিতীয় বিভাগ)</option>
                       <option value = "মাকবুল (তৃতীয় বিভাগ)">মাকবুল (তৃতীয় বিভাগ)</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="আপনি কি তাখাস্সুস সম্পন্ন করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="takhassus"
                  name="takhassus"
                  value={takhassus}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                  
                   </Grid>
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
               
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="কতো সালে তাখাস্সুস সম্পন্ন করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="takhassusYear"
                  name="takhassusYear"
                  value={takhassusYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
                   </Grid>
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
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                 
                   
                  <TextField
                  select
                  label="তাখাস্সুসের ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="takhassusResult"
                  name="takhassusResult"
                  value={takhassusResult}
                  onChange={handleInput}
                  >
                       <option value = "মুমতায (স্টার মার্ক)">মুমতায (স্টার মার্ক)</option>
                       <option value = "জায়্যিদ জিদ্দান (প্রথম বিভাগ)">জায়্যিদ জিদ্দান (প্রথম বিভাগ)</option>
                       <option value = "জায়্যিদ (দ্বিতীয় বিভাগ)">জায়্যিদ (দ্বিতীয় বিভাগ)</option>
                       <option value = "মাকবুল (তৃতীয় বিভাগ)">মাকবুল (তৃতীয় বিভাগ)</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                
              
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
               <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField                
                  fullWidth
                  multiline
                  maxRows = {200}
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                    
                     label="কোন বর্ষ পর্যন্ত পড়েছেন?"
                     id="takmilJamat"
                     name="takmilJamat"
                     value={takmilJamat}
                     onChange={handleInput}
                     
                    />
                    </Grid>
     
                   
                </div>
                 
               <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                   <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="আপনি কি পূর্ণ হাফেয?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="aliaHifz"
                  name="aliaHifz"
                  value={aliaHifz}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                 
             

                {aliaHifz==="হ্যাঁ"? <div>
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                    
                  <TextField
                  select
                  label="কতো সালে হিফয সম্পন্ন করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="aliaHifzYear"
                  name="aliaHifzYear"
                  value={aliaHifzYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
                   </Grid>
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
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                    
                  <TextField
                  select
                  label="আপনি কি দাখিল পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="dakhil"
                  name="dakhil"
                  value={dakhil}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                 
                


                
                {dakhil==="হ্যাঁ"? <div>
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="দাখিলের ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="dakhilResult"
                  name="dakhilResult"
                  value={dakhilResult}
                  onChange={handleInput}
                  >
                      <option value = "Golden A+">Golden A+</option>
                       <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                   
                  <TextField
                  select
                  label="দাখিলের বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="dakhilGroup"
                  name="dakhilGroup"
                  value={dakhilGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                 
                
                
               
            
                 
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="দাখিল পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="dakhilYear"
                  name="dakhilYear"
                  value={dakhilYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                   
                  <TextField
                  select
                  label="আপনি কি আলিম পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="alim"
                  name="alim"
                  value={alim}
                  onChange={handleInput}
                  >
                <option value="হ্যাঁ">হ্যাঁ</option>
                <option value="আলিম পড়ছি, এখনো শেষ হয়নি।">আলিম পড়ছি, এখনো শেষ হয়নি।</option>
                <option value="দাখিলের পর আর পড়িনি।">দাখিলের পর আর পড়িনি।</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
               
               
               

               {alim==="হ্যাঁ"? <div>
               <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  select
                  label="আলিমের ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="alimResult"
                  name="alimResult"
                  value={alimResult}
                  onChange={handleInput}
                  >
                      <option value = "Golden A+">Golden A+</option>
                      <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                
            
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="আলিমের বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="alimGroup"
                  name="alimGroup"
                  value={alimGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="আলিম পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="alimYear"
                  name="alimYear"
                  value={alimYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                 
                   
                  <TextField
                  select
                  label= "আপনি কি ফাযিল পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="fazil"
                  name="fazil"
                  value={fazil}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="ফাযিল পড়ছি, এখনো শেষ হয়নি।">ফাযিল পড়ছি, এখনো শেষ হয়নি।</option>
                 <option value="আলিমের পর আর পড়িনি।">আলিমের পর আর পড়িনি।</option>
                  </TextField>
                
                   </Grid>
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
              
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="ফাযিল পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="fazilYear"
                  name="fazilYear"
                  value={fazilYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
              
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  select
                  label="আপনি কি কামিল পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="kamil"
                  name="kamil"
                  value={kamil}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="কামিল পড়ছি, এখনো শেষ হয়নি।">কামিল পড়ছি, এখনো শেষ হয়নি।</option>
                 <option value="ফাযিলের পর আর পড়িনি।">ফাযিলের পর আর পড়িনি।</option>
                  </TextField>
                  
                   </Grid>
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
            
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  select
                  label="কামিল পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="kamilYear"
                  name="kamilYear"
                  value={kamilYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
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
              
                
              </div>:
              
              kamil==="কামিল পড়ছি, এখনো শেষ হয়নি।"? <div>
               <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                  
                  <TextField
                  select
                  label="কোন বর্ষে পড়ছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="kamilJamat"
                  name="kamilJamat"
                  value={kamilJamat}
                  onChange={handleInput}
                  >
                 <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                  </TextField>
                 
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
              <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  select
                  label="কোন বর্ষে পড়ছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="fazilJamat"
                  name="fazilJamat"
                  value={fazilJamat}
                  onChange={handleInput}
                  >
                 <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                 <option value = "তৃতীয় বর্ষ">তৃতীয় বর্ষ</option>
                  </TextField>
                 
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
                     id="fazilMadrasa"
                     name="fazilMadrasa"
                     value={fazilMadrasa}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                   
                </div>
               
                
              </div>:null}



              <div className="form mt-4 mr-3 ml-1">
                    <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                     <div className="custom-form mt-4 mr-3 ml-1">
                    
                     <Grid container>
                   
                  <TextField
                  select
                  label="কোন বর্ষে পড়ছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="alimJamat"
                  name="alimJamat"
                  value={alimJamat}
                  onChange={handleInput}
                  >
                 <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                    
                  <TextField
                  select
                  label="আলিমের বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="alimGroup"
                  name="alimGroup"
                  value={alimGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                
                
                 <div className="form mt-4 mr-3 ml-1">
                    <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                    
                    <div className="form mt-4 mr-3 ml-1">
                    <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                      <div className="custom-form mt-4 mr-3 ml-1">
                      <Grid container>
                  
                    
                  <TextField
                  select
                  label="কোন ক্লাস পর্যন্ত পড়েছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="dakhilJamat"
                  name="dakhilJamat"
                  value={dakhilJamat}
                  onChange={handleInput}
                  >
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
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                 
              
               
                
                
                 <div className="form mt-4 mr-3 ml-1">
                    <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
               <div className="custom-form mt-4 mr-3 ml-1">
                  <Grid container>
                
                   
                  <TextField
                  select
                  label="আপনি কি এসএসসি পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="ssc"
                  name="ssc"
                  value={ssc}
                  onChange={handleInput}
                  >
                 <option value="হ্যাঁ">হ্যাঁ</option>
                 <option value="না">না</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                
               

             
             {ssc==="হ্যাঁ"? <div>
             <div className="custom-form mt-4 mr-3 ml-1">
                    <Grid container>
                
                   
                  <TextField
                  select
                  label="এসএসসির ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="sscResult"
                  name="sscResult"
                  value={sscResult}
                  onChange={handleInput}
                  >
                      <option value = "Golden A+">Golden A+</option>
                       <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                  </TextField>
                
                   </Grid>
                 </div>
                    
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                  
                    
                  <TextField
                  select
                  label="এসএসসির বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="sscGroup"
                  name="sscGroup"
                  value={sscGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                        <option value ="কারিগরি">কারিগরি</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                
            
             
            
         
              
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                  
                  <TextField
                  select
                  label="এসএসসি পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="sscYear"
                  name="sscYear"
                  value={sscYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                 
              
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                   
                  <TextField
                  select
                  label="আপনি কি এইচএসসি পাশ করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="hsc"
                  name="hsc"
                  value={hsc}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="এইচএসসি পড়ছি, এখনো শেষ হয়নি।">এইচএসসি পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।">ডিপ্লোমা পড়ছি, এখনো শেষ হয়নি।</option> 
                     <option value="ডিপ্লোমা সম্পন্ন করেছি।">ডিপ্লোমা সম্পন্ন করেছি।</option>
                     <option value="এসএসসির পর আর পড়িনি।">এসএসসির পর আর পড়িনি।</option>
                  </TextField>
                 
                   </Grid>
                 </div>
                    
                 
               

         

            {hsc==="হ্যাঁ"? <div>
            <div className="custom-form mt-4 mr-3 ml-1">
                  <Grid container>
                  
                    
                  <TextField
                  select
                  label="এইচএসসির ফলাফল"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hscResult"
                  name="hscResult"
                  value={hscResult}
                  onChange={handleInput}
                  >
                      <option value = "Golden A+">Golden A+</option>
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "A-">A-</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                        <option value = "D">D</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                
           
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                   
                  <TextField
                  select
                  label="এইচএসসির বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hscGroup"
                  name="hscGroup"
                  value={hscGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                        <option value ="কারিগরি">কারিগরি</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                   
                  <TextField
                   select
                   label="এইচএসসি পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hscYear"
                  name="hscYear"
                  value={hscYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
               
                   </Grid>
                 </div>
                    
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                  
                    
                  <TextField
                  select
                  label="আপনি কি অনার্স সম্পন্ন করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  id="honors"
                  name="honors"
                  value={honors}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="অনার্স পড়ছি, এখনো শেষ হয়নি।">অনার্স পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিগ্রী পড়ছি, এখনো শেষ হয়নি।">ডিগ্রী পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="ডিগ্রী সম্পন্ন করেছি।">ডিগ্রী সম্পন্ন করেছি।</option>
                     <option value="না, এইচএসসির পর আর পড়িনি।">না, এইচএসসির পর আর পড়িনি।</option>
                  </TextField>
                 
                   </Grid>
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                   
                   
                  <TextField
                  select
                  label="অনার্স পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="honorsYear"
                  name="honorsYear"
                  value={honorsYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                  
                   </Grid>
                 </div>
                    
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                  
                    
                  <TextField
                   select
                   label="আপনি কি মাস্টার্স সম্পন্ন করেছেন?"
                   fullWidth
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="masters"
                  name="masters"
                  value={masters}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="পড়ছি, এখনো শেষ হয়নি।">পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="না, অনার্সের পর আর পড়িনি।">না, অনার্সের পর আর পড়িনি।</option>
                  </TextField>
                
                   </Grid>
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                  
                   
                  <TextField
                   select
                   label="মাস্টার্স পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="mastersYear"
                  name="mastersYear"
                  value={mastersYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                
                   </Grid>
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                   
                   
                  <TextField
                  select
                  label="ডিগ্রী পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="honorsYear"
                  name="honorsYear"
                  value={honorsYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
               
                   </Grid>
                 </div>
                    
                
           
           
            
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                  
                   
                  <TextField
                  select
                  label="আপনি কি মাস্টার্স সম্পন্ন করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="masters"
                  name="masters"
                  value={masters}
                  onChange={handleInput}
                  >
                     <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="পড়ছি, এখনো শেষ হয়নি।">পড়ছি, এখনো শেষ হয়নি।</option>
                     <option value="না, ডিগ্রীর পর আর পড়িনি।">না, ডিগ্রীর পর আর পড়িনি।</option>
                  </TextField>
                
                   </Grid>
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                  
                   
                  <TextField
                   select
                   label="মাস্টার্স পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="mastersYear"
                  name="mastersYear"
                  value={mastersYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
               
                   </Grid>
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



             
           <div className="form mt-4 mr-3 ml-1">
                   <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                 
                   
                  <TextField
                   select
                   label="কোন বর্ষে পড়ছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hscJamat"
                  name="hscJamat"
                  value={hscJamat}
                  onChange={handleInput}
                  >
                 <option value ="প্রথম বর্ষ">প্রথম বর্ষ</option>
                 <option value ="দ্বিতীয় বর্ষ">দ্বিতীয় বর্ষ</option>
                  </TextField>
               
                   </Grid>
                 </div>
                    
                
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                   
                   
                  <TextField
                  select
                  label="এইচএসসির বিভাগ"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="hscGroup"
                  name="hscGroup"
                  value={hscGroup}
                  onChange={handleInput}
                  >
                      
                        <option value ="বিজ্ঞান">বিজ্ঞান</option>
                        <option value ="মানবিক">মানবিক</option>
                        <option value ="ব্যবসা">ব্যবসা</option>
                  </TextField>
               
                   </Grid>
                 </div>
                    
                
          
              
              
                 <div className="form mt-4 mr-3 ml-1">
                   <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                  
                  
                  <TextField
                   select
                   label="ডিপ্লোমা পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="diplomaYear"
                  name="diplomaYear"
                  value={diplomaYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
             
                   </Grid>
                 </div>
                    
                 
                 <div className="custom-form mt-4 mr-3 ml-1">
                 <Grid container>
                  
                  <TextField
                   select
                   label="আপনি কি বিএসসি করেছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="diplomaBsc"
                  name="diplomaBsc"
                  value={diplomaBsc}
                  onChange={handleInput}
                  >
                      
                      <option value="হ্যাঁ">হ্যাঁ</option>
                     <option value="করছি, এখনো শেষ হয়নি।">করছি, এখনো শেষ হয়নি।</option>
                     <option value="না,ডিপ্লোমার পর আর পড়িনি।">না,ডিপ্লোমার পর আর পড়িনি।</option>
                  </TextField>
                
                   </Grid>
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
           
                <div className="custom-form mt-4 mr-3 ml-1">
                <Grid container>
                   
                   
                  <TextField
                   select
                   label="বিএসসি পাসের সন"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                 
                  
                  id="diplomaBscYear"
                  name="diplomaBscYear"
                  value={diplomaBscYear}
                  onChange={handleInput}
                  >
                       <option value ="২০২৭">২০২৭</option>
                       <option value ="২০২৬">২০২৬</option>
                       <option value ="২০২৫">২০২৫</option>
                       <option value ="২০২৪">২০২৪</option>
                       <option value ="২০২৩">২০২৩</option>
                       <option value ="২০২২">২০২২</option>
                       <option value ="২০২১">২০২১</option>
                       <option value ="২০২০">২০২০</option>
                       <option value ="২০১৯">২০১৯</option>
                       <option value ="২০১৮">২০১৮</option>
                       <option value ="২০১৭">২০১৭</option>
                       <option value ="২০১৬">২০১৬</option>
                       <option value ="২০১৫">২০১৫</option>
                       <option value ="২০১৪">২০১৪</option>
                       <option value ="২০১৩">২০১৩</option>
                       <option value ="২০১২">২০১২</option>
                       <option value ="২০১১">২০১১</option>
                       <option value ="২০১০">২০১০</option>
                       <option value ="২০০৯">২০০৯</option>
                       <option value ="২০০৮">২০০৮</option>
                       <option value ="২০০৭">২০০৭</option>
                       <option value ="২০০৬">২০০৬</option>
                       <option value ="২০০৫">২০০৫</option>
                       <option value ="২০০৪">২০০৪</option>
                       <option value ="২০০৩">২০০৩</option>
                       <option value ="২০০২">২০০২</option>
                       <option value ="২০০১">২০০১</option>
                       <option value ="২০০০">২০০০</option>
                       <option value ="১৯৯৯">১৯৯৯</option>
                       <option value ="১৯৯৮">১৯৯৮</option>
                       <option value ="১৯৯৭">১৯৯৭</option>
                       <option value ="১৯৯৬">১৯৯৬</option>
                       <option value ="১৯৯৫">১৯৯৫</option>
                       <option value ="১৯৯৪">১৯৯৪</option>
                       <option value ="১৯৯৩">১৯৯৩</option>
                       <option value ="১৯৯২">১৯৯২</option>
                       <option value ="১৯৯১">১৯৯১</option>
                       <option value ="১৯৯০">১৯৯০</option>
                  </TextField>
                  
                   </Grid>
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
               <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
             
                <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
              <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
                   <div className="custom-form mt-4 mr-3 ml-1">
                   <Grid container>
                
                    
                  <TextField
                  select
                  label="কোন ক্লাস পর্যন্ত পড়েছেন?"
                  fullWidth
                  required
                  className={classes.textfield}
                  variant="outlined"
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  
                  id="sscJamat"
                  name="sscJamat"
                  value={sscJamat}
                  onChange={handleInput}
                  >
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
                  </TextField>
                
                   </Grid>
                 </div>
                    
              
             
                 <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     
                     fullWidth
                     multiline
                     maxRows = {200}
                     className={classes.textfield}
                     variant="outlined"
                     InputProps={{ classes: { root: classes.inputRoot } }}
                     label="অন্যান্য শিক্ষাগত যোগ্যতা"
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
