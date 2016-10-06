var app = angular.module("myApp", ['ngRoute']).config(['$routeProvider', function($routeProvider) {
   $routeProvider
   .when('/', {
   templateUrl: 'views/main.html', controller: 'AddStudentController'
   })
   .when('/directory', {
   templateUrl: 'directory.html', controller: 'ViewStudentsController'
   })
   .otherwise({
   redirectTo: '/'
   });

}]);
app.controller('AddStudentController', function($scope) {
   $scope.message = "This page will be used to display add student form";
});

app.controller('ViewStudentsController', function($scope) {
   $scope.message = "This page will be used to display all the students";
});