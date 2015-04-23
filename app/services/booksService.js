app.service('booksService', function ($http,$q) {
    
  var deferred = $q.defer();

    $http.get('https://lib-kalaikaran-3.c9.io/api/Books').then(function(data) {
  
  
     
        deferred.resolve(data);
       
    });
    
    this.getBooks = function(){
        
        return deferred.promise;
    };
   this.updateBooks=function(book){
       
        id=id-1;
        books[id].name=book.name;
          books[id].author=book.author;
          books[id].language=book.language;
          books[id].publishedOn=book.publishedOn;
        
        id=0;
    };
    
    this.deleteBooks=function(id){
        console.log(id);
        id=id-1;
        books.splice(id,1);
       
    };
    
    this.getAllBooks = function () {
        };
    
    this.getHardBooks = function () {
          
       return books;
   };
    
     this.addBooks = function (name,author,language,publishedOn) {
        
          var data = JSON.stringify({
                'name':name,
                'author': author,
                'language': language,
                'publishedOn': publishedOn
            }); 
        console.log(data);
        var booksPromise = $http.post("/api/Books", data);
        booksPromise.then(function (response){
           // console.log(response.data);
            return response.data;
        })
       
    };


  
  
var books =[];
 var promise =this.getBooks();
    promise.then(function(data) {
       for(var i = 0; i <data.data.length; i++){
       books.push(data.data[i]);
      }
})
 });
