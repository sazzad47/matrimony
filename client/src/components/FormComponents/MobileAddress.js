import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import pdivisionsData from './Data'
import { cdivisionsData } from './Data'
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'

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
                  
                 <h6> স্থায়ী ঠিকানা *  </h6>

                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'10px', marginTop:'20px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="বিভাগ"
                 select
                 id="pdivision"
                 name="pdivision"
                 value={pdivision}
                 onChange={handleInput}
                 >
                    {pdivisions}
                   
                   
          
                 </TextField>
                 </Grid>
                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'10px', marginTop:'10px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="জেলা"
                 select
                 id="pdistrict"
                 name="pdistrict"
                 value={pdistrict}
                 onChange={handleInput}
                 >
                    {pdistricts}
                   
                   
          
                 </TextField>
                 </Grid>
                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'20px', marginTop:'10px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="উপজেলা"
                 select
                 id="pupazila"
                 name="pupazila"
                 value={pupazila}
                 onChange={handleInput}
                 >
                    {pupazilas}
                   
                   
          
                 </TextField>
                 </Grid>
              
                   
                </div>
                <div className="custom-form mt-4 mr-3 ml-1">
                  
                 <h6> বর্তমান ঠিকানা *  </h6>

                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'10px', marginTop:'20px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="বিভাগ"
                 select
                 id="cdivision"
                 name="cdivision"
                 value={cdivision}
                 onChange={handleInput}
                 >
                    {cdivisions}
                   
                   
          
                 </TextField>
                 </Grid>
                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'10px', marginTop:'10px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="জেলা"
                 select
                 id="cdistrict"
                 name="cdistrict"
                 value={cdistrict}
                 onChange={handleInput}
                 >
                   {cdistricts}
                   
                   
          
                 </TextField>
                 </Grid>
                  <Grid container>

                  
                 <TextField
                 fullWidth
                 required
                 style={{marginBottom:'20px', marginTop:'10px', marginLeft:'20px',marginRight:'20px'}}
                 variant="outlined"
                 label="উপজেলা"
                 select
                 id="cupazila"
                 name="cupazila"
                 value={cupazila}
                 onChange={handleInput}
                 >
                    {cupazilas}
                   
                   
          
                 </TextField>
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
