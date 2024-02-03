import executeQuery from "../../lib/db";

export default async (req, res) => {
    try {
        // For GET request, you might want to use req.query or req.params
        if (req.method !== 'GET') {
            res.status(405).json({ message: 'Method not allowed' });
            return;
        }

        const result = await executeQuery({
            query: 'SELECT * FROM texts',
        });

        // You should send back the result as a JSON response
        res.status(200).json(result);
    } catch (error) {
        // Send back a proper error response
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
