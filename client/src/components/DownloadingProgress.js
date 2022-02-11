import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box, CircularProgress, Grid} from '@material-ui/core';



function CircularProgressWithLabel(props) {
  return (
      <>
      <div className='loading p-5'> 
        <Grid>
            
            <Typography> ফাইলটি ডাউনলোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন।<br/><br/>নিশ্চয়ই আল্লাহ তা'আলা ধৈর্যশীলদের সঙ্গে আছেন। (সূরা: বাকারা, আয়াত : ১৫৩)   </Typography>
            
            <Grid  style={{display:'flex', marginTop:'20px', alignItems:"center", justifyContent:'center'}} >
    <Box sx={{position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
    </Grid>
    </Grid> </div>
    </>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(2);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}