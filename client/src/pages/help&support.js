import React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';

const Help = () => {
    return (
      <>
      <Helmet>
          <title>সাধারণ প্রশ্ন ও উত্তর</title>
          <meta name='description' content='আপনাদের ওয়েবসাইটে বায়োডাটা পাবলিশ করতে কতো টাকা দিতে হয়? কোনো টাকা দিতে হয় না..'/>
          <link rel='canonical' href='/help&support'/>
         </Helmet>
        <div className="App"> 
           <Typography gutterBottom variant="h5" align="center"> সাধারণ প্রশ্ন ও উত্তর</Typography>
      <Grid>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
          <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem style={{marginBottom:'20px'}} nodeId="1" label="এই ওয়েবসাইটে কি সবাই বায়োডাটা জমা দিতে পারে?">
        <TreeItem nodeId="2" label="না, এই ওয়েবসাইটে শুধু প্র্যাক্টিসিং মুসলিমরা বায়োডাটা জমা দিতে পারে।" />
      </TreeItem>
      <TreeItem style={{marginBottom:'20px'}} nodeId="3" label="বায়োডাটা জমা দিতে কতো টাকা লাগে?">
        <TreeItem nodeId="4" label="কোনো টাকা লাগে না।" />
      </TreeItem>
      <TreeItem style={{marginBottom:'20px'}} nodeId="5" label="আপনাদের মাধ্যমে বিয়ে হলে আপনাদেরকে কতো টাকা দিতে হয়?">
        <TreeItem nodeId="6" label="কোনো টাকা দিতে হয় না।" />
      </TreeItem>
      <TreeItem style={{marginBottom:'20px'}} nodeId="7" label="বায়োডাটা পাবলিশ করলে কি আমার পরিচয় গোপন থাকবে?">
        <TreeItem nodeId="8" label="জ্বী, ইন শা আল্লাহ ১০০% গোপন থাকবে। বায়োডাটায় আপনার দেয়া তথ্য এমনভাবে উপস্থাপন করা হবে যে, মানুষ আপনার সম্পর্কে জানতে পারবে, কিন্তু আপনাকে কেউ চিনতে পারবে না।" />
      </TreeItem>
      <TreeItem style={{marginBottom:'20px'}} nodeId="9" label="আমি আমার উচ্চতা, ওজন, বর্ণ, ইত্যাদি ব্যক্তিগত তথ্য সবার সামনে পাবলিশ করতে চাই না। এক্ষেত্রে আমার করণীয় কী?">
        <TreeItem nodeId="10" label="আপনি পাবলিশ বাটনে না চাপলে আপনার বায়োডাটা পাবলিশ করা হবে না। বায়োডাটা তৈরি সম্পন্ন হলে আপনার কাঙ্ক্ষিত পাত্রপক্ষকে বায়োডাটা পাঠাতে পারবেন। এক্ষেত্রে আপনার বায়োডাটা শুধু পাত্রপক্ষ দেখতে পাবে, অন্য কেউ দেখতে পাবে না। এই সুবিধাটি শুধুমাত্র নারীদের ক্ষেত্রে প্রযোজ্য।" />
      </TreeItem>
      
    </TreeView>
           
          </CardContent>
        </Card>
      </Grid>
    </div>
       </>
    )
}

export default Help
