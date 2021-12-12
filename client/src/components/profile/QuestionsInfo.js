import { Grid, Typography, makeStyles, Card} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
  card:{
    borderTop:'1px solid #002884',
    borderRadius:'10px'
  }
   

 
}));

const QuestionsInfo = ({id, dispatch, user, profile}) => {
  const classes = useStyles();
    return (
      <Card  className={classes.card}>
      <div className="container-fluid">
           
      <div className="row contactBtnHeading">
        <div className="col-md-12 text-center">
        <div className="textHeading">হলফনামা</div>
        </div>
      </div>
      <Grid  
      container 
      alignItems="center"
      justifyContent="center"
      item xs={12}
      >
          <Typography align='center' style={{padding:'20px'}}>আমি আল্লাহ সুবহানাহু ওয়া তা'আলার নামে হলফ করে বলছি, আমার বায়োডাটায় যে তথ্যগুলো দেয়া হয়েছে, আমার জ্ঞানে সব সত্য, এবং আমার অভিভাবকের অনুমতি সাপেক্ষে। কোনো মিথ্যে তথ্য দিয়ে থাকলে তার কোনো দায়ভার JannaterSathi.com নেবে না।
         </Typography>
       
      </Grid>
   </div>
   </Card>
  
    )
}

export default QuestionsInfo
