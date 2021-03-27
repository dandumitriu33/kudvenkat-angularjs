// One way
//var MainController = function ($scope) {
//    $scope.message = "Angular JS practice";
//};

//app.controller('MainController', MainController);

app.controller('MainController', ['$scope', function ($scope) {
    var employee = {
        firstName: "David",
        lastName: "Hastings",
        age: 25
    };

    $scope.message = "Angular JS practice";
    $scope.employee = employee;
}]);