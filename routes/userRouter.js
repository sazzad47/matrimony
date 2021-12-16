const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/userCtrl")
const searchCtrl = require("../controllers/searchCtrl")
const applicantCtrl = require("../controllers/applicantCtrl")
const deleteCtrl = require('../controllers/deleteCtrl')
const reportCtrl = require('../controllers/reportCtrl')

router.patch('/user/:id/approve', auth, userCtrl.approve)

router.patch('/user/:id/publish', auth, userCtrl.publishBiodata)

router.patch('/user/:id/decline', auth, userCtrl.decline)

router.get('/search', userCtrl.searchUser)

router.get('/biodatas', userCtrl.getBiodatas)
router.get('/biodata/:id', userCtrl.getBiodata)
router.get('/pendingBiodatas', userCtrl.getPendingBiodatas)
router.patch('/biodatas/:id/approve', userCtrl.approvePending)
router.patch('/biodatas/:id/decline', userCtrl.declinePending)

// router.get('/search', userCtrl.getBiodatasBySearch)

router.get('/user/:id', auth, userCtrl.getUser)

router.patch('/user', auth, userCtrl.updateUser)

router.patch('/user/:id/follow', auth, userCtrl.follow)
router.patch('/user/:id/unfollow',auth, userCtrl.unfollow)

router.patch('/user/:id/accept',auth, userCtrl.accept)
router.patch('/user/:id/reject',auth,  userCtrl.reject)

router.patch('/user/:id/remove',auth, userCtrl.remove)
router.patch('/user/:id/cancelRemoval',auth, userCtrl.cancelRemoval)

router.patch('/user/:id/notifyUser',auth, userCtrl.notifyUser)
router.patch('/user/:id/cancelNotification',auth, userCtrl.cancelNotification)

router.get('/suggestionsUser',auth, userCtrl.suggestionsUser)
router.post('/contact', applicantCtrl.createApplicant)
router.get('/getApplicant', applicantCtrl.getApplicant)
router.patch('/updateApplicant/:id', applicantCtrl.updateApplicant)
router.post('/deleteBiodata', deleteCtrl.createApplicant)
router.get('/getDeleteRequests', deleteCtrl.getApplicant)
router.patch('/updateDeleteRequest/:id', deleteCtrl.updateApplicant)
router.post('/report', reportCtrl.createApplicant)
router.get('/getReports', reportCtrl.getApplicant)
router.patch('/updateReport/:id', reportCtrl.updateApplicant)


module.exports = router