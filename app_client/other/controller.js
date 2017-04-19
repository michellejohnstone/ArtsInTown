(function () {     // Building controllers for api http requests 

  // asssign controllers to myApp module 
  
  angular.module('myApp').controller('UserController', UsrController);
  angular.module('myApp').controller('CreateUserController', CreateUserController);
  angular.module('myApp').controller('GetOneUserProfileController', ['$scope', '$http', 
  '$routeParams', GetOneUserProfileController]);

  
  
  function UsrController($http) {
      var myModel = this;
      myModel.name = 'User';
      
      $http.get('/api/users').then(function(response) {
          myModel.response = response;
      });
      }
      
  
  function CreateUserController($http) {
    var vm  = this;
    vm.addUser  = function() {
    
    var postData = {
          firstName: vm.firstName,
          lastName: vm.lastName,
          email: vm.email,
          username: vm.username,
          password: vm.password
        };
    
        console.log(postData);
        $http.post('api/users/createuser', postData).then(function(response) {
                vm.newuser = response.data;
                console.log(response.status);
                window.location = "/#userprofile";
      });
    };
  }
    
    
  function GetOneUserProfileController($scope, $http, $routeParams) {
      var vm = this;
      
      var id = $routeParams.id;
      
      $http.get('api/users/' + id)
      .success(function(response) {
         $scope.users = data[$routeParams.id];
      });
      
      vm.deleteUser = function() {
          $http.delete('/api/users', + $routeParams.id)
          .then(function(response) {
              console.log(response.status);
              window.location = "#/userprofile";
          });
      }
  }
  
})();