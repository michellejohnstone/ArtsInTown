(function() {
  angular.module('myApp', ['ngRoute']).config(myConfig);

  // $routeProvider allows to set up routes 
  function myConfig($routeProvider) {

    $routeProvider // inline template
      .when('/', {
      templateUrl: 'other/layout.html'
    })

    .when('/eventlist', {
      templateUrl: 'other/eventLayout.html'
    })

    .when('/eventdetail', {
      templateUrl: 'other/eventDetail.html'
    })

    .when('/contact', {
      templateUrl: 'other/contactLayout.html'
    })

    .when('/userprofile/:id', {
      templateUrl: 'other/userProfile.html',
      controller: "GetOneUserProfileController",
      controllerAs: 'oneuserCon'
    })

    .when('/post', {
      templateUrl: 'postevent/postevent.html',
      controller: 'PostEventController',
      controllerAs: 'postEventCon'
    })

    .when('/register', {
      templateUrl: 'other/register.html',
      controller: 'RegisterController',
      controllerAs: 'regCon',
      access: {
        restricted: false
      }
    })

    .when('/login', {
      templateUrl: 'other/login.html',
      controller: 'LoginController',
      controllerAs: 'logCon'
    })

    .otherwise({
      redirectTo: '/'
    });
  }
})();
