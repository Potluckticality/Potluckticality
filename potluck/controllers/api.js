function index(req, res) {
    res.json(req.user.events)
}

function create(req, res) {
    req.user.events.push(req.body);
    req.user.save(function(err) {
        if (err) res.redirect('/events');
        res.json(req.user);
    });
}



module.exports = {
    index,
    create
}