(function () {
  console.log("I MADE IT HERE");
  angular.module('myApp', ['ngRoute', 'ui.bootstrap']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    
    $routeProvider    // inline template
      .when('/', { templateUrl: 'other/layout.html' })
      .when('/eventlist', { templateUrl: 'other/eventLayout.html' })
      .when('/eventdetail', { //need to change to :eventid
        templateUrl: 'other/eventDetail.html', 
        controller: 'eventDetailCtrl',
        controllerAs: 'vm'
      })
      .when('/post', { templateUrl: 'other/postLayout.html' })
      .when('/contact', { templateUrl: 'other/contactLayout.html' })
      .when('/login', { templateUrl: 'other/login.html' })
      .when('/register', { templateUrl: 'other/register.html' })
      .when('/userprofile', { templateUrl: 'other/userProfile.html' })
      .otherwise({redirectTo: '/'});
  }
})();