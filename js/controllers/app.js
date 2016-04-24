var app = angular.module ('CAHNAApp', ['ngRoute', 'CAHNA.controllers']);


app.config(function ($routeProvider) {
  $routeProvider.

  when('/calendar', {
    templateUrl: 'views/calendar.html',
    controller: 'calendarCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});


// app.constant('API_URL', 'https://funblanks.firebaseio.com');
