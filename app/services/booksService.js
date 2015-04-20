app.service('booksService', function ($http) {
    this.getBooks = function () {
        var bookPromise = $http.get("https://lib-kalaikaran-3.c9.io/api/Books");
        bookPromise.then(function (response){
            console.log("ddddd");
            return response.data;
        })
       
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
    
    this.getHardBooks = function () {
            return books;
    };
    

    var books =[
        {id: 1, name: 'The Lord of the Rings', author: 'JRR Tolkien', language: 'English', publishedOn: '1955'},
        {id: 2, name: 'The Little Prince',     author: 'Antoine', language: 'French', publishedOn: '1943'},
        {id: 3, name: 'Harry porter', author: 'JK Rowling', language: 'English', publishedOn: '1997'},
        {id: 4, name: 'And then there were none', author: 'Agatha Christie', language: 'English', publishedOn: '1939'},
        {id: 5, name: 'Dream of the red chamber', author: 'Cao Xueqin', language: 'chinese', publishedOn: '1754'},
        {id: 6, name: 'Hobbit', author: 'JRR Tolkien', language: 'English', publishedOn: '1937'},
        {id: 7, name: 'She : History of adventure', author: 'Rider Haggard', language: 'English', publishedOn: '1937'},
        {id: 8, name: 'The Lion the witch and the wardrobe', author: 'CS Lewis', language: 'English', publishedOn: '1950'},
        {id: 9, name: 'The Davinci code', author: 'Dan Brown', language: 'English', publishedOn: '2003'},
        {id: 10, name: 'Think and grow rich', author: 'Napolean Hill', language: 'English', publishedOn: '1937'}
        ]

});