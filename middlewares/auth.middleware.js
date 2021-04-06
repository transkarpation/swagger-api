const jwtMiddleware = require('./jwt.middleware')

module.exports = (routesWhiteList = []) => (req, res, next) => {
    routesWhiteList.some(route => route === req.path)
        ? next()
        : jwtMiddleware(req, res, next)
}