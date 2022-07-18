import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Button, Grid, makeStyles, Toolbar, Typography} from '@material-ui/core'
import HeaderMenu from './Menu'


import DrawerComponent from './DrawerComponent'
import { useSelector } from 'react-redux'
import GeneralMenu from './GeneralMenu'
const useStyles = makeStyles((theme)=>({
    appBar: {
        
        marginLeft: '0px',
        marginBottom:'30px',
        height:'80px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
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
        
        <div className='d-flex d-md-none d-lg-none'
        >
           <DrawerComponent/>
           
          </div>
       
        <div className="d-none d-md-flex d-lg-flex">
               <Link to ="/">
                    <Typography  className="logo"
                    onClick={() => window.scrollTo({top: 0})}>
                        Jannater Sathi
                    </Typography>
              
                 </Link>
                 </div>
                 <div className='d-none d-md-flex d-lg-flex'
                            style={{marginRight:'30px'}}>
                            <GeneralMenu/>
           
                        </div>
                        <div className="d-flex d-md-none d-lg-none">
               <Link to ="/">
                    <Typography  className="logo"
                    onClick={() => window.scrollTo({top: 0})}>
                        {auth.token? null : <span>Jannater Sathi</span>}
                    </Typography>
              
                 </Link>
                 </div>
          <div>
          {auth.token? <HeaderMenu />:
                <Button 
                variant="contained"
                component={Link} to = '/login'>Login</Button>}
          </div>

          {/* <div className='d-block d-md-none'
         style={{marginRight:'30px'}}>
           <DrawerComponent/>
           
          </div>
         
                <div className="d-none d-md-flex d-lg-flex">
               <Link to ="/">
                    <Typography  className="logo"
                    onClick={() => window.scrollTo({top: 0})}>
                        Jannater Sathi
                    </Typography>
              
                 </Link>
                 </div>
                 <div className='d-none d-md-block'
                            style={{marginRight:'30px'}}>
                            <GeneralMenu/>
           
                        </div> */}
         
                 {/* <Toolbar className={classes.toolbar}>
                
              
                {auth.token? <HeaderMenu />:
                <Button 
                variant="contained"
                component={Link} to = '/login'>Login</Button>}
                
        </Toolbar> */}
             
        </AppBar>
    )
}

export default Header
