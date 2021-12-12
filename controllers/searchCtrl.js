const Users = require('../models/userModel')

const searchCtrl = {
searchUser: async (req, res) => {
    const {gender,status,pdivision,pdistrict,pupazila,index} = req.query
    if ((gender===gender) && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                    [
                        {approval: 'yes' },  {gender: {$regex: gender}},
                    ]}
                        
                       
               
                ).limit(10).select("gender status pdistrict age index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender==='none') && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                
                {$and:
                    [
                        {approval: 'yes' },  {status: {$regex: status}},
                    ]}
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                
                {$and:
                    [
                        {approval: 'yes' },  {pdivision: {$regex: pdivision}},
                    ]}
                       
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                
                {$and:
                    [
                        {approval: 'yes' },  {pdistrict: {$regex: pdistrict}},
                    ]}
                       
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pupazila: {$regex: pupazila}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' },  {index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender===gender) && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' },  {gender: {$regex: gender}},  {status: {$regex: status}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } if ((gender===gender) && (status==='none') && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {pdivision: {$regex: pdivision}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status==='none') && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdistrict: {$regex: pdistrict}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict==='none') && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pupazila: {$regex: pupazila}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision==='none') && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender==='none') && (status==='none') && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}}, {index: {$regex: index}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index==='none')) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status==='none') && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},{index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision==='none') && (pdistrict===pdistrict) && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}},{index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict==='none') && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pupazila: {$regex: pupazila}},{index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila==='none') && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}},{index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } if ((gender===gender) && (status===status) && (pdivision===pdivision) && (pdistrict===pdistrict) && (pupazila===pupazila) && (index===index)) {
        try {
            const users = await Users.find(
                {$and:
                [
                    {approval: 'yes' }, {gender: {$regex: gender}}, {status: {$regex: status}}, {pdivision: {$regex: pdivision}}, {pdistrict: {$regex: pdistrict}}, {pupazila: {$regex: pupazila}}, {index: {$regex: index}}, 
                ]}
                        
                       
               
                ).limit(10).select("gender status age pdistrict index avatar")
                
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        } 
    
    } 
  
    
    
   
},
}

module.exports = searchCtrl