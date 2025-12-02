const reqMap = new Map()
const LIMIT = 5
const TIME_INTERVAL = 10 * 1000

export default function rateLimiter(req, res, next) {
    const userIp = req.ip;

    const now = new Date()

    if (!reqMap.has(userIp)) {
        reqMap.set(userIp, { count: 1, firstRequestTime: now });
        return next()
    }

    let userData = reqMap.get(userIp)
    const timePassedAfterFirstRequest = now - userData.firstRequestTime

    if (timePassedAfterFirstRequest > TIME_INTERVAL) {
        reqMap.set(userIp, { count: 1, firstRequestTime: now })
        return next()
    }


    if (userData.count < LIMIT) {
        reqMap.set(userIp, { ...userData, count: userData.count + 1 })
        return next()
    }

    const retryAfterSeconds = Math.ceil((TIME_INTERVAL - timePassedAfterFirstRequest) / 1000)

    res.status(429).json({ error: "too many request", retryAfterSeconds })
    return;
}