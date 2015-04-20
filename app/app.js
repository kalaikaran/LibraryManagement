
/*#######################################################################
  
 

  #######################################################################*/

var app = angular.module('LibraryApp', ['ngRoute', 'ui.grid', 'ui.grid.edit']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/books',
            {
                controller: 'booksController',
                templateUrl: './app/partials/books.html'
            })
        
        .when('/addBooks/',
            {
                controller: 'AddNewBookController',
                templateUrl: '/app/partials/AddNewBook.html'
            })
        .when('/addMember/',
            {
                controller: 'AddNewBookController',
                templateUrl: '/app/partials/AddNewBook.html'
            })
        
        .when('/login',
            {
                controller: 'LoginController',
                templateUrl: './app/partials/login.html'
            })
        .when('/signup',
            {
                controller: 'signupController',
                templateUrl: './app/partials/signup.html'
            })  
        .when('/search',
            {
                controller: 'searchController',
                templateUrl: './app/partials/search.html'
            })  
            
        .otherwise({ redirectTo: '/books' });
});




