import { Tab, Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Aqida from '../components/FormComponents/Aqida';
import ContactInfo from '../components/FormComponents/ContactInfo';
import Education from '../components/FormComponents/Education';
import Family from '../components/FormComponents/Family';
import GeneralInfo from '../components/FormComponents/GeneralInfo';
import Marital from '../components/FormComponents/Marital';
import Partner from '../components/FormComponents/Partner';
import Taqwa from '../components/FormComponents/Taqwa';
import Questions from '../components/FormComponents/Questions';
import MobileAddress from '../components/FormComponents/MobileAddress';
import MobileGeneral from '../components/FormComponents/MobileGeneral';

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
    '&:focus': {
      backgroundColor: '#fff',
      color: '#000000',
      outline:'none',
      height:'35px',
  }
},
  activeTab: {
    backgroundColor: '#fff',
      color: '#000000',
      border:'1px solid #000000',
      height:'35px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000000',
      border:'1px solid #000000',
      height:'35px',
  },
  '&:focus': {
    backgroundColor: '#fff',
    color: '#000000',
    outline:'none',
    height:'35px',
}
},
  


 
}));

function CreateBiodata() {
  const classes = useStyles();
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  
  const [toggleState, setToggleState] = useState(1);
   
  const toggleTab = (index) => {
    setToggleState(index);
  };


  useEffect(() => {
    const data = sessionStorage.getItem('Alhamdulillah');
    if (data){
      setToggleState(JSON.parse(data));
    }
    
  }, []);

   useEffect(() => {
   
    sessionStorage.setItem('Alhamdulillah',JSON.stringify(toggleState));

   },);
  return (
      
     
   <div>
     {/* ...............mobile menu starts here.................. */}
     <div className= "d-block d-md-block d-lg-none">
     <Card elevation={6}style={{padding:'5px',}} >
     <Grid container spacing={1} alignItems='center' >
     <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 1 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(1)}
            >
              <Typography>সাধারণ তথ্য</Typography>
           
            </Button>
        </Grid>
      <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 10 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(10)}
            >
              <Typography>ঠিকানা</Typography>
           
            </Button>
        </Grid>
     <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 2 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(2)}
            >
              <Typography>শিক্ষাগত যোগ্যতা</Typography>
           
            </Button>
        </Grid>
      <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 3 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(3)}
            >
              <Typography>পারিবারিক তথ্য</Typography>
           
            </Button>
        </Grid>
     
     <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 4 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(4)}
            >
              <Typography>তাক্বওয়া</Typography>
           
            </Button>
        </Grid>
      <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 5 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(5)}
            >
              <Typography>আক্বীদা</Typography>
           
            </Button>
        </Grid>
     <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 6 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(6)}
            >
              <Typography>বিয়ে</Typography>
        
            </Button>
        </Grid>
      <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 7 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(7)}
            >
              <Typography>জান্নাতের সাথী</Typography>
           
            </Button>
        </Grid>
     <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState ===8  ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(8)}
            >
              <Typography>যোগাযোগ</Typography>
        
            </Button>
        </Grid>
      <Grid item xs={6} md={6}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 9 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(9)}
            >
              <Typography>হলফনামা</Typography>
           
            </Button>
        </Grid>
  
     </Grid>
     </Card>
     </div>
     {/*.................. desktop menu starts here ..............*/}
    
       <div className="d-none d-md-none d-lg-block">
       <Card elevation={6}style={{padding:'10px',}} >
         <Grid container spacing={2} alignItems='center' >
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 1 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(1)}
            >
              <Typography>সাধারণ তথ্য</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 2 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(2)}
            >
              <Typography>শিক্ষাগত যোগ্যতা</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple 
        className={toggleState === 3 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(3)}
            >
              <Typography>পারিবারিক তথ্য</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 4 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(4)}
            >
              <Typography> তাক্বওয়া</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 5 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(5)}
            >
              <Typography>আক্বীদা</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 6 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(6)}
            >
              <Typography>বিয়ে সংক্রান্ত তথ্য</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 7 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(7)}
            >
              <Typography> জান্নাতের সাথী</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 8 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(8)}
            >
              <Typography>যোগাযোগ</Typography>
           
            </Button>
        </Grid>
      <Grid item md={4} lg={4}>
        
        <Button fullWidth disableRipple
        className={toggleState === 9 ? (classes.activeTab) : (classes.tab)}
        onClick={() => toggleTab(9)}
            >
              <Typography>হলফনামা</Typography>
           
            </Button>
        </Grid>
      
     
      
      
      </Grid>
      </Card>
      </div>
      
     
   <Card elevation={6} style={{marginTop:'50px', marginBottom:'50px'}}>
      
      
   



   
      <div className="content-tabs">
        <div 
          className={toggleState === 1 ? "content  active-content d-none d-md-none d-lg-block" : "content"}
        >
         
         <GeneralInfo/>
        </div>
        <div 
          className={toggleState === 1 ? "content  active-content d-block d-md-block d-lg-none" : "content"}
        >
         
         <MobileGeneral/>
        </div>

       

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <Education/>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Family/>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         <Taqwa/>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Aqida/>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <Marital/>
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <Partner/>
        </div>
        <div
          className={toggleState === 8 ? "content  active-content" : "content"}
        >
          <ContactInfo/>
        </div>
        <div
          className={toggleState === 9 ? "content  active-content" : "content"}
        >
          <Questions/>
        </div>
        <div
          className={toggleState === 10 ? "content  active-content" : "content"}
        >
          <MobileAddress/>
        </div>
      </div>
    </Card>
    </div>
   
  );
}

export default CreateBiodata;
