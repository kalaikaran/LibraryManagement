app.controller("LoginController",function($scope,$location,loginService,$rootScope){
   
    
    init();
    function init(){
        $scope.invalidUser=true;
        $scope.users=loginService.getUsers();
    };
    
    
    $scope.invalidUserError=false;
     
    
    $scope.submit=function (){
      
        for(i=0;i< $scope.users.length;i++){
            if($scope.emailId == $scope.users[i].emailid &&
                $scope.userPassword=== $scope.users[i].pwd) {
                //alert("valid User");
                $scope.invalidUserError=false;
                $rootScope.loginemail=$scope.emailId;
                $rootScope.invalidUser=false;
                $location.path('/books');
               return;
            }

        }
       // $scope.invalidUserError=true;
    }
    
 
})