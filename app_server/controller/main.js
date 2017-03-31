module.exports.index = function(req, res) {
	res.render('index', {title: 'Express'});
};

module.exports.postEvent = function(req, res) {
    res.render('postLayout', {title: 'Post Event'});
};

module.exports.eventList = function(req, res) {
    res.render('eventLayout', {title: 'Browse local events near you.'});
};

module.exports.contact = function(req, res) {
    res.render('contactLayout', {title: 'Send us a message.'});
};

module.exports.eventDetail = function(req, res) {
    res.render('eventDetail', {title: 'Details for your event.'});
};

module.exports.createUser = function(req, res) {
    res.render('index', {title: 'Users'});
};
