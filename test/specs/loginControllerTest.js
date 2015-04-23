describe('LoginContorller', function() {
  beforeEach(module('LibraryApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Login Screen', function() {
    it('Should check for the login credentials ', function() {
      var $scope = {};
       $scope.Users=[ {
        emailid:"a@a.com", pwd: "angular"},
        {emailid: "b@b.com", pwd: "angular"
    }];
    
      var controller = $controller('LoginContorller', { $scope: $scope });
      $scope.emailId = "a@a.com";
      $scope.userPassword="angular";
      $scope.submit();
      expect($scope.invalidUserError).toEqual(false);
    });
  });
});