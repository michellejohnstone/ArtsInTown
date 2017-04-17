(function () {
  console.log("I MADE IT HERE");
  angular.module('myApp', ['ngRoute']).config(myConfig); 
  //angular.module('myApp', ['ngRoute', 'ui.bootstrap']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    
    $routeProvider    // inline template
      .when('/', { templateUrl: 'other/layout.html' })
      .when('/eventlist', { 
        templateUrl: 'eventList/eventList.view.html',
        controller: 'EventListController', controllerAs: 'eventsCon' })
      .when('/eventdetail/:eventid', { //need to change to :eventid
        templateUrl: 'eventDetail/eventDetailTest.view.html', 
        controller: 'EventDetailController', controllerAs: 'detailsCon' })
        //change from lowercase e to capital E
        //controllerAs: 'vm'
      .when('/post', { templateUrl: 'other/postLayout.html' })
      .when('/contact', { templateUrl: 'other/contactLayout.html' })
      .when('/login', { templateUrl: 'other/login.html' })
      .when('/register', { templateUrl: 'other/register.html' })
      .when('/userprofile', { templateUrl: 'other/userProfile.html' })
      .otherwise({redirectTo: '/'});
  }
})();