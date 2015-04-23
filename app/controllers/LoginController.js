app.controller("LoginController",function($scope,$location,loginService,$rootScope){
   
    
    init();
    function init(){
        $rootScope.invalidUser=true;
    };
    
    
    $rootScope.invalidUserError=false;
     
    
    $scope.submit=function (){
     loginService.getUsers($scope.emailId,$scope.userPassword)
     .then(function(promise) {
        $scope.loginUser = promise;
        return promise;
    });
    
        
    }
    
 
})
