const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

console.log({clientID: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET})

passport.use(
  new GoogleStrategy({
    //options for the google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }), () => {
    // call back for passport 
  }

)