const Applicants = require('../models/deleteModel')

const deleteCtrl = {
    createApplicant: async (req, res) => {
        try {
            const { fullname, mobile, email, reason, action, biodataNumber,} = req.body

            if(fullname === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।"})
            if(mobile === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার মোবাইল নাম্বার লিখুন।"})
            if(email === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার ই-মেইল এড্রেস লিখুন।"})
           
            if(biodataNumber === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার বায়োডাটা নং লিখুন।"})
            

            const newApplicant = new Applicants({
                fullname, mobile, email, reason, action, biodataNumber,
            })
            await newApplicant.save()

            res.json({
                msg: 'আলহামদুলিল্লাহ! আপনার আবেদন আমাদের নিকট পৌঁছেছে। যতদ্রুত সম্ভব আপনার বায়োডাটা ডিলিট/হাইড করে আপনাকে একটি কনফার্মেশন ই-মেইল পাঠানো হবে ইন শা আল্লাহ।',
                newApplicant
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getApplicant: async (req, res) => {
        try {
         const applicants = await Applicants.find({ done: 'no' })
            res.json({applicants})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateApplicant: async (req, res) => {
        try {
            const {done} = req.body
           
           

            const newApplicant= await Applicants.findOneAndUpdate({_id: req.params.id}, {
                done
            })

            res.json({newApplicant})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = deleteCtrl