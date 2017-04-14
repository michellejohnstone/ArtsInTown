(function () {
    
    angular
        .module('myApp')
        .controller('eventDetailCtrl', eventDetailCtrl);
        
    eventDetailCtrl.$inject = ['$routeParams', '$modal', "$http"]; 
    function eventDetailCtrl ($routeParams, $modal, $http) {
        var vm = this; 
        
        //vm.venueName = $routeParams.venueName //let's change this once we have routes for each event to :eventid
        vm.eventid = $routeParams.eventid; //from our CRUD, it doesn't look like we have a URL /viewEvent/:eventid 
        //we do have a get for the venue name, but not the specific event
        
        $http.get('/api/viewevent/:eventid/comments')
        //$http.get('/api/events/' + vm.venueName)
            .success(function(data) { 
                vm.data = { eventid : data }; 
                
                //MJ: I'm not sure how to pull the venueName name from the schema/model in events.js
                vm.pageHeader = {
                    title: vm.data.eventid.name
                };
            })
            .error(function(e) {
                console.log(e);
            });
        
        vm.popupCommentForm = function () {
            var modalInstance = $modal.open({
                templateUrl: '/commentModal/commentModal.view.html',
                controller: 'commentModalCtrl as vm',
                
                //need to look this up 
                resolve : {
                    eventData : function () { //eventData is a local variable referenced in commentModal files
                        return {
                            eventid : vm.eventid,
                            eventName : vm.data.eventid.name
                        };
                    }
                }
            });
            
          modalInstance.result.then(function (data) {
              vm.data.eventid.comment.push(data); //not sure if this is right
          })
            
        };
    }
})();