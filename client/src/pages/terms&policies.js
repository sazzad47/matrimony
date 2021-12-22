import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Terms = () => {
    return (
        <div className="App"> 
      <Typography gutterBottom variant="h5" align="center">
      Terms & Privacy Policies
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="body3">
            <Typography variant='h6' style={{fontWeight:'bold'}}>Registration:</Typography> <br/>
            <ul>
                <li><Typography>Registration is open only to the practicing Muslims of legal marriageable age who are not prohibited from matrimony by any law or decree or injunction from any competent authority.</Typography></li>
                <li><Typography>Multiple profiles of the same user are not allowed on JannaterSathi.com. We reserve the right to remove all multiple profiles without any notice.</Typography></li>
                <li><Typography>We reserve the right to monitor the activity of each account and block the account if necessary.</Typography></li>
                <li><Typography>In order to protect JannaterSathi.com from any abuse, we reserve the right to take appropriate steps.</Typography></li>
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Payment Policy:</Typography> <br/>
            <ul>
                <li><Typography>You don't need to pay for publishing your bio-data on our website. However, you have to pay us to get the contact information (user's email address and guardian's phone number) of  a particular user.</Typography></li>
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Privacy Policy:</Typography> <br/>
            <ul>
                <li><Typography>You must provide all personal and family information, such as your name, email address, phone number, and so on, in order to create a bio-data on our website.</Typography></li>
                <li><Typography>Your information will be presented in your bio-data in such a way that visitors will not be able to determine your identify.</Typography></li>
                <li><Typography>We will only share your contact information with any investigator if you give us permission to do so. However, we reserve the right to provide your contact information (your email address and guardian's phone number) without your permission.</Typography></li>
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Termination:</Typography> <br/>
            <ul>
                <li><Typography>You can delete or hide your bio-data at any time for any reason by writing to JannaterSathi.com.</Typography></li>
                
            </ul><br/>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Disclaimer:</Typography> <br/>
            <Typography>JannaterSathi.com is not responsible for any incorrect or deceptive information. Following contact, visitors themselves are responsible for checking the information provided in a bio-data. After providing the user's contact information, we are not involved in any subsequent interaction in any way.</Typography>
            <br/>
          </Typography> 
            
            
          </CardContent>
        </Card>
      </Grid>
    </div>
    )
}

export default Terms
