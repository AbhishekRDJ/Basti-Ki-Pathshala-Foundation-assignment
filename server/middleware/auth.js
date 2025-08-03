import jwt from 'jsonwebtoken';
const auth = (req, res, next) => {
    let token = req.header('Authorization') || '';
    if (token.startsWith('Bearer ')) token = token.slice(7);

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('JWT verification failed:', err);
        return res.status(401).json({ message: 'Token is not valid' });
    }
};
export default auth;