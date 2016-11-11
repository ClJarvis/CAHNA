app.controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.message='CAHNA';
  $scope.calendar=function() {
  $location.path ('/calendar')
}

}]);
