

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }
    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {
        const payload = { user: username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).json({ message: 'Login successful', token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
};

export default login;