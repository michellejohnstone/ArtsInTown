//Referencing controler name from angular.app.js
(function () {
    angular.module('myApp').controller('EventListController', EventListController);
    

    function EventListController($http, $scope) {
        $scope.result = [];
        $scope.len;
        $scope.id;
        $http.get('/api/events').then(function(response) {
            $scope.getResponse = response.data; 
             angular.forEach($scope.getResponse,function(value,index){
                  $scope.result.push(value);
              })
            $scope.len = $scope.result.length;
        });
    
        $scope.search=function(){
        $scope.searchQuery = angular.copy($scope.query);
        $scope.eventsToFilter=$scope.result;
        $scope.searchResult=true;
        $scope.result = result.data;
        angular.forEach($scope.result, function(value,index){
            $scope.result.push(value);
        })
        $scope.len = $scope.result.length;
        };
    }
})();

    
