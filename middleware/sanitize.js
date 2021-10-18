module.exports = (req, res, next) => {
    req.body = sanitize(req.body);
    next();
}

// TODO: sanitize all fields
function sanitize(obj) {
   return obj;
}

