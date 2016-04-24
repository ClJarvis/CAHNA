app.controller('CalendarCtrl', function ($scope, $location) {
  $scope.message='Calendar';

  $scope.homePage=function() {
  $location.path ('/')
  }
});
