app.controller('searchController', function ($scope, booksService, $http) {
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
    
    var grid;
  $scope.myExternalScope=$scope;
  
  $scope.genderTypes = [{ID: 1, type: 'female' },
  {ID: 2, type: 'female' },
  {ID: 3, type: 'both' },
  {ID: 4, type: 'none' },
  ];
  
  
  $scope.gridOptions = {
    enableSorting: true,
    enableFiltering: true,
    enableCellEditOnFocus: true,
    columnDefs: [
      { field: 'name',
        sort: {
          direction: 'desc',
          priority: 1
        }
      },
      { field: 'gender', editType: 'dropdown', enableCellEdit: true,
          editableCellTemplate: 'temp.html' },
      { field: 'company', enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      grid = gridApi.grid;
    }
  };

  $http.get('https://rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
    
    
});