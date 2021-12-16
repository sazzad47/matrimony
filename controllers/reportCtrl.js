const Applicants = require('../models/reportModel')

const reportCtrl = {
    createApplicant: async (req, res) => {
        try {
            const { fullname, email, subject, report,} = req.body

            if(fullname === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।"})
            
            if(email === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার ই-মেইল এড্রেস লিখুন।"})
           
            
            

            const newApplicant = new Applicants({
                fullname, email, subject, report,
            })
            await newApplicant.save()

            res.json({
                msg: 'আলহামদুলিল্লাহ! আপনার রিপোর্ট আমাদের নিকট পৌঁছেছে।',
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

module.exports = reportCtrl