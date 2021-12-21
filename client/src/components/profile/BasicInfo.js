import { Button, Card } from '@material-ui/core'
import React from 'react'
import Avatar from '../Avatar'

const BasicInfo = ({id, dispatch, user, profile}) => {
    return (
        <div>
        <Card >
         
         <div className="profileText">
             <div className="imgBx">
             {
                 user.gender==='পাত্রের বায়োডাটা'?
                 <img src={user.groomPhoto} />
                 :  <img src={user.bridePhoto} />
             }
             </div>
             <h2>Biodata No-{user.index}</h2>
           </div>

           {user.gender===""? null
           : <div className="basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বায়োডাটার ধরণ</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.gender}
</div>   
      </div>
       </div>
      </div>}
          {user.status===""? null
          : <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বৈবাহিক অবস্থা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.status}
</div>   
      </div>
       </div>
      </div>}
         {user.pdistrict===""? null
         :  <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">স্থায়ী ঠিকানা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.pdistrict}
</div>   
      </div>
       </div>
      </div>}
          {user.pdivision===""? null
          : <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বিভাগ</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.pdivision}
</div>   
      </div>
       </div>
      </div>}
         {user.cdistrict===""? null 
         : <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বর্তমান ঠিকানা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.cdistrict}
</div>   
      </div>
       </div>
      </div>}
      {user.cdivision===""? null
          : <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বিভাগ</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.cdivision}
</div>   
      </div>
       </div>
      </div>}
      {user.age===""? null
         :  <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বয়স</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.age}
</div>   
      </div>
       </div>
      </div>}

      {user.color===""? null
           :<div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">বর্ণ</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.color}
</div>   
      </div>
       </div>
      </div>}
           {user.height===""? null
           : <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">উচ্চতা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.height}
</div>   
      </div>
       </div>
      </div>}
         {user.weight===""? null
         :  <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">ওজন</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.weight}
</div>   
      </div>
       </div>
      </div>}
        {user.bg===""? null
        :<div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">রক্তের গ্রুপ</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.bg}
</div>
      </div>
       </div>
      </div>}
         {user.prof===""? null
         :  <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">পেশা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.prof}
</div>   
      </div>
       </div>
      </div>}
         {user.income===""? null
         :  <div className=" basicInfo"> 
          
          <div className="row px-4 px-lg-5 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="textQ">মাসিক আয়</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="textA">{user.income}
</div>   
      </div>
       </div>
      </div>}
          
      <div className='basicInfo'>
      <div className="row" >
      <div className="col-md-12 w-100 "><hr className="basicInfo-ft"/>
      
      </div> 
     
      
     
      </div>
      </div>
      <div className='basicInfo-last'>
      <div className="row" >
     
     
      
     
      </div>
      </div>

           
           </Card> 
           </div>
    )
}

export default BasicInfo
