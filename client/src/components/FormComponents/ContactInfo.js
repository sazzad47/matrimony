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
     
     
  
   
  }));




const EditProfile = ({}) => {

    const classes = useStyles();
    const initState = {
        gMobile: '', gRelation: '', urEmail: '', urMobile: '', 
    }
    const [userData, setUserData] = useState(initState)
    const {  gMobile, gRelation, urEmail, urMobile, } = userData

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
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                     type="number"
                     label="অভিভাবকের মোবাইল নাম্বার"
                     id="gMobile"
                     name="gMobile"
                     value={gMobile}
                     onChange={handleInput}
                     
                    />
                   
                    <div className={classes.textfield}>
                    
                  {auth.user.gender === "পাত্রীর বায়োডাটা"? <small>
                    পাত্রপক্ষ যোগাযোগ করতে চাইলে আপনার অভিভাবকের মোবাইল নাম্বার দেয়া হবে। সুতরাং সবসময় খোলা থাকবে এমন কোনো মোবাইল নাম্বার লিখুন। নাম্বার বন্ধ থাকার আশংকা থাকলে একাধিক নাম্বার লিখতে পারেন।<br/><br/>উল্লেখ্য, এখানে নিজের নাম্বার লিখলে আপনার বায়োডাটা বাতিল করা হবে। 
                    </small>
                    :<small>
                    পাত্রীপক্ষ যোগাযোগ করতে চাইলে আপনার অভিভাবকের মোবাইল নাম্বার দেয়া হবে। সুতরাং সবসময় খোলা থাকবে এমন কোনো মোবাইল নাম্বার লিখুন। নাম্বার বন্ধ থাকার আশংকা থাকলে একাধিক নাম্বার লিখতে পারেন।<br/><br/>উল্লেখ্য, এখানে নিজের নাম্বার লিখলে আপনার বায়োডাটা বাতিল করা হবে। 
                    </small>}
                    </div>
                    </Grid>
                </div>
            <div className="form mt-4 mr-3 ml-1">
                  <Grid container>
                    <TextField
                     required
                     fullWidth
                     className={classes.textfield}
                     
                     variant="outlined"
                     
                     label="যার নাম্বার লিখেছেন"
                     id="gRelation"
                     name="gRelation"
                     value={gRelation}
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
                     type="email"
                     label="বায়োডাটা গ্রহণের ই-মেইল এড্রেস"
                     id="urEmail"
                     name="urEmail"
                     value={urEmail}
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
                     type="number"
                     label="আপনার মোবাইল নাম্বার"
                     id="urMobile"
                     name="urMobile"
                     value={urMobile}
                     onChange={handleInput}
                     
                    />
                    </Grid>
                    <div className={classes.textfield}>
                    
                    <small>
                     ওয়েবসাইট থেকে আপনাকে কল দে্যার প্রয়োজন হতে পারে, এজন্য আপনার মোবাইল নাম্বার নেয়া হচ্ছে। আপনার নাম্বার আমরা সম্পূর্ণ গোপন রাখবো।
                      আপনি ও ওয়েবসাইট কর্তৃপক্ষ বাদে আপনার নাম্বার কেউ দেখতে পাবে না।
                      
                     
                      </small>
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
