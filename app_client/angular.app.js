(function () {
  console.log("I MADE IT HERE");
  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    
    $routeProvider    // inline template
      .when('/', { templateUrl: 'other/layout.html' })
      .when('/eventlist', { templateUrl: 'other/eventLayout.html' })
      .when('/eventdetail', { templateUrl: 'other/eventDetail.html' })
      .when('/post', { templateUrl: 'other/postLayout.html' })
      .when('/contact', { templateUrl: 'other/contactLayout.html' })
      .when('/login', { templateUrl: 'other/login.html' })
      .when('/register', { templateUrl: 'other/register.html' })
      .when('/userprofile', { templateUrl: 'other/userProfile.html' })
  }
})();