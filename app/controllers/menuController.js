app.controller('menuController', function ($scope, $http, $rootScope,$location) {
    
    $scope.logout=function(){
    $rootScope.invalidUser=true;
    $rootScope.loginemail=null;
    $location.path('login');
        
    }
    
    
});