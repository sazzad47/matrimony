const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);


const userSchema = new mongoose.Schema({
    index:Number,

    fullname: {
        type: String,
        default: '',
        
        maxlength: 25
    },
    username: {
        type: String,
        
        trim: true,
        
        unique: true
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    approval: {
        type: String,
        default: '',
    },
    isPublished: {
        type: String,
        default: '',
    },
   

    gender: {
        type: String,
        default: '',
        },
    status: {
        type: String,
        default: '',
        },
    pdivision: {
         type: String,
         default: '',
         },
    pdistrict: {
         type: String,
         default: '',
         },
    pupazila: {
         type: String,
         default: '',
         },
    cdivision: {
         type: String,
         default: '',
         },
    cdistrict: {
         type: String,
         default: '',
         },
    cupazila: {
         type: String,
         default: '',
         },
    age: {
        type: String,
        default: '',
        },
    color: {
        type: String,
        default: '',
        },
    height: {
        type: String,
        default: '',
        },
    weight: {
        type: String,
        default: '',
        },
    bg: {
        type: String,
        default: '',
        },
    prof: {
        type: String,
        default: '',
        },
    detProf: {
        type: String,
        default: '',
        },
    income: {
        type: String,
        default: '',
        },
    disease: {
        type: String,
        default: '',
        },

    eduMedium: {
        type: String,
        default: '',
        },
    hifz: {
        type: String,
        default: '',
        },
    hifzYear: {
        type: String,
        default: '',
        },
    hifzMadrasa: {
        type: String,
        default: '',
        },
    takmil: {
        type: String,
        default: '',
        },
    takmilYear: {
        type: String,
        default: '',
        },
    takmilMadrasa: {
        type: String,
        default: '',
        },
    takmilResult: {
        type: String,
        default: '',
        },
    takmilJamat: {
        type: String,
        default: '',
        },
    takhassus: {
        type: String,
        default: '',
        },
    takhassusSubject: {
        type: String,
        default: '',
        },
    takhassusMadrasa: {
        type: String,
        default: '',
        },
    takhassusYear: {
        type: String,
        default: '',
        },
    takhassusResult: {
        type: String,
        default: '',
        },
    story: {
        type: String,
        default: '',
        },
    aliaHifz: {
        type: String,
        default: '',
        },
    aliaHifzYear: {
        type: String,
        default: '',
        },
    aliaHifzMadrasa: {
        type: String,
        default: '',
        },
    dakhil: {
        type: String,
        default: '',
        },
    dakhilResult: {
        type: String,
        default: '',
        },
    dakhilGroup: {
        type: String,
        default: '',
        },
    dakhilYear: {
        type: String,
        default: '',
        },
    dakhilJamat: {
        type: String,
        default: '',
        },
    alim: {
        type: String,
        default: '',
        },
    alimResult: {
        type: String,
        default: '',
        },
    alimGroup: {
        type: String,
        default: '',
        },
    alimYear: {
        type: String,
        default: '',
        },
    alimJamat: {
        type: String,
        default: '',
        },
    fazil: {
        type: String,
        default: '',
        },
    fazilMadrasa: {
        type: String,
        default: '',
        },
    fazilYear: {
        type: String,
        default: '',
        },
    fazilJamat: {
        type: String,
        default: '',
        },
    kamil: {
        type: String,
        default: '',
        },
    kamilMadrasa: {
        type: String,
        default: '',
        },
    kamilYear: {
        type: String,
        default: '',
        },
    kamilSubject: {
        type: String,
        default: '',
        },
    kamilJamat: {
        type: String,
        default: '',
        },
    ssc: {
        type: String,
        default: '',
        },
    sscResult: {
        type: String,
        default: '',
        },
    sscGroup: {
        type: String,
        default: '',
        },
    sscYear: {
        type: String,
        default: '',
        },
    sscJamat: {
        type: String,
        default: '',
        },
    hsc: {
        type: String,
        default: '',
        },
    hscResult: {
        type: String,
        default: '',
        },
    hscGroup: {
        type: String,
        default: '',
        },
    hscYear: {
        type: String,
        default: '',
        },
    hscJamat: {
        type: String,
        default: '',
        },
    diplomaSubject: {
        type: String,
        default: '',
        },
    diplomaMadrasa: {
        type: String,
        default: '',
        },
    diplomaYear: {
        type: String,
        default: '',
        },
    diplomaRunJamat: {
        type: String,
        default: '',
        },
    diplomaBsc: {
        type: String,
        default: '',
        },
    diplomaBscSubject: {
        type: String,
        default: '',
        },
    diplomaBscMadrasa: {
        type: String,
        default: '',
        },
    diplomaBscYear: {
        type: String,
        default: '',
        },
    diplomaBscJamat: {
        type: String,
        default: '',
        },
    honors: {
        type: String,
        default: '',
        },
    honorsMadrasa: {
        type: String,
        default: '',
        },
    honorsYear: {
        type: String,
        default: '',
        },
    honorsJamat: {
        type: String,
        default: '',
        },
    honorsSubject: {
        type: String,
        default: '',
        },
    masters: {
        type: String,
        default: '',
        },
    mastersMadrasa: {
        type: String,
        default: '',
        },
    mastersYear: {
        type: String,
        default: '',
        },
    mastersSubject: {
        type: String,
        default: '',
        },
    mastersJamat: {
        type: String,
        default: '',
        },
    fatherN: {
        type: String,
        default: '',
        },
    motherN: {
        type: String,
        default: '',
        },
    fatherO: {
        type: String,
        default: '',
        },
    motherO: {
        type: String,
        default: '',
        },
    brother: {
        type: String,
        default: '',
        },
    sister: {
        type: String,
        default: '',
        },
    brotherInfo: {
        type: String,
        default: '',
        },
    sisterInfo: {
        type: String,
        default: '',
        },
    uncleInfo: {
        type: String,
        default: '',
        },
    salat: {
        type: String,
        default: '',
        },
    salatCon: {
        type: String,
        default: '',
        },
    dari: {
        type: String,
        default: '',
        },
    takhnu: {
        type: String,
        default: '',
        },
    poshak: {
        type: String,
        default: '',
        },
    mahram: {
        type: String,
        default: '',
        },
    quran: {
        type: String,
        default: '',
        },
    iStudy: {
        type: String,
        default: '',
        },
    natok: {
        type: String,
        default: '',
        },
    mehnot: {
        type: String,
        default: '',
        },
    tahajjud: {
        type: String,
        default: '',
        },
    aboutMe: {
        type: String,
        default: '',
        },
   
    lifeP: {
        type: String,
        default: '',
        },
   
    aMazhab: {
        type: String,
        default: '',
        },
   
    politics: {
        type: String,
        default: '',
        },
   
    majar: {
        type: String,
        default: '',
        },
   
    dayC: {
        type: String,
        default: '',
        },
   
    fAlem: {
        type: String,
        default: '',
        },
   
    fWriter: {
        type: String,
        default: '',
        },
    divorcedC: {
        type: String,
        default: '',
        },
    divorcedCil: {
        type: String,
        default: '',
        },
    cWN: {
        type: String,
        default: '',
        },
    cWP: {
        type: String,
        default: '',
        },
    fWR: {
        type: String,
        default: '',
        },
    mCil: {
        type: String,
        default: '',
        },
    mCilN: {
        type: String,
        default: '',
        },
    mCilInfo: {
        type: String,
        default: '',
        },
    marriageC: {
        type: String,
        default: '',
        },
    gPermission: {
        type: String,
        default: '',
        },
    fWPorda: {
        type: String,
        default: '',
        },
    fWJob: {
        type: String,
        default: '',
        },
    fWStudy: {
        type: String,
        default: '',
        },
    marriageGift: {
        type: String,
        default: '',
        },
    mWJob: {
        type: String,
        default: '',
        },
    mWStudy: {
        type: String,
        default: '',
        },
    mWKhedmot: {
        type: String,
        default: '',
        },
    mMohrana: {
        type: String,
        default: '',
        },
    pAge: {
        type: String,
        default: '',
        },
    pColor: {
        type: String,
        default: '',
        },
    pHeight: {
        type: String,
        default: '',
        },
    pEdu: {
        type: String,
        default: '',
        },
    partDistrict: {
        type: String,
        default: '',
        },
    pStatus: {
        type: String,
        default: '',
        },
    pProf: {
        type: String,
        default: '',
        },
    pEconomic: {
        type: String,
        default: '',
        },
    pVirtue: {
        type: String,
        default: '',
        },
    gMobile: {
        type: String,
        default: '',
        },
    gRelation: {
        type: String,
        default: '',
        },
    urEmail: {
        type: String,
        default: '',
        },
    urMobile: {
        type: String,
        default: '',
        },
    gCVpermit: {
        type: String,
        default: '',
        },
    allTrue: {
        type: String,
        default: '',
        },
    noDayvar: {
        type: String,
        default: '',
        },
    
   
    
   
    
    



    groomPhoto:{
        type: String,
        default: 'https://res.cloudinary.com/sazzadhossen/image/upload/v1636472870/groomPhoto_pxz7px.png'
    },
    bridePhoto:{
        type: String,
        default: 'https://res.cloudinary.com/sazzadhossen/image/upload/v1636472838/bridePhoto_mkvr1t.png'
    },
    role: {type: String, default: 'user'},
   
   
    
    address: {type: String, default: ''},
    story: {
        type: String, 
        default: '',
        
    },
    
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    acceptors: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    accepted: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    approvers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    approved: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    removers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    removed: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    notifiers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    notified: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    saved: [{type: mongoose.Types.ObjectId, ref: 'user'}]
}, {
    timestamps: true
});

userSchema.plugin(AutoIncrement, {inc_field: 'index'});
module.exports = mongoose.model('user', userSchema)