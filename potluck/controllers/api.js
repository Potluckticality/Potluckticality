function index(req, res) {
    res.json(req.user.events)
}


module.exports = {
    index
}