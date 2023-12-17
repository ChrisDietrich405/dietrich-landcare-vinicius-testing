export default async function handler(req, res) {
    res.status(200).json({
        status: 'Working',
        method: req.method,
        message: 'API endpoint is working fine!'
    });
}