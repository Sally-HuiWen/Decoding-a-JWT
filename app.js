// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
// Your code here
const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

// Your code here
// secret= require('crypto').randomBytes(64).toString('hex')
// console.log(secret);//8b0865c60a7e9a96ed6281162cde35ee5d056ed28e9e8fb45589a1620b62209d73afd625fd7689d6829db46e9364e04f34c7627356c3e7c3b5639882b44ee169
let myPayLoad = {email: 'brightlifewenwen@gmail.com', name: 'Sally'}
token = jwt.sign(myPayLoad, process.env.SECRET_KEY, {expiresIn: '1s'})
// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

// Your code here
payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here
    verifiedPayload = jwt.verify(token,process.env.SECRET_KEY)
// See the verified payload in the console - DO NOT MODIFY
    console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
const alternateKey = require('crypto').randomBytes(64).toString('hex')
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here
try {
    jwt.verify(token,alternateKey)

}catch (error) {
    console.error('Invalid Signature')
}


// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
setTimeout(()=> {
    try {
        verifiedPayload
    }catch (error) {
        console.error(error)
    }
}, 3000)