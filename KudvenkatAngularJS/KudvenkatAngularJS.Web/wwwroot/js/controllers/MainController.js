// One way
//var MainController = function ($scope) {
//    $scope.message = "Angular JS practice";
//};

//app.controller('MainController', MainController);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.message = "Angular JS practice";
}]);