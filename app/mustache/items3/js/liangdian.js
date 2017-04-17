
/**
 * Created by uid on 2016/12/2.
 */
var app = angular.module('liangdian', ['ng', 'ngRoute']);

app.controller('parentCtrl', ['$scope','$location',function ($scope, $location) {
    $scope.jump = function (path) {
        $location.path(path);
    }
}]);
app.controller('indexCtrl', function ($scope, $location) {
    //$scope.jump = function () {
    // $location.path('/more');
    // }
});
app.controller('moreCtrl', function ($scope, $http) {

});
app.config(function ($routeProvider) {
    $routeProvider
    .when('/index', {templateUrl: 'tpl/index.html', controller: 'indexCtrl'})
        .when('/more', {templateUrl: 'tpl/more.html', controller: 'moreCtrl'})
    .otherwise({redirectTo: '/index'});

});

