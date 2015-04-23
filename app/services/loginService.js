app.service("loginService", function($http,$rootScope,$location){

  this.getUsers = function (byEmailid,userPassword) {
        var url='https://lib-kalaikaran-3.c9.io/api/users/'+ byEmailid ;
        return $http.get(url)
        .then(function(data) {
           // return data;
          var loginUser=data.data;
          console.log(loginUser.length);
          if(loginUser.length>0){
           if ((loginUser[0].pwd==userPassword)&&(loginUser[0].emailid=byEmailid)){
                $rootScope.loginemail=byEmailid;
                $rootScope.invalidUser=false;
                $rootScope.invalidUserError=false;
                $location.path('/books');
                return true;
            } 
          }
            
               $rootScope.invalidUserError=true;    
               return false;
            
         });
        
    };
    
     this.addUsers = function (newEmaild,newPwd) {
        
          var data = JSON.stringify({
                emailid: newEmaild,
                pwd:newPwd
            }); 
        console.log(data);
        var userPromise = $http.post("/api/users", data);
        userPromise.then(function (response){
            console.log(response.data);
            return response.data;
        })
       
    };
});
