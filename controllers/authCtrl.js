const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {google} = require('googleapis')
const {OAuth2} = google.auth
const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const authCtrl = {
    register: async (req, res) => {
        try {
            const { fullname, email, password} = req.body
            

            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg: "এই ই-মেইল এড্রেসটি ব্যবহৃত হয়ে গেছে। একটি নতুন ই-মেইল এড্রেস দিন।"})

            if(password.length < 6)
            return res.status(400).json({msg: "ন্যূনতম ৬ ক্যারেক্টারের একটি পাসওয়ার্ড দিন।"})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                fullname, email, password: passwordHash
            })


            const access_token = createAccessToken({id: newUser._id})
            const refresh_token = createRefreshToken({id: newUser._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            await newUser.save()

            res.json({
                msg: 'Register Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({email})
            .populate("followers followers.index  following acceptors accepted approvers approved removers removed notifiers notified", "avatar username fullname followers following acceptors accepted approvers approved removers removed notifiers notified")

            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const access_token = createAccessToken({id: user._id})
            const refresh_token = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/api/refresh_token'})
            return res.json({msg: "Logged out!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    googleLogin: async (req, res) => {
        try {
            const {tokenId} = req.body

            const verify = await client.verifyIdToken({idToken: tokenId, audience: process.env.MAILING_SERVICE_CLIENT_ID})
            
            const {email_verified, email, name, picture} = verify.payload

            const password = email + process.env.GOOGLE_SECRET

            const passwordHash = await bcrypt.hash(password, 12)

            if(!email_verified) return res.status(400).json({msg: "Email verification failed."})

            const user = await Users.findOne({email})
            .populate("followers following acceptors accepted approvers approved removers removed notifiers notified", "avatar username fullname followers following acceptors accepted approvers approved removers removed notifiers notified")


            if(user){
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const access_token = createAccessToken({id: user._id})
            const refresh_token = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
            }else{
                const newUser = new Users({
                    fullname: name, email, password: passwordHash
                })
    
    
                const access_token = createAccessToken({id: newUser._id})
                const refresh_token = createRefreshToken({id: newUser._id})
    
                res.cookie('refreshtoken', refresh_token, {
                    httpOnly: true,
                    path: '/api/refresh_token',
                    maxAge: 30*24*60*60*1000 // 30days
                })
    
                await newUser.save()
    
                res.json({
                    msg: 'Register Success!',
                    access_token,
                    user: {
                        ...newUser._doc,
                        password: ''
                    }
                })
            }


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Please login now."})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async(err, result) => {
                if(err) return res.status(400).json({msg: "Please login now."})

                const user = await Users.findById(result.id).select("-password")
                .populate('followers followers.index following acceptors accepted approvers approved removers removed notifiers notified', 'avatar username fullname followers following acceptors accepted approvers approved removers removed notifiers notified')

                if(!user) return res.status(400).json({msg: "This does not exist."})

                const access_token = createAccessToken({id: result.id})

                res.json({
                    access_token,
                    user
                })
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'})
}

module.exports = authCtrl