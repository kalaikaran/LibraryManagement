app.controller('AddNewBookController', function($scope, $location, booksService) {

    $scope.books = booksService.getHardBooks();
    // this function invoke while change the text of name and author
    $scope.changedValue = function() {
            $scope.error = false;
        }
        // this function invoke while clicking on submit button
    $scope.addRow = function() {

        var oldBookName;
        //loop every array element with this foreach
        angular.forEach($scope.books, function(eachbook) {

            if ($scope.name.toLowerCase() == eachbook.name.toLowerCase() && $scope.author.toLowerCase() == eachbook.author.toLowerCase()) {

                oldBookName = true;
                $scope.error = true;
                //alert('Duplicates Detected.  Please remove the duplicates.');
            }

        });
        // this condition invoke while the book information is not entered  
        if (!oldBookName) {

            $scope.books.push({
                'name': $scope.name,
                'author': $scope.author,
                'language': $scope.language,
                'publishedOn': $scope.publishedOn
            });

            $location.path('search');

        }
    }

});