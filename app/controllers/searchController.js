app.controller('searchController', function ($scope, booksService, $http,  $filter) {
    $scope.selectOptions = [
        { name: 'Name', value: 'name' }, 
        { name: 'Author', value: 'author' }, 
        { name: 'Language', value: 'language' },
        { name: 'Published', value: 'publishedOn' }
    ];
    $scope.selectoption = {type : $scope.selectOptions[0].value};
    init();
    
    function init() {
        $scope.books = booksService.getHardBooks();
    }
    
    $scope.changedValue = function(){
        $scope.search = null;
    }
    
    var myDummyData2 = booksService.getHardBooks();

    $scope.filterOptions = {filterText: ''};
    
    $scope.gridOpts = {
        data: myDummyData2,
        enableFiltering: true,
        columnDefs: [
                    {name: 'Name', field: 'name', enableFiltering: true, filter: {
                            term: $scope.filterOptions.filterText //DOES NOT WORK... BUT WHY
                        }
                    },
                    {name: 'Author', field: 'author'},
                    {name: 'Language', field: 'language'},
                    {name: 'Year', field: 'publishedOn'}
                ]
    };
    
    $scope.refreshData = function() {
        $scope.gridOpts.data = $filter('filter')(myDummyData2, $scope.searchText, undefined);
    };
    
});
