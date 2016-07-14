app.controller('HomeController', function($scope, $location){});
app.controller('CreateDomainController', function($scope, $location){});

app.controller('ListDomainsController', function($scope, $window){
  $scope.list = {};
  $scope.preview = '';

  function computeURL(list) {
    var accessKeyId = $scope.login.accessKeyId;
    var secretKey = $scope.login.secretKey;
    return generateSignedURL("ListDomains", list, accessKeyId, secretKey, "https://sdb.amazonaws.com", "2009-04-15");
  }

  $scope.invoke = function(list) {
    var url = computeURL(list);
    $window.open(url);
  };

  $scope.displayUrl = function(list) {
    $scope.preview = computeURL(list);
  };

  $scope.reset = function() {
    $scope.list = {};
    $scope.preview = '';
  };
});

app.controller('DomainDataController', function($scope, $location){});
app.controller('DeleteDomainController', function($scope, $location){});
app.controller('PutAttributesController', function($scope, $location){});
app.controller('BatchPutAttributesController', function($scope, $location){});
app.controller('GetAttributesController', function($scope, $location){});

app.controller('DeleteAttributesController', function($scope, $location){
  $scope.attr = {};
  $scope.preview = '';

  function computeURL(attr) {
    var accessKeyId = $scope.login.accessKeyId;
    var secretKey = $scope.login.secretKey;
    return generateSignedURL("ListDomains", attr, accessKeyId, secretKey, "https://sdb.amazonaws.com", "2009-04-15");
  }

  $scope.invoke = function(attr) {
    var url = computeURL(list);
    $window.open(url);
  };

  $scope.displayUrl = function(attr) {
    $scope.preview = computeURL(attr);
  };

  $scope.reset = function() {
    $scope.list = {};
    $scope.preview = '';
  };
});

app.controller('SelectController', function($scope, $location){});
