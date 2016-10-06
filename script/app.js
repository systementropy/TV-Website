var app = angular.module("myApp", ['ngRoute','ui.bootstrap','slickCarousel']).config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
   });
   $routeProvider
   .when('/', {
   templateUrl: '/views/main.html', controller: 'MainCtrl'
   })
   .when('/#', {
   templateUrl: '/views/main.html', controller: 'MainCtrl'
   })
   .when('/directory', {
   templateUrl: '/views/directory.html', controller: 'directoryCtrl'
   })
   .when('/#/directory', {
   templateUrl: '/views/directory.html', controller: 'directoryCtrl'
   })
   .otherwise({
   redirectTo: '/'
   });

}]);
app.controller('MainCtrl', function($scope) {
   $scope.news = ["One news","Two news","Three news","Four news"];
   $scope.stripNews={
      title:"J&K में 7 आतंकी ढेर: नौगाम-कुपवाड़ा में कार्रवाई, देश के 24 एयरपोर्ट पर अलर्ट ",
      text:"गुरुवार को घुसपैठ की 4 कोशिशें हुईं। कुपवाड़ा के 30 राष्ट्रीय राइफल्स कैम्प को आतंकियों ने निशाना बनाया।"
   }
});

app.controller('directoryCtrl', function($scope) {
   
});