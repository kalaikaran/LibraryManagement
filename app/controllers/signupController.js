app.controller('signupController', function ($scope ,loginService, $location) {
    init();
    function init(){
        $scope.invalidPassword = false;
    };
    
   
   
   $scope.validate=function (){
       if($scope.UserPassword!= $scope.RepeatPassword){
            $scope.invalidPassword =true;
       }
   };
   
    $scope.submit=function (){
        $scope.validate();
        if(!$scope.invalidPassword){
            $scope.users=loginService.addUsers($scope.emailId,$scope.UserPassword);
            $location.path('login');
        }
        
    };
    
    $scope.goBack=function(){
       $location.path('login');
    }
            
   
});
