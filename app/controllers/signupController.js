app.controller('signupController', function ($scope ,loginService, $location) {
   
   
    $scope.submit=function (){
        $scope.users=loginService.addUsers($scope.emailId,$scope.UserPassword);
        //loginService.getUsers();
        
        
        //$scope.users.push({ 'emailid': $scope.emailId, 'pwd': $scope.UserPassword});
        $location.path('login');
       
    }
            
   
});
