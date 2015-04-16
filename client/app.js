// Inject the ngRoute dependency in the module:
var forumApp = angular.module("forumApp", ["ngRoute"]);
// Use the config method to set up routing:
forumApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/users.html"
    })
    .when("/dashboard", {
      templateUrl: "partials/dashboard.html"
    })
    .when("/answers", {
      templateUrl: "partials/answers.html"
    })
    .when("/comments", {
      templateUrl: "partials/comments.html"
    })
    .when("/topics", {
      templateUrl: "partials/topics.html"
    })
    .otherwise({
      redirectTo: "/"
    })

})