var app = angular.module("myApp", ['ngRoute', 'ngMaterial', 'ngCookies']);

app.run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function () {
    if (!$rootScope.logged_in) {
      $location.path('/login');
    }
  });
});

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app/view/home.html",
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: "app/login/login.html",
            controller: 'LoginController'
        })
        .when('/createDomain', {
            templateUrl: "app/view/NotImplemented.html",
            controller: 'CreateDomainController'
        })
        .when('/listDomains', {
            templateUrl: "app/view/listDomains.html",
            controller: 'ListDomainsController'
        })
        .when('/domainData', {
            templateUrl: "app/view/domainData.html",
            controller: 'DomainDataController'
        })
        .when('/deleteDomain', {
            templateUrl: "app/view/NotImplemented.html",
            controller: 'DeleteDomainController'
        })
        .when('/putAttributes', {
            templateUrl: "app/view/NotImplemented.html",
            controller: 'PutAttributesController'
        })
        .when('/batchPutAttributes', {
            templateUrl: "app/view/NotImplemented.html",
            controller: 'BatchPutAttributesController'
        })
        .when('/getAttributes', {
            templateUrl: "app/view/NotImplemented.html",
            controller: 'GetAttributesController'
        })
        .when('/deleteAttributes', {
            templateUrl: "app/view/deleteAttributes.html",
            controller: 'DeleteAttributesController'
        })
        .when('/select', {
            templateUrl: "app/view/select.html",
            controller: 'SelectController'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('rootCtrl', function($scope) {});

app.controller('LoginController', function($scope, $rootScope, $location) {
  $scope.login = function () {
    $rootScope.login = $scope.login;
    $rootScope.logged_in = true;
    $location.path('/');
  }
});

app.controller('navCtrl', function ($location, $rootScope, $scope) {
  $scope.currentPage = "home";
  $scope.go = function (page) {
    $location.path('/' + page);
  };

  $scope.logout = function () {
    $scope.login.accessKeyId = '';
    $scope.login.secretKey = '';
    $rootScope.logged_in = false;
    $location.path('/login');
  };
});
