import React,{useState} from 'react'
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'





import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    drawerPaper: {
      marginTop: "110px",
      [theme.breakpoints.up("sm")]:{
        marginTop: "110px",
    }
}

   
  }));







  const DrawerComponent = () => {


    const classes = useStyles();


    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
        <Drawer 
        disableScrollLock={false}
        classes={{
            paper: classes.drawerPaper
            }}
            
        onClose ={()=>setOpenDrawer(false)} open={openDrawer}>
        <List>
            <ListItem 
            component={Link} to ="/"
            onClick={()=>setOpenDrawer(false)} divider button disableRipple >
            
            <div className="drawer-icon pr-2">  <i class="bi bi-house-door"></i> </div> Home
           
            </ListItem>
            <ListItem 
            component={Link} to ="/quiz"
            onClick={()=>setOpenDrawer(false)} divider button disableRipple >
            
            <div className="drawer-icon pr-2"> <i class="bi bi-book"></i>  </div> Quiz
           
            </ListItem>
           
           
            <ListItem
            component={Link} to ="/help&support" onClick={()=>setOpenDrawer(false)} divider button disableRipple >
           <div className="drawer-icon pr-2"> <i class="bi bi-question-square"></i> </div> Help & Support
            </ListItem>
            <ListItem
            component={Link} to ="/reportProblem" onClick={()=>setOpenDrawer(false)} divider button disableRipple >
         <div className="drawer-icon pr-2"> <i class="bi bi-exclamation-triangle"></i> </div>  Report a Problem
            </ListItem>
            <ListItem
            component={Link} to ="/terms&policies" onClick={()=>setOpenDrawer(false)} divider button disableRipple >
          <div className="drawer-icon pr-2"> <i class="bi bi-award"></i> </div> Terms & Policies
            </ListItem>
            
        </List>
        <ListItem
            component={Link} to ="/about" onClick={()=>setOpenDrawer(false)} divider button disableRipple >
           <div className="drawer-icon pr-2">  <i class="bi bi-info-square"></i> </div> About
            </ListItem>
            
        </Drawer>

         <Link
            
            
            disableRipple
            onClick= {()=>setOpenDrawer(!openDrawer)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
          <MenuIcon className="home-icon"/>
          
          </Link>
          </>
    )
}

export default DrawerComponent
