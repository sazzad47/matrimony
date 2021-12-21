import React from 'react'
import {Button,Card,Grid,Paper} from "@material-ui/core"
import { Link } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import AddressInfo from './AddressInfo';
import EducationalInfo from './EducationalInfo';
import FamilyInfo from './FamilyInfo';
import TaqwaInfo from './TaqwaInfo';
import AqidaInfo from './AqidaInfo';
import MaritalInfo from './MaritalInfo';
import PartnerInfo from './PartnerInfo';
import ContactInfo from './ContactInfo';
import QuestionsInfo from './QuestionsInfo';
import ProfInfo from './ProfInfo';
import ButtonContainer from './ButtonContainer';
import ApplicationForm from '../../pages/contactRequest';
import ContactBtn from './ContactBtn';
import Dashboard from './Dashboard';




const SingleBio = ({id, dispatch, user, auth, profile}) => {


    return (
        <div className='biodatas_page'>
            <div className = "row "> {user.height===""? null :
                <div className = "col-md-4">
                  <div className="info-block-container d-block d-md-none d-lg-none
                     mb-4" >
                 
                 <ButtonContainer user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/> 
                     </div>  
                  
                     <div className="">
                <BasicInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/> 
               </div>
                </div>}
                <div className ="col-md-8 ">
                
                {auth.user? 
                 <div className = "row">
                     <div className="info-block-container d-none d-md-block d-lg-block ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 
                 <ButtonContainer user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/> 
                     </div>
                 </div>:null}
                {user.pdivision===""? null :
                 <div className = "row">
                     <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 
                 <AddressInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/> 
                     </div>
                 </div>}
                 {user.detProf===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <ProfInfo user ={user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 {user.eduMedium===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <EducationalInfo user ={user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 
                 {user.motherO===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <FamilyInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 {user.salat===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                         
                 <TaqwaInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 {user.lifeP===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                         
                 <AqidaInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 {user.gPermission===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <MaritalInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 {user.partDistrict===""? null : 
                 <div className ="row">-
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <PartnerInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
                 
                
                 {user.allTrue===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <QuestionsInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}

                {auth.user.role==="admin"?<div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <ContactInfo user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>:null}
                 {auth.user.approvers.find(item => item._id===user._id)? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <ContactBtn user = {user} auth ={auth} profile ={profile} id ={id} dispatch ={dispatch}/>
                 </div>
                 </div>}
               
                </div>
            </div> 
               

               

               
               
              
               
               
              
               
              
               
        </div>
    )
}

export default SingleBio
