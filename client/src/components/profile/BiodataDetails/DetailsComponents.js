import React from 'react'
import AddressInfo from '../AddressInfo'
import AqidaInfo from '../AqidaInfo'
import BasicInfo from '../BasicInfo'
import ContactBtn from '../ContactBtn'
import ContactInfo from '../ContactInfo'
import EducationalInfo from '../EducationalInfo'
import FamilyInfo from '../FamilyInfo'
import MaritalInfo from '../MaritalInfo'
import PartnerInfo from '../PartnerInfo'
import ProfInfo from '../ProfInfo'
import QuestionsInfo from '../QuestionsInfo'
import TaqwaInfo from '../TaqwaInfo'

const DetailsComponents = ({user}) => {
    return (
        <div>
            <div className = "row "> {user.height===""? null :
                <div className = "col-md-4">
                  
                     <div className="">
                <BasicInfo user = {user} /> 
               </div>
                </div>}
                <div className ="col-md-8 ">
                
                {user.pdivision===""? null :
                 <div className = "row">
                     <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 
                 <AddressInfo user = {user}/> 
                     </div>
                 </div>}
                 {user.detProf===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <ProfInfo user ={user} />
                 </div>
                 </div>}
                 {user.eduMedium===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <EducationalInfo user ={user} />
                 </div>
                 </div>}
                 
                 {user.motherO===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <FamilyInfo user = {user} />
                 </div>
                 </div>}
                 {user.salat===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                         
                 <TaqwaInfo user = {user} />
                 </div>
                 </div>}
                 {user.lifeP===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                         
                 <AqidaInfo user = {user} />
                 </div>
                 </div>}
                 {user.gPermission===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                        
                 <MaritalInfo user = {user} />
                 </div>
                 </div>}
                 {user.partDistrict===""? null : 
                 <div className ="row">-
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <PartnerInfo user = {user} />
                 </div>
                 </div>}
                 
                
                 {user.allTrue===""? null :
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <QuestionsInfo user = {user} />
                 </div>
                 </div>}

                 
                 
                 <div className ="row">
                 <div className="info-block-container ml-3 ml-md-3 ml-lg-5 
                     mr-3 mr-md-3 mr-lg-3 mt-5 mt-md-5 mt-lg-0 mb-0 mb-md-0 mb-lg-5" >
                 <ContactBtn user = {user} />
                 </div>
                 </div>
                </div>
            </div> 
               </div>
    )
}

export default DetailsComponents
