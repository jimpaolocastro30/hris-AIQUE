



const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY)

      // Get user from the tokensss
      role = await (decoded.role)

      if(role == "Employee"){
        return res.status(420).send("Not Authorized,<br/><h2>Admin only<h2/>")
        
      }
      else( next() )
      
      
    } catch (error) {

      res.status(401)
      throw new Error('error')
    }
  }

  /*if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }*/
})

module.exports = { protect }