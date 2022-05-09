import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { deepPurple } from '@material-ui/core/colors';
import NotifyModal from '../NotifyModal'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, Menu, MenuItem, makeStyles, Box, Avatar, Grid} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import { Badge } from '@material-ui/core'
import Search from './Search';

const useStyles = makeStyles((theme)=>({
    
    dropMenu:{
       
       marginTop:"66px",
       [theme.breakpoints.down("sm")]:{
        marginTop:"72px",
  
      },
     
      
    },
    dropNotify:{
       
       marginTop:"63px",
       [theme.breakpoints.down("sm")]:{
        marginTop:"63px",
  
      },
     
      
    },
    menu:{
      "&:hover": {
        backgroundColor:theme.palette.action.focus
    }
  },
  menuContainer:{
    
    display: 'flex',
    alignItems:"center",
    
    [theme.breakpoints.down('sm')]: {
      alignItems:"center",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
   
  },
  
     
  
  }));


const HeaderMenu = () => {
    const classes = useStyles();

  
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElNotifY, setAnchorElNotify] = useState(null)
  
  

  const handleOpenMenu = e =>{
    setAnchorEl(e.currentTarget);
  }
  
  const handleCloseMenu = () =>{
    setAnchorEl(null);
  }
  const handleOpenNotify = e =>{
    setAnchorElNotify(e.currentTarget);
  }
  
  const handleCloseNotify = () =>{
    setAnchorElNotify(null);
  }

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
  
    const newArr = notify.data.filter(item => item.isRead === false)
    

    return (
       
            <>
               
           
              <Grid 
           
              className= {classes.menuContainer}
              
              
              >
                

                
                <Grid 
                 
                style={{opacity: 1}} >
                  <Link to ="/">  <span className="nav-link pr-2 pr-lg-3">
                      
                           <Badge className="material-icons">
                         <HomeIcon className="home-icon"/> 
                             </Badge>
                             
                   </span>
                   </Link>
                    </Grid>
               
                <Grid 
                justifyContent="flex-end"
                style={{opacity: 1}} >
                    
                <Link
                  disableRipple
                  onClick= {handleOpenNotify}
                  
                  aria-label="notify"
                  
                  >  
                   <span className="nav-link pr-2 pr-lg-3" >
                       
                           <Badge badgeContent={newArr.length} color="secondary" className="material-icons">
                        <NotificationsIcon className="home-icon"/>
                             </Badge>
                  

                       
                    </span>
                   </Link>
                   
                   
                    
                 
                        
                </Grid>
                <Grid 
                
                style={{opacity: 1}} >
                  <Link
                  disableRipple
                  onClick= {handleOpenMenu}
                  style={{ textDecoration: 'none', color: 'white' }}
                  aria-label="menu"
                  
                  >  <span className="nav-link pr-2 pr-lg-3">
                      
                           <Badge className="material-icons">
                             
                         <div className={classes.avatar}>{auth.user?.fullname.charAt(0)} </div>
                             </Badge>
                             
                   </span>
                   </Link>
                    </Grid>
            </Grid>
               
     

    <Menu
    disableScrollLock={false}
    className={classes.dropMenu}
    id='menu' 
    onClose={handleCloseMenu} 
    anchorEl={anchorEl} 
    open={Boolean(anchorEl)}>
      {/* <MenuItem className={classes.menu}   onClick={() => {
          handleCloseMenu();
          dispatch({
            type: GLOBALTYPES.THEME, payload: !theme
        });
        }} >
          <div className=" drawer-icon pr-2"> <i class="bi bi-brightness-high-fill"></i> </div> {theme ? 'Light mode' : 'Dark mode'}
        </MenuItem> */}
      {auth.user.isPublished==="deleted"? null :<><MenuItem className={classes.menu}  onClick={handleCloseMenu} component={Link}  to={`/biodatas/${auth.user._id}`}>
          <div className="drawer-icon pr-2"> <i class="bi bi-journal"></i> </div>Your Biodata
        </MenuItem>
     
          <MenuItem className={classes.menu} component={Link} to='/deleteBiodata' onClick={handleCloseMenu}>
          <div className="drawer-icon pr-2"> <i class="bi bi-receipt"></i> </div> Delete Your Biodata
        </MenuItem></>}
         { auth.user.role==='admin'?
         <><MenuItem className={classes.menu} component={Link} to ="/requests" onClick={handleCloseMenu}>
          <div className="drawer-icon pr-2"> <i class="bi bi-save"></i> </div> Requests
        </MenuItem>
         <MenuItem className={classes.menu} component={Link} to ="/reports" onClick={handleCloseMenu}>
          <div className="drawer-icon pr-2"> <i class="bi bi-save"></i> </div> Reports
        </MenuItem>
          <MenuItem className={classes.menu} component={Link} to ="/pending" onClick={handleCloseMenu}>
          <div className="drawer-icon pr-2"> <i class="bi bi-save"></i> </div> Pending
        </MenuItem>
        <MenuItem className={classes.menu} component={Link} to ="/applicants" onClick={handleCloseMenu}>
          <div className="drawer-icon pr-2"> <i class="bi bi-gear-fill"></i> </div> Applicants
        </MenuItem>
        </>:null}
      <MenuItem className={classes.menu} component={Link} to ="/"  onClick={() => {
          handleCloseMenu();
          dispatch(logout());}}>
          <div className="drawer-icon pr-2"> <i class="bi bi-box-arrow-right"></i> </div> Logout</MenuItem>
    </Menu>

    <Menu
    
    className={classes.dropNotify}
    id='notify' 
    onClose={handleCloseNotify} 
    anchorEl={anchorElNotifY} 
    open={Boolean(anchorElNotifY)}>
     
       <NotifyModal handleCloseNotify = {handleCloseNotify}/>
        
    </Menu>
    </>
   
    )
}

export default HeaderMenu
