// pages/api/auth.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }

        const [username, password] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');

        if (username === process.env.BASIC_AUTH_USERNAME && password === process.env.BASIC_AUTH_PASSWORD) {
            res.status(200).json({ message: 'Authenticated' });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
