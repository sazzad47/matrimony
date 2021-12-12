const valid = ({ email, password, cf_password}) => {
    const err = {}

   

    

    if(!email) {
        err.email = "অনুগ্রহ করে আপনার ই-মেইল এড্রেস দিন।"
    }else if(!validateEmail(email)){
        err.email = "আপনার ই-মেইল এড্রেসের ফরমেট সঠিক নয়।"
    }

    if(!password) {
        err.password = "অনুগ্রহ করে একটি পাসওয়ার্ড দিন।"
    }else if(password.length < 6){
        err.password = "ন্যূনতম ৬ ক্যারেক্টারের একটি পাসওয়ার্ড দিন।"
    }

    if(password !== cf_password) {
        err.cf_password = "পাসওয়ার্ডের ঘরে যে-পাসওয়ার্ড লিখেছেন, এখানে সেই পাসওয়ার্ড পুনরায় লিখুন।"
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid