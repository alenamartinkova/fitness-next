import executeQuery from "../../lib/db";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const texts = req.body;

        for (const text of texts) {
            await executeQuery({
                query: 'UPDATE texts SET value = ? WHERE text_key = ?',
                values: [text.value, text.text_key],
            });
        }

        res.status(200).json({ message: 'Update successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
