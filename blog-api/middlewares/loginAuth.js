const jwt  = require('jsonwebtoken');

const loginAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({error: "Login first."});
    }

    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        req.id = verifyToken.id;
        req.username = verifyToken.username;
        next();
        
    } catch (error) {
        console.log("Catched at loginAuth: ", error.message);
        return res.status(401).json({error: "Login first."});
    }
}

module.exports = loginAuth;