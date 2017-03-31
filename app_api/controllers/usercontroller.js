var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//GET ALL USER PROFILES
module.exports.getUsers = function(req, res) { 
  console.log('GET all Users');
  console.log(req.query);
  //methods from mongo db driver  
  User.collection
    .find()
    .toArray(function(err, docs) {
      // error says if query failed
      // docs is the query result, an array
      console.log("Found user", docs.length);
      res
        .status(200) // set res.status to 200 
        .json(docs); // set res.json to docs 
    });
};

//GET USER PROFILE BY ID
module.exports.getOneUser = function(req, res) {
  console.log('GET user by id');
  console.log(req.query);
  User
    .findById(req.params.userid)
    .exec(function(err, docs) {
      // error says if query failed
      // docs is the query result, an array
      console.log("Found user", docs.length);
      res
        .status(200) // set res.status to 200 
        .json(docs); // set res.json to docs 
    });
};


//CREATE NEW USER PROFILE
module.exports.userCreate = function(req, res) {
  console.log(req.body);
  console.log("create user profile");
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password }, function(err, location) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    }
    else {
      console.log(location);
      sendJSONresponse(res, 201, location);
    }
  });
};

//UPDATE AN EXISTING USER
module.exports.usersUpdateOne = function(req, res) {
  if (!req.params.userid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, all fields required"
    });
    return;
  }
  console.log(req.params.userid);
  User
    .findById(req.params.userid)
    .select('firstName lastName email username password') 
    //'-' states that we don't want to retreive
    //from db.
    .exec(
      function(err, user) {
        if (!user) {
          sendJSONresponse(res, 404, {
            "message:": "userid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        if (req.body.firstName !== undefined) {
           user.firstName = req.body.firstName;
         }
        if (req.body.lastName !== undefined) {
          user.lastName = req.body.lastName;
        }
        if (req.body.email !== undefined) {
          user.email = req.body.email;
        }
        if (req.body.username !== undefined) {
          user.username = req.body.username;
        }
        if (req.body.password !== undefined) {
          user.password = req.body.password;
        }
     
        user.save(function(err, user) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, user);
          }
        });
      }
  );
};