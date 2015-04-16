var users = require("../server/controllers/users.js");
var topics = require("../server/controllers/topics.js");
var answers = require("../server/controllers/answers.js");
var comments = require("../server/controllers/comments.js");

module.exports = function(app) {

	app.get("/users", function(req, res) {
		// console.log('here');
		// res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]); - from Server Tab; now we hook it up to friends.js in /server/controllers:
		users.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addCustomer", function(req, res) {

		console.log('in routes', req.body);
		users.add(req, res);

	})

	app.post("/removeCustomer", function(req, res) {
		
		// console.log('in routes', req.body);
		users.remove(req, res);

	})

	app.get("/topics", function(req, res) {
		// console.log('here');
		topics.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addOrder", function(req, res) {

		console.log('in routes', req.body);
		topics.add(req, res);

	})

	// app.post("/updateProduct", function(req, res) {

	// 	console.log('in routes', req.body);
	// 	answers.update(req, res);

	// })

	app.post("/removeOrder", function(req, res) {
		
		// console.log('in routes', req.body);
		topics.remove(req, res);

	})

	app.get("/answers", function(req, res) {
		
		answers.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addProduct", function(req, res) {

		console.log('in routes', req.body);
		answers.add(req, res);

	})

	app.post("/removeProduct", function(req, res) {
		
		// console.log('in routes', req.body);
		answers.remove(req, res);

	})

}