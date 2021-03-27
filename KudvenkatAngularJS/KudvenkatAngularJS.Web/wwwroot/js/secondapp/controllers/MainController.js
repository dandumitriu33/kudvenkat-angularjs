secondapp.controller('MainController', ['$scope', function ($scope) {
    var employee = {
        firstName: "Mike",
        lastName: "Smith",
        age: 99
    };

    $scope.message = "Angular JS practice";
    $scope.employee = employee;
}]);