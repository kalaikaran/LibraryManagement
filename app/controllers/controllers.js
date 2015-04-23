app.controller('booksController', function ($scope, $http, booksService,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        
        /* Search Functionality*/
        $scope.selectOptions = [
            { name: 'Name', value: 'name' }, 
            { name: 'Author', value: 'author' }, 
            { name: 'Language', value: 'language' },
            { name: 'Year', value: 'publishedOn' }
        ];
        $scope.selectoption = {type : $scope.selectOptions[0].value};
        /* Search Functionality*/
        
        $scope.books = booksService.getHardBooks();//getHardBooks
        
    }

   
     $scope.editingData = [];
    
    for (var i = 0, length = $scope.books.length; i < length; i++) {
      $scope.editingData[$scope.books[i].id] = false;
    }

 $scope.ConfirmDelete=function(index){
            //alert("Are you sure want to delete?");
            if(window.confirm("Are you sure want to delete?"))
               {
               $scope.books.splice(index,1);
               }
        
        }

    $scope.modify = function(book){
        $scope.editingData[book.id] = true;
    
    };
    
      $scope.reset = function(book){
        $scope.editingData[book.id] = false;
    
    };
    
    $scope.update = function(book){
        $scope.editingData[book.id] = false;
         booksService.updateBooks(book);
		 $scope.books = booksService.getBooks();
        
    };
    $scope.removeItem = function(index){
			$scope.books.splice(index,1);
		}
   
    $scope.delete_btn_click = function(id) {
        console.log(id);
         booksService.deleteBooks(id);
         $scope.books = booksService.getBooks();
         $scope.editedName="";
         $scope.checked = false;
    };
    
 
});
app.directive('ngConfirmBoxClick', [

      function () {

          return {

              link: function (scope, element, attr) {
                 
                  console.log(element,attr);
                  
                  var msg = attr.ngConfirmBoxClick || "Are you sure want to delete?";

                  var clickAction = attr.confirmedClick;

                  element.bind('click', function (event) {

                      if (window.confirm(msg)) {

                          scope.$eval(attr.confirmedClick)

                      }

                  });

              }

          };

      }

]);

