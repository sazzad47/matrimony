const Applicants = require('../models/applicantModel')

const applicantCtrl = {
    createApplicant: async (req, res) => {
        try {
            const { fullname, mobile, email, district, totalPrice, biodataNumber, phoneNumber,trxID } = req.body

            if(fullname === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।"})
            if(mobile === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার মোবাইল নাম্বার লিখুন।"})
            if(email === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার ই-মেইল এড্রেস লিখুন।"})
            if(district === null)
            return res.status(400).json({msg: "অনুগ্রহ করে আপনার জেলার নাম লিখুন।"})
            if(totalPrice === null)
            return res.status(400).json({msg: "অনুগ্রহ করে বায়োডাটার সংখ্যা নির্ধারণ করুন।"})
            if(biodataNumber === null)
            return res.status(400).json({msg: "আপনি কোন কোন বায়োডাটার যোগাযোগ তথ্য চাচ্ছেন, অনুগ্রহ করে তা লিখুন।"})
            if(phoneNumber === null)
            return res.status(400).json({msg:  "আপনি কোন নাম্বার থেকে টাকা পাঠিয়েছেন, অনুগ্রহ করে তা লিখুন।"})
            if(trxID === null)
            return res.status(400).json({msg: "অনুগ্রহ করে Transaction ID লিখুন।"})

            const newApplicant = new Applicants({
                fullname, mobile, email, district, totalPrice, biodataNumber, phoneNumber,trxID
            })
            await newApplicant.save()

            res.json({
                msg: 'আলহামদুলিল্লাহ! আপনার আবেদন সম্পন্ন হয়েছে। ৪৮ ঘন্টার মধ্যে আপনার দেয়া মোবাইল নাম্বারে যোগাযোগ তথ্য পাঠিয়ে দেয়া হবে ইন-শা-আল্লাহ।',
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

module.exports = applicantCtrl