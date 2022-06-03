import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Paper, Avatar,Grid, Typography,Button, IconButton, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Icon from '../components/icon';
import { googleLogin } from '../redux/actions/authAction';
import { styled } from '@material-ui/styles'
import { Helmet } from 'react-helmet-async'

const useStyles = makeStyles((theme)=>({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
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

 
const Login = () => {
    const classes = useStyles();
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()



    useEffect(() => {
        if(auth.token) history.push("/edit_biodata")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    const responseGoogle = async (response) => {
      try {
          

          dispatch(googleLogin({tokenId: response.tokenId}))
          
      } catch (err) {
         console.log(err)
      }
  }

  

    return (
         <>
         <Helmet>
          <title>Login</title>
          <meta name='description' content='Login to your account.'/>
          <link rel='canonical' href='/auth'/>
         </Helmet>
        
      <Container component="main" maxWidth="xs" style={{minHeight:'50vh'}}>

        <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>

        <GoogleLogin
            clientId="561387637533-9qhib68msa9o56d7g5fnmth96u2dej83.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick}  startIcon={<Icon />} variant="contained">
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
                   label="Email address"
                   fullWidth
                   className={classes.bioSearchSelect}
                   
                   variant="outlined"
                   id="email"
                   name="email"
                   value={email}
                   onChange={handleChangeInput}
                  
                  />
                   
                  </Grid>
           
             
                 <Grid item xs={12} sm={12} md={12}>
                  <TextField
                   label="Password"
                   type={showPassword ? "text" : "password"}
                   className={classes.bioSearchSelect}
                   fullWidth
                   variant="outlined"
                   id="password"
                   name="password"
                   value={password}
                   onChange={handleChangeInput}
                   
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
                     </Grid> 
                 
                      
                      
                     
                  
             
             
             
             
             
              
              
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                 Sign in
                </Button>
                
              <p className="my-2">
              Don't have an account? <Link to="/register" style={{color: "crimson"}}>Sign Up</Link>
             </p>
              
              
             
              
              
      
          
       
           
             
             
             
             </form>

                </Paper>
  
             </Container>


         </>


    )
}

export default Login
