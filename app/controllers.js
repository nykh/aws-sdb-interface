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
    return generateSignedURL("DeleteAttributes", attr, accessKeyId, secretKey, "https://sdb.amazonaws.com", "2009-04-15");
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

app.controller('SelectController', function($scope, $window){
  $scope.sel = {
    target: '*',
    item: '',
    filter: '',
  };
  $scope.preview = '';
  $scope.select_expression = '';

  function computeURL(sel_expr) {
    var accessKeyId = $scope.login.accessKeyId;
    var secretKey = $scope.login.secretKey;
    return generateSignedURL("Select", {
      'SelectExpression': sel_expr
    }, accessKeyId, secretKey, "https://sdb.amazonaws.com", "2009-04-15");
  }

  $scope.$watch('sel', function composeExpr() {
    var sel = $scope.sel;
    var expr = 'SELECT ' + sel.target + ' FROM ' + sel.item;
    if (sel.filter.length > 0) {
      expr += ' WHERE ' + sel.filter;
    }
    $scope.select_expression = expr;
  }, true);

  $scope.invoke = function(sel_expr) {
    var url = computeURL(sel_expr);
    $window.open(url);
  };

  $scope.displayUrl = function(sel_expr) {
    $scope.preview = computeURL(sel_expr);
  };

  $scope.reset = function() {
    $scope.sel = {
      target: '*',
      item: '',
      filter: '',
    };
    $scope.preview = '';
    $scope.select_expression = '';
  };
});
