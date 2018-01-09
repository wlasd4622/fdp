// Mock data by hicoldcat

var express = require('express')
var apiRoutes = express.Router();

var home = require('./mockdata/home.json');
var memberList = require('./mockdata/memberList.json');

apiRoutes.get('/home', function(req, res) {
	res.json(home);
});
apiRoutes.get('/memberList', function(req, res) {
	res.json(memberList);
});
 
module.exports = apiRoutes;
