import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'

import { Button, FormControl, Grid, InputLabel,  makeStyles,  Select, TextField } from '@material-ui/core'

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
        divorcedC: '', divorcedCil: '', cWN: '',cWP:'',fWR:'',mCil:'',
        mCilN:'',mCilInfo:'', marriageC: '',gPermission:'',fWPorda:'',
        fWJob:'',fWStudy:'',marriageGift:'',mWJob:'',mWStudy:'', mWKhedmot: '',
        mMohrana:'',
    }
    const [userData, setUserData] = useState(initState)
    const {  divorcedC, divorcedCil, cWN,cWP,fWR,mCil,mCilN,
        mCilInfo, marriageC,gPermission,fWPorda,fWJob,fWStudy,
        marriageGift,mWJob,mWStudy, mWKhedmot,mMohrana } = userData

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
                

               {auth.user.status==="ডিভোর্সড"?
               <div>
                 <div className="custom-form mt-4 mr-3 ml-1">
              <h6>ডিভোর্সের কারণ *</h6>
               <Grid container>
                 <textarea
                
                 rows="4"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedC"
                  name="divorcedC"
                  value={divorcedC}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                     ডিভোর্স কেনো হয়েছিলো, পূর্বের সংসারের সময়কাল কতো ছিলো, ইত্যাদি সম্পর্কে লিখুন।
                      
                     
                      </small>
                      </div>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6>আপনার সন্তান আছে? *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedCil"
                  name="divorcedCil"
                  value={divorcedCil}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                    যদি সন্তান থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে, ইত্যাদি সম্পর্কেও লিখুন।
                      
                     
                      </small>
                      </div>
             </div>
                   
                
                 

               
                  </div>:
                  auth.user.status==="বিধবা"?
                  <div>
                     <div className="custom-form mt-4 mr-3 ml-1">
              <h6>পূর্বের সংসারের সময়কাল *</h6>
               <Grid container>
                 <textarea
                
                 rows="4"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedC"
                  name="divorcedC"
                  value={divorcedC}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                    আপনার পূর্বের সংসারের সময়কাল কতো ছিলো, আপনার স্বামী কবে কীভাবে ইন্তেকাল করেছিলেন, ইত্যাদি সম্পর্কে লিখুন। 
                      
                     
                      </small>
                      </div>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6>আপনার সন্তান আছে? *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedCil"
                  name="divorcedCil"
                  value={divorcedCil}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                    যদি সন্তান থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে, ইত্যাদি সম্পর্কেও লিখুন।
                      
                     
                      </small>
                      </div>
             </div>
               
                  </div>:
                 auth.user.status==="বিপত্নীক"?
                 <div>
                   <div className="custom-form mt-4 mr-3 ml-1">
              <h6>পূর্বের সংসারের সময়কাল *</h6>
               <Grid container>
                 <textarea
                
                 rows="4"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedC"
                  name="divorcedC"
                  value={divorcedC}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                 <small>
                    আপনার পূর্বের সংসারের সময়কাল কতো ছিলো, আপনার স্ত্রী কবে কীভাবে ইন্তেকাল করেছিলেন, ইত্যাদি সম্পর্কে লিখুন। 
                      
                     
                      </small>
                      </div>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6>আপনার সন্তান আছে? *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="divorcedCil"
                  name="divorcedCil"
                  value={divorcedCil}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                    যদি সন্তান থাকে, তাহলে সন্তানের বয়স কতো এবং বিয়ের পর সন্তানের সার্বিক দায়িত্ব কে নেবে, ইত্যাদি সম্পর্কেও লিখুন।
                      
                     
                      </small>
                      </div>
             </div>
                   
               
                   </div>:
                auth.user.status==="বিবাহিত"?
                  <div>
                      <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বর্তমানে কতজন স্ত্রী আছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="cWN"
                 name="cWN"
                 value={cWN}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>বর্তমান স্ত্রীর সংখ্যা</option>
                   <option value = "১ জন">১ জন</option>
                        <option value = "২ জন">২ জন</option>
                        <option value = "৩ জন">৩ জন</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                    
                   
                      
                      <div className="custom-form mt-4 mr-3 ml-1" >
                        {cWN==="১ জন"?<h6 className='ms-2'>নতুন বিয়েতে পূর্বের স্ত্রীর অনুমতি আছে? *</h6>:
                        <h6 className='ms-2'>নতুন বিয়েতে পূর্বের স্ত্রীদের অনুমতি আছে? *</h6>}
                       <div className='select-wrapper'>
                       <Grid container>
    
                      
                     <select
                    
                     required
                     className='formSelect'
                     
                     id="cWP"
                     name="cWP"
                     value={cWP}
                     onChange={handleInput}
                     >
                       <option className='text-muted' value="" disabled selected>স্ত্রীর অনুমতি</option>
                       <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                       
              
                     </select>
                     </Grid>
                     </div>
                  
                      </div>
                      <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>আপনার সন্তান আছে? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="mCil"
                 name="mCil"
                 value={mCil}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>সন্তান</option>
                   <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                     
                    
                   
               
                {mCil==="হ্যাঁ"?
                
                
                <div>
                    <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>কতজন সন্তান আছে? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="mCilN"
                 name="mCilN"
                 value={mCilN}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>সন্তানের সংখ্যা</option>
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
                
             
               
                {mCilN==="১ জন"?
                  <div className="custom-form mt-4 mr-3 ml-1">
                  <h6> সন্তান সম্পর্কে তথ্য দিন *</h6>
                   <Grid container>
                     <textarea
                    
                     rows="4"
                      required
                    
                      className='textArea'
                     
                    
                     
        
                      id="mCilInfo"
                      name="mCilInfo"
                      value={mCilInfo}
                      onChange={handleInput}
                      
                     />
                   
                     </Grid>
                     <div className={classes.textfield}>
                  
                  <small>
                  সন্তানের বয়স, পেশা, ইত্যাদি সম্পর্কে লিখুন।
                  </small>
                  </div>
                 </div>
               
               
               :
<div className="custom-form mt-4 mr-3 ml-1">
                  <h6> সন্তানদের সম্পর্কে তথ্য দিন *</h6>
                   <Grid container>
                     <textarea
                    
                     rows="4"
                      required
                    
                      className='textArea'
                     
                    
                     
        
                      id="mCilInfo"
                      name="mCilInfo"
                      value={mCilInfo}
                      onChange={handleInput}
                      
                     />
                   
                     </Grid>
                     <div className={classes.textfield}>
                  
                     <small>
                 সকল সন্তানের বয়স, পেশা, ইত্যাদি সম্পর্কে লিখুন।
                 </small>
                  </div>
                 </div>
              
               
                } 
                </div>:null}
                 
                
                  </div>:null}
                  <div className="custom-form mt-4 mr-3 ml-1" >
                   <h6 className='ms-2'>বিয়েতে আপনার অভিভাবক রাজি আছেন? *</h6>
                   <div className='select-wrapper'>
                   <Grid container>

                  
                 <select
                
                 required
                 className='formSelect'
                 
                 id="gPermission"
                 name="gPermission"
                 value={gPermission}
                 onChange={handleInput}
                 >
                   <option className='text-muted' value="" disabled selected>অভিভাবকের অনুমতি</option>
                   <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                   
          
                 </select>
                 </Grid>
                 </div>
              
                  </div>
                  <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ে করবেন কেনো? *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="marriageC"
                  name="marriageC"
                  value={marriageC}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                
                
                {auth.user.gender==="পাত্রের বায়োডাটা"?
                <div>
                    <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকবেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="3"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fWR"
                  name="fWR"
                  value={fWR}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের পর স্ত্রীকে পরিপূর্ণ পর্দায় রাখতে পারবেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fWPorda"
                  name="fWPorda"
                  value={fWPorda}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-sm-auto mr-md-auto mr-lg-auto mr-xl-auto'> বিয়ের পর স্ত্রীকে চাকরি করার অনুমতি দেবেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fWJob"
                  name="fWJob"
                  value={fWJob}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-sm-auto mr-md-auto mr-lg-auto mr-xl-auto'> বিয়ের পর স্ত্রীকে পড়াশোনা করার অনুমতি দেবেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="fWStudy"
                  name="fWStudy"
                  value={fWStudy}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
             <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className='mr-2 mr-md-2 mr-lg-2 mr-xl-auto'> বিয়ে উপলক্ষে পাত্রীপক্ষ থেকে কোনো প্রকার উপহার কিংবা অর্থ আশা করবেন? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="marriageGift"
                  name="marriageGift"
                  value={marriageGift}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                 
            
                </div>:null}
                {auth.user.gender==="পাত্রীর বায়োডাটা"? 
                <div>
                   <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের পর শ্বশুর-শ্বাশুড়ীর সাথে থাকতে ইচ্ছুক? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="mWKhedmot"
                  name="mWKhedmot"
                  value={mWKhedmot}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                   <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের পর চাকরি করতে ইচ্ছুক? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="mWJob"
                  name="mWJob"
                  value={mWJob}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                
             </div>
                   <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের পর পড়াশোনা চালিয়ে যেতে চান? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="mWStudy"
                  name="mWStudy"
                  value={mWStudy}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                    <small>
                    ছাত্রী না হলে ঘরটি ফাঁকা রাখতে পারেন।
                    </small>
                    </div>
             </div>
                   <div className="custom-form mt-4 mr-3 ml-1">
              <h6> বিয়ের মোহরানা সম্পর্কে আপনার ধারণা কী? *</h6>
               <Grid container>
                 <textarea
                
                 rows="2"
                  required
                
                  className='textArea'
                 
                
                 
    
                  id="mMohrana"
                  name="mMohrana"
                  value={mMohrana}
                  onChange={handleInput}
                  
                 />
               
                 </Grid>
                 <div className={classes.textfield}>
                    
                 <small>
                    বিয়ের মোহরানা কেমন হওয়া উচিত, ইসলামে মোহরানার গুরুত্ত্ব, ইত্যাদি সম্পর্কে লিখুন।
                    </small>
                    </div>
             </div>
                    
                   
                
                    </div> :null}
                
                    <div className="form mt-4 mr-3 ml-1">
                 
                 <Button disableRipple fullWidth
                  className={classes.tab} onClick={() => {
               handleApproval();
             
              }}  type="submit">Save</Button>
                   
                  
               </div>

            </form>
        </div>
    )
}

export default EditProfile
