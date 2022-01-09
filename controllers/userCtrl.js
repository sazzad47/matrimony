const Users = require('../models/userModel')

const fs = require("fs");

const userCtrl = {
    searchUser: async (req, res) => {
        const {gender,status,pdistrict} = req.query
        if ((gender===gender) && (status==='none') && (pdistrict==='none')) {
            try {
                const users = await Users.find(
                    
                    {$and:
                        [
                            {approval: 'yes' },  {gender: {$regex: gender}},
                        ]}
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        } else if ((gender==='none') && (status===status) && (pdistrict==='none')) {
            try {
                const users = await Users.find(
                    
                    {$and:
                        [
                            {approval: 'yes' },  {status: {$regex: status}},
                        ]}
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        } else if ((gender==='none') && (status==='none') && (pdistrict===pdistrict)) {
            try {
                const users = await Users.find(
                    
                    {$and:
                        [
                            {approval: 'yes' },  {pdistrict: {$regex: pdistrict}},
                        ]}
                           
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        } else if ((gender===gender) && (status===status) && (pdistrict==='none')) {
            try {
                const users = await Users.find(
                    {$and:
                    [
                        {approval: 'yes' }, {gender: {$regex: gender}},  {status: {$regex: status}},
                    ]}
                            
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        } else if ((gender===gender) && (status==='none') && (pdistrict===pdistrict)) {
            try {
                const users = await Users.find(
                    {$and:
                    [
                        {approval: 'yes' },  {gender: {$regex: gender}},  {pdistrict: {$regex: pdistrict}},
                    ]}
                            
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        } else if ((gender==='none') && (status===status) && (pdistrict===pdistrict)) {
            try {
                const users = await Users.find(
                    {$and:
                    [
                        {approval: 'yes' },  {status: {$regex: status}},  {pdistrict: {$regex: pdistrict}},
                    ]}
                            
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }  else if ((gender===gender) && (status===status) && (pdistrict===pdistrict)) {
            try {
                const users = await Users.find(
                    {$and:
                    [
                        {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}},  {pdistrict: {$regex: pdistrict}},
                    ]}
                            
                           
                   
                    ).select("gender status age pdistrict index groomPhoto bridePhoto")
                    
                res.json({users})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            } 
        
        } 
      
        
        
       
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
            .populate("followers following approvers approved acceptors accepted removers removed notifiers notified", "-password")
            if(!user) return res.status(400).json({msg: "User does not exist."})
            
            res.json({user})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getBiodatas: async (req, res) => {
       
    
    try {
       
    
        
        const biodatas = await Users.find({approval:'yes'})

        res.json({ biodatas});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
    },
    
    getBiodata: async (req, res) => {
       
    const {id} = req.params
    try {
       
    
        
        const biodata = await Users.findById(id, {approval:'yes'})

        res.json({ biodata});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
    },
    
    getPendingBiodatas: async (req, res) => {
       
    
    try {
        
       
     
      
        const pendingBiodatas = await Users.find(
            {$and:
                [
                    {approval: 'no' },  {isPublished: 'yes'},
                ]}
        );

        res.json({pendingBiodatas});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
    },
    approvePending: async (req, res) => {
        try {
            const {approval} = req.body
           
           

            const approvedBiodatas= await Users.findOneAndUpdate({_id: req.params.id}, {
                approval
            })

            res.json({approvedBiodatas})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    declinePending: async (req, res) => {
        try {
            const {approval} = req.body
           
           

            const declinedBiodatas= await Users.findOneAndUpdate({_id: req.params.id}, {
                approval
            })

            res.json({declinedBiodatas})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    
    publishBiodata: async (req, res) => {
        try {
            const {isPublished} = req.body
           
           

           const newBiodata = await Users.findOneAndUpdate({_id: req.user._id}, {
                isPublished
            })

            res.json({
                msg: "আলহামদুলিল্লাহ! আপনার বায়োডাটা আমাদের রিভিউ টিমের কাছে পৌঁছেছে। প্রয়োজনীয় রিভিউ সম্পন্ন করে ৪৮ ঘন্টার মধ্যে আপনার বায়োডাটা পাবলিশ করা হবে ইন-শা-আল্লাহ।",
                newBiodata
            })
               
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    updateUser: async (req, res) => {
        try {
            const {approval,fullname,gender, status,pdivision,pdistrict,pupazila,cdivision,cdistrict,cupazila,age ,color,
                height ,weight ,bg ,prof, detProf, income,disease,eduMedium,
                
                hifz,hifzYear,hifzMadrasa, 
                takmil,takmilYear,takmilMadrasa,takmilResult,takmilJamat,
                takhassus,takhassusSubject,takhassusMadrasa,takhassusYear,
                takhassusResult,story,

                aliaHifz,aliaHifzYear,aliaHifzMadrasa, dakhil,dakhilResult,dakhilGroup,
                dakhilYear,dakhilJamat,
                alim,alimResult,alimGroup,alimYear,alimJamat,
                fazil,fazilMadrasa,fazilYear,fazilJamat,kamil,
                kamilMadrasa,kamilYear,kamilSubject,kamilJamat,

                ssc,sscResult,sscGroup,
                sscYear,sscJamat,
                hsc,hscResult,hscGroup,hscYear,hscJamat,
                diplomaSubject,diplomaMadrasa,diplomaYear,diplomaRunJamat,
                diplomaBsc,diplomaBscSubject,diplomaBscMadrasa,diplomaBscYear,diplomaBscJamat,
                honors,honorsMadrasa,honorsYear,honorsJamat,honorsSubject,masters,
                mastersMadrasa,mastersYear,mastersSubject,mastersJamat,

                fatherN,motherN,fatherO,motherO,brother,
                sister,brotherInfo,sisterInfo,uncleInfo,

                salat,salatCon, dari, takhnu, poshak,mahram,quran,
                iStudy,natok,mehnot,tahajjud,aboutMe,

                lifeP, aMazhab, politics,majar,dayC,
                fAlem,fWriter,

                divorcedC, divorcedCil, cWN,cWP,fWR,mCil,mCilN,
                mCilInfo, marriageC,gPermission,fWPorda,fWJob,fWStudy,
                marriageGift,mWJob,mWStudy, mWKhedmot,mMohrana,

                pAge, pColor, pHeight,pEdu,partDistrict, pStatus,
                pProf,pEconomic,pVirtue,

                gMobile, gRelation, urEmail, urMobile,

                gCVpermit, allTrue, noDayvar,
            } = req.body
            

            await Users.findOneAndUpdate({_id: req.user._id}, {
                approval, fullname,gender, status,pdivision,pdistrict,pupazila,cdivision,cdistrict,cupazila,age ,color,
                height ,weight ,bg ,prof, detProf, income,disease,eduMedium,
                
                hifz,hifzYear,hifzMadrasa, 
                takmil,takmilYear,takmilMadrasa,takmilResult,takmilJamat,
                takhassus,takhassusSubject,takhassusMadrasa,takhassusYear,
                takhassusResult,story,

                aliaHifz,aliaHifzYear,aliaHifzMadrasa, dakhil,dakhilResult,dakhilGroup,
                dakhilYear,dakhilJamat,
                alim,alimResult,alimGroup,alimYear,alimJamat,
                fazil,fazilMadrasa,fazilYear,fazilJamat,kamil,
                kamilMadrasa,kamilYear,kamilSubject,kamilJamat,

                ssc,sscResult,sscGroup,
                sscYear,sscJamat,
                hsc,hscResult,hscGroup,hscYear,hscJamat,
                diplomaSubject,diplomaMadrasa,diplomaYear,diplomaRunJamat,
                diplomaBsc,diplomaBscSubject,diplomaBscMadrasa,diplomaBscYear,diplomaBscJamat,
                honors,honorsMadrasa,honorsYear,honorsJamat,honorsSubject,masters,
                mastersMadrasa,mastersYear,mastersSubject,mastersJamat,

                fatherN,motherN,fatherO,motherO,brother,
                sister,brotherInfo,sisterInfo,uncleInfo,

                salat,salatCon, dari, takhnu, poshak,mahram,quran,iStudy,
                natok,mehnot,tahajjud,aboutMe,

                lifeP, aMazhab, politics,majar,dayC,
                fAlem,fWriter,

                divorcedC, divorcedCil, cWN,cWP,fWR,mCil,mCilN,
                mCilInfo, marriageC,gPermission,fWPorda,fWJob,fWStudy,
                marriageGift,mWJob,mWStudy, mWKhedmot,mMohrana,

                pAge, pColor, pHeight,pEdu,partDistrict, pStatus,
                pProf,pEconomic,pVirtue,

                gMobile, gRelation, urEmail, urMobile,

                gCVpermit, allTrue, noDayvar,
            })

            res.json({msg: "আলহামদুলিল্লাহ! আপনার দেয়া তথ্য আপনার বায়োডাটায় যুক্ত করা হয়েছে।"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    approve: async (req, res) => {
        try {
            const user = await Users.find({_id: req.params.id, approvers: req.user._id})
            if(user.length > 0) return res.status(500).json({msg: "You approved this user."})

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {approvers: req.user._id}
            }, {new: true}).populate("approvers approved", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {approved: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    decline: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $pull: {approvers: req.user._id}
            }, {new: true}).populate("approvers approved", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {approved: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   
    follow: async (req, res) => {
        try {
            const user = await Users.find({_id: req.params.id, followers: req.user._id})
            if(user.length > 0) return res.status(500).json({msg: "You followed this user."})

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {followers: req.user._id}
            }, {new: true}).populate("followers following", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {following: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    unfollow: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $pull: {followers: req.user._id}
            }, {new: true}).populate("followers following", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {following: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    accept: async (req, res) => {
        try {
            const user = await Users.find({_id: req.params.id, acceptors: req.user._id})
            if(user.length > 0) return res.status(500).json({msg: "You followed this user."})

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {acceptors: req.user._id}
            }, {new: true}).populate("acceptors accepted", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {accepted: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    reject: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $pull: {acceptors: req.user._id}
            }, {new: true}).populate("acceptors accepted", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {accepted: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    remove: async (req, res) => {
        try {
            const user = await Users.find({_id: req.params.id, removers: req.user._id})
            if(user.length > 0) return res.status(500).json({msg: "You removed this user."})

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {removers: req.user._id}
            }, {new: true}).populate("removers removed", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {removed: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    cancelRemoval: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $pull: {removers: req.user._id}
            }, {new: true}).populate("removers removed", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {removed: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    notifyUser: async (req, res) => {
        try {
            const user = await Users.find({_id: req.params.id, notifiers: req.user._id})
            if(user.length > 0) return res.status(500).json({msg: "You notified this user."})

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {notifiers: req.user._id}
            }, {new: true}).populate("notifiers notified", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {notified: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    cancelNotification: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $pull: {notifiers: req.user._id}
            }, {new: true}).populate("notifiers notified", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {notified: req.params.id}
            }, {new: true})

            res.json({newUser})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    suggestionsUser: async (req, res) => {
        try {
            const newArr = [...req.user.following, req.user._id]

            const num  = req.query.num || 10

            const users = await Users.aggregate([
                { $match: { _id: { $nin: newArr } } },
                { $sample: { size: Number(num) } },
                { $lookup: { from: 'users', localField: 'followers', foreignField: '_id', as: 'followers' } },
                { $lookup: { from: 'users', localField: 'following', foreignField: '_id', as: 'following' } },
            ]).project("-password")

            return res.json({
                users,
                result: users.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    downloadPDF:(req, res) => {
       

            res.download("./aqida.pdf");
            

        
    },
}


module.exports = userCtrl