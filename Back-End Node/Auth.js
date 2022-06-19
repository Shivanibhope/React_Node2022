

const jwt = require("jsonwebtoken");

const auth = async (req,res, next) => {
    try {
         let authHeader = req.headers['authorization']
    let token = authHeader && authHeader.split(' ')[1]
       console.log("This is the token" + token)
         const verify = jwt.verify(token, "adg556789#FHBKLP6789abgdhbaertyhg");
         next()
    } catch (error) {
        res.send(error)
    }
}
module.exports = auth;





       