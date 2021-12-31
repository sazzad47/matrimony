import React from 'react'
import {Card,Typography, Grid} from '@material-ui/core'

const Footer = () => {
    return (
        <Card style={{marginTop:'30px', backgroundColor:'#002884', color:'#ffffff'}} >
            <hr/>
           <Grid 
           container
           alignItems='center'
           justifyContent='center'
           >
               <Grid style={{display:'flex',justifyContent:'center'}} item xs={12} sm={6} md={6} lg={6}>
               <a href="https://www.facebook.com/JannaterSathiOfficial" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                    <Typography>আমাদের ফেইসবুক পেইজ</Typography>
                </a>
               </Grid>
               <Grid style={{display:'flex',justifyContent:'center'}} item xs={12} sm={6} md={6} lg={6}>
               <a href="https://www.facebook.com/groups/jannatersathi" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                   <Typography>আমাদের ফেইসবুক গ্রুপ</Typography>
                </a>
               </Grid>
           </Grid>
           <Grid style={{display:'flex',justifyContent:'center', marginTop:'30px',}}>

           &copy; 2022 JannaterSathi.com
           </Grid>
        </Card>
    )
}

export default Footer
