import { Divider, Grid, Typography } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react'

const RulesContent = () => {
    return (
        <div>
         <ul> 
          <li><Typography>যদি আপনি পাঁচ ওয়াক্ত নামাযী না হোন।</Typography></li><br/>
          <li><Typography>যদি সুন্নতি পদ্ধতিতে দাড়ি না রাখেন। (পাত্রের ক্ষেত্রে)</Typography></li><br/> 
          <li><Typography>যদি টাখনুর উপর কাপড় না পরেন। (পাত্রের ক্ষেত্রে)</Typography></li><br/> 
          <li><Typography>যদি শরিয়তের নির্ধারিত ফরজ পর্দা না করেন /বোরকা-নিকাব না পরেন। (পাত্রীর ক্ষেত্রে) </Typography></li><br/> 
          <li><Typography>যদি অভিভাবককে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা জমা দেন।</Typography></li><br/> 
          <li><Typography>যদি অভিভাবকের নাম্বারের যায়গায় নিজের নাম্বার লিখে রাখেন।</Typography></li><br/> 
          <li><Typography>যদি কোনো মিথ্যে তথ্য দেন।</Typography></li><br/> 
          </ul>
         
         
          
        </div>
    )
}

export default RulesContent
