import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { approvePending, declinePending, deleteBiodata, hideBiodata} from '../../redux/actions/pendingAction'

const useStyles = makeStyles((theme)=>({
    
    dropMenu:{
       
       marginTop:"66px",
       [theme.breakpoints.down("sm")]:{
        marginTop:"72px",
  
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
const ManageBiodata = ({user}) => {
    const history = useHistory();
    const classes = useStyles();
    const { auth, theme, socket } = useSelector(state => state)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    
    const handleOpenMenu = e =>{
      setAnchorEl(e.currentTarget);
    }
    
    const handleCloseMenu = () =>{
      setAnchorEl(null);
    }

    const  handleApproval = () => {
        dispatch(approvePending({user, auth, socket}))
        history.push('/pending')
       
      }  
    const  handleDecline = () => {
        dispatch(declinePending({user, auth, socket}))
        history.push('/pending')
       
      }  
    const  handleHide = () => {
        dispatch(hideBiodata({user, auth, socket}))
        history.push('/biodatas')
       
      }  
  
    const  handleDelete = () => {
        dispatch(deleteBiodata({user, auth, socket}))
        history.push('/biodatas')
       
      }  

  return (
    <div><Button 
          disableRipple
          style={{outline:'none'}}
          variant='contained'
          color='primary'
         onClick= {handleOpenMenu}
        > Manage Biodata
        </Button>
        <Menu
    disableScrollLock={false}
    className={classes.dropMenu}
    id='menu' 
    onClose={handleCloseMenu} 
    anchorEl={anchorEl} 
    open={Boolean(anchorEl)}>
      
      <MenuItem className={classes.menu}  onClick={() => {
          handleCloseMenu();
          handleApproval();}} >
         Approve
      </MenuItem>
      <MenuItem className={classes.menu}  onClick={() => {
          handleCloseMenu();
          handleDecline();}} >
          Decline
      </MenuItem>
      <MenuItem className={classes.menu}  onClick={() => {
          handleCloseMenu();
          handleHide();}} >
          Hide
      </MenuItem>
     
      <MenuItem className={classes.menu}  onClick={() => {
          handleCloseMenu();
          handleDelete();}} >
          Delete
      </MenuItem>
     
         
         
    
      
    </Menu>
        
        </div>

  )
}

export default ManageBiodata