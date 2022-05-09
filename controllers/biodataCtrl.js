const Users = require('../models/userModel')
const fs = require("fs");

const biodataCtrl = {
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

        hideBiodata: async (req, res) => {
            try {
                const {isPublished} = req.body
               
               
    
                const hiddenBiodatas= await Users.findOneAndUpdate({_id: req.params.id}, {
                    isPublished
                })
    
                res.json({hiddenBiodatas})
    
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        deleteBiodata: async (req, res) => {
            try {
                const {isPublished} = req.body
               
               
    
                const deletedBiodatas= await Users.findOneAndUpdate({_id: req.params.id}, {
                    isPublished
                })
    
                res.json({deletedBiodatas})
    
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
}

module.exports = biodataCtrl