import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography} from '@material-ui/core'
import RulesContent from './RulesContent';


const useStyles = makeStyles((theme)=>({
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

const Rules = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
  
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
        <div>
        <Button disableRipple className={classes.tab} fullWidth onClick={handleClickOpen('paper')}><Typography>যেসব কারণে বায়োডাটা বাতিল করা হয়।</Typography></Button>
       
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title"><Typography variant='h6'>নীচের যেকোনো একটি কারণ পাওয়া গেলে আপনার বায়োডাটা বাতিল করা হবে।  </Typography></DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <RulesContent/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default Rules
