import {Container, Paper, Avatar,Grid, Typography,Button, IconButton, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { register } from '../redux/actions/authAction'
import Icon from '../components/icon';
import { GoogleLogin } from 'react-google-login';
import { googleLogin } from './../redux/actions/authAction';
const useStyles = makeStyles((theme)=>({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    marginTop:'30px'
  },

   
  }));

const Register = () => {
    const classes = useStyles();
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
      fullname:'',  email: '', password: '', cf_password: '', 
    }
    const [userData, setUserData] = useState(initialState)
    const {fullname,  email, password, cf_password } = userData

    
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showCPassword, setShowCPassword] = useState(false);
    const handleClickShowCPassword = () => setShowCPassword(!showCPassword);
    const handleMouseDownCPassword = () => setShowCPassword(!showCPassword);
    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    const responseGoogle = async (response) => {
      try {
          

          dispatch(googleLogin({tokenId: response.tokenId}))
          history.push('/')
      } catch (err) {
         console.log(err)
      }
  }

    return (
        

      <Container component="main" maxWidth="xs" style={{minHeight:'110vh'}}>

      <Paper className={classes.paper} elevation={6}>

      <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign Up</Typography>

        <GoogleLogin
            clientId="561387637533-9qhib68msa9o56d7g5fnmth96u2dej83.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Continue with Google
              </Button>
            )}
            
            onSuccess={responseGoogle}
            cookiePolicy="single_host_origin"
          />

       <Typography>Or</Typography>
          
        <form onSubmit={handleSubmit} className={classes.form}>
      
      
        
        <Grid container spacing={2}>
             
                 <Grid item xs={12} sm={12} md={12}>
           
               
                <TextField
                 label="Name"
                 fullWidth
                 className={classes.bioSearchSelect}
                 style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}
                 variant="outlined"
                 id="fullname"
                 name="fullname"
                 value={fullname}
                 onChange={handleChangeInput}
                
                />
                 
                </Grid>
            
                 <Grid item xs={12} sm={12} md={12}>
           
               
                <TextField
                 label="Email address"
                 fullWidth
                 className={classes.bioSearchSelect}
                 style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}
                 variant="outlined"
                 id="email"
                 name="email"
                 value={email}
                 onChange={handleChangeInput}
                 helperText={alert.email ? alert.email : ''}
                />
                 
                </Grid>
            
                <Grid item xs={12} sm={12} md={12}>
               
                <TextField
                 label="Password"
                 fullWidth
                 type={showPassword ? "text" : "password"}
                 className={classes.bioSearchSelect}
                 style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}
                 variant="outlined"
                 id="password"
                 name="password"
                 value={password}
                 onChange={handleChangeInput}
                 helperText={alert.password ? alert.password : ''}
                 InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                 
                    </Grid>
               
                    
                    
                   
                
          
           
                    <Grid item xs={12} sm={12} md={12}>
                <TextField
                 label="Confirm Password"
                 fullWidth
                 type={showCPassword ? "text" : "password"}
                 className={classes.bioSearchSelect}
                 style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}
                 variant="outlined"
                 id="cf_password"
                 name="cf_password"
                 value={cf_password}
                 onChange={handleChangeInput}
                 helperText={alert.cf_password ? alert.cf_password : ''}
                 InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCPassword}
                          onMouseDown={handleMouseDownCPassword}
                        >
                          {showCPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                 </Grid>
                    
               </Grid>
                    
                    
                   
                
          
           
           
            
           
                 <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                 Sign Up
                </Button>
            <p className="my-2">
             Already have an account? <Link to="/auth" style={{color: "crimson"}}>Sign in</Link>
           </p>
           
            
           
            
            
      
        
     
         
           
           
           
           </form>
</Paper>
</Container>
         
    )
}

export default Register
