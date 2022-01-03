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
                     <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                    
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="ডিভোর্সের কারণ"
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
                     <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                   
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="আপনার সন্তান আছে?"
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
                         <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                    
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="পূর্বের সংসারের সময়কাল"
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
                <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                   
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="আপনার সন্তান আছে?"
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
                          <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                    
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="পূর্বের সংসারের সময়কাল"
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
                   
                <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                    required
                    multiline
                    maxRows = "200"
                    
                     fullWidth
                     className={classes.textfield}
                     multiline
                     maxRows = "200"
                     variant="outlined"
                    
                     label="আপনার সন্তান আছে?"
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
                       <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                    
                  <TextField
                  required
                  fullWidth
                  className={classes.textfield}
                 
                  select
                  label="বর্তমানে কতজন স্ত্রী আছেন?"
                  variant="outlined"
                  

                  
                  id="cWN"
                  name="cWN"
                  value={cWN}
                  onChange={handleInput}
                  >
                        
                        <option value = "১ জন">১ জন</option>
                        <option value = "২ জন">২ জন</option>
                        <option value = "৩ জন">৩ জন</option>
                       
                  </TextField>
                 
                   </Grid>
               
                    
                 </div>
                  
               
                   
                      <div className="custom-form mt-4 mr-3 ml-1">
                      <Grid container>
                    
                    
                     {cWN==="১ জন"? 
                                   
                  <TextField
                   required
                   fullWidth
                   className={classes.textfield}
                 
                   select
                   label="নতুন বিয়েতে পূর্বের স্ত্রীর অনুমতি আছে?"
                   variant="outlined"
                   InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   id="cWP"
                   name="cWP"
                   value={cWP}
                   onChange={handleInput}
                   >
                         
                         <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                        
                        
                   </TextField> :
                  <TextField
                   required
                   fullWidth
                   className={classes.textfield}
                  
                   select
                   label="নতুন বিয়েতে পূর্বের স্ত্রীদের অনুমতি আছে?"
                   variant="outlined"
                   InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   id="cWP"
                   name="cWP"
                   value={cWP}
                   onChange={handleInput}
                   >
                         
                         <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                        
                        
                   </TextField>}
                  
                    </Grid>
                
                     
                  </div>
                      <div className="custom-form mt-4 mr-3 ml-1">
                      <Grid container>
                    
                     
                 
                    <TextField
                    required
                   fullWidth
                   className={classes.textfield}
                  
                   select
                   label="আপনার সন্তান আছে?"
                   variant="outlined"
                  
                   
                   id="mCil"
                   name="mCil"
                   value={mCil}
                   onChange={handleInput}
                   >
                         
                         <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                        
                        
                   </TextField>
                  
                    </Grid>
                
                     
                  </div>
                    
                   
               
                {mCil==="হ্যাঁ"?
                
                
                <div>
                
                <div className="custom-form mt-4 mr-3 ml-1">
                     <Grid container>
                   
                   
                  <TextField
                  required
                  fullWidth
                  className={classes.textfield}
                 
                  select
                  label="কতজন সন্তান আছে?"
                  variant="outlined"
                 
                  
                  id="mCilN"
                  name="mCilN"
                  value={mCilN}
                  onChange={handleInput}
                  >
                        
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
                  </TextField>
                
                   </Grid>
               
                    
                 </div>
               
                {mCilN==="১ জন"?
                <div className="form mt-4 mr-3 ml-1">
                <Grid container>
                  <TextField
                  required
                  multiline
                  maxRows = "200"
                  
                   fullWidth
                   className={classes.textfield}
                   
                   variant="outlined"
                  
                   label="সন্তান সম্পর্কে তথ্য দিন"
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

               <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                 required
                 multiline
                 maxRows = "200"
                  
                  fullWidth
                  className={classes.textfield}
                  
                  variant="outlined"
                 
                  label="সন্তানদের সম্পর্কে তথ্য দিন"
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
                  <div className="custom-form mt-4 mr-3 ml-1">
                      <Grid container>
                    
                     
                 
                    <TextField
                    required
                   fullWidth
                   className={classes.textfield}
                 
                   label="বিয়েতে আপনার অভিভাবক রাজি আছেন?"
                   variant="outlined"
                   InputProps={{ classes: { root: classes.inputRoot } }}
                   
                   id="gPermission"
                   name="gPermission"
                   value={gPermission}
                   onChange={handleInput}
                   >
                         
                         <option value = "হ্যাঁ">হ্যাঁ</option>
                         <option value = "না">না</option>
                        
                        
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
                  
                  variant="outlined"
                 
                  label="বিয়ে করবেন কেনো?"
                  id="marriageC"
                  name="marriageC"
                  value={marriageC}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
                
                
                {auth.user.gender==="পাত্রের বায়োডাটা"?
                <div>
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
                 
                  label="বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকবেন?"
                  id="fWR"
                  name="fWR"
                  value={fWR}
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
                 
                  label="বিয়ের পর স্ত্রীকে পরিপূর্ণ পর্দায় রাখতে পারবেন?"
                  id="fWPorda"
                  name="fWPorda"
                  value={fWPorda}
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
                 
                  label="বিয়ের পর স্ত্রীকে চাকরি করার অনুমতি দেবেন?"
                  id="fWJob"
                  name="fWJob"
                  value={fWJob}
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
                 
                  label="বিয়ের পর স্ত্রীকে পড়াশোনা করার অনুমতি দেবেন?"
                  id="fWStudy"
                  name="fWStudy"
                  value={fWStudy}
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
                 
                  label="বিয়ে উপলক্ষে পাত্রীপক্ষ থেকে কোনো প্রকার উপহার কিংবা অর্থ আশা করবেন?"
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
                 
                  label="বিয়ের পর শ্বশুর-শ্বাশুড়ীর সাথে থাকতে ইচ্ছুক?"
                  id="mWKhedmot"
                  name="mWKhedmot"
                  value={mWKhedmot}
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
                 
                  label="বিয়ের পর চাকরি করতে ইচ্ছুক?"
                  id="mWJob"
                  name="mWJob"
                  value={mWJob}
                  onChange={handleInput}
                  
                 />
                 </Grid>
                
             </div>
                       <div className="form mt-4 mr-3 ml-1">
               <Grid container>
                 <TextField
                
                 multiline
                 maxRows = "200"
                 
                  
                  fullWidth
                  className={classes.textfield}
                  InputProps={{ classes: { root: classes.inputRoot } }}
                  variant="outlined"
                 
                  label="বিয়ের পর পড়াশোনা চালিয়ে যেতে চান?"
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
                 
                  label="বিয়ের মোহরানা সম্পর্কে আপনার ধারণা কী?"
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
                 className={classes.textfield} className={classes.tab} onClick={() => {
               handleApproval();
             
              }}  type="submit">Save</Button>
                   
                  
               </div>

            </form>
        </div>
    )
}

export default EditProfile
