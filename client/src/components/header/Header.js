import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Button, Grid, makeStyles, Toolbar, Typography} from '@material-ui/core'
import HeaderMenu from './Menu'


import DrawerComponent from './DrawerComponent'
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme)=>({
    appBar: {
        
        marginLeft: '0px',
        marginBottom:'30px',
        height:'80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        padding: '10px 30px',
        [theme.breakpoints.down('sm')]: {
          padding: '5px 20px',
        },
    },
    toolbar: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
        },
        
        width: '400px',
        [theme.breakpoints.down('md')]: {
          width: '400px',
        },
      },

   
  }));

const Header = () => {
    const classes = useStyles();
    const { auth } = useSelector(state => state)
    return (
        <AppBar className={classes.appBar} position="static" color="primary">
        
           
        <Grid 
        container
        direction="row"
        
        >
          <Grid
         style={{marginRight:'30px'}}>
           <DrawerComponent/>
          </Grid>
                <div className="d-none d-md-block d-lg-block">
               <Link to ="/">
                    <Typography  className="logo"
                    onClick={() => window.scrollTo({top: 0})}>
                        Jannater Sathi
                    </Typography>
              
                 </Link>
                 </div>
               </Grid>
                 <Toolbar className={classes.toolbar}>
                
              
                {auth.token? <HeaderMenu />:
                <Button 
                variant="contained"
                component={Link} to = '/login'>Login</Button>}
                
        </Toolbar>
        </AppBar>
    )
}

export default Header
