app.service("loginService", function($http){

    /* this.getUsers= function(){

        return userCollection ;
    };*/
    
    
     this.getUsers = function () {
        var userPromise = $http.get("https://lib-kalaikaran-3.c9.io/api/users");
        userPromise.then(function (response){
            console.log("ddddd");
            return response.data;
        })
       
    };
    
     this.addUsers = function (newEmaild,newPwd) {
          var data = $.param({
            json: JSON.stringify({
                email: newEmaild,
                pwd:newPwd
            })
        });
        var userPromise = $http.post("https://lib-kalaikaran-3.c9.io/api/users", data);
        userPromise.then(function (response){
            console.log("ddddd");
            return response.data;
        })
       
    };
    
    

    var userCollection=[ {
        emailid:"a@a.com", pwd: "angular"},
        {emailid: "b@b.com", pwd: "angular"
    }]
})