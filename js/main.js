var app = angular.module('grimm', ['ngRoute', 'ngAnimate']);

app.run(function($rootScope){
	$rootScope.myHref = 'http://localhost/~juliet/grimm/#';
	$rootScope.person = {};
});

app.controller('IntroController', function($scope){
	
});

app.controller('ExpertiseController', function($scope){
	
});

app.controller('BrandController', function($scope){
	
});

app.controller('DigitalController', function($scope){

});

app.controller('ContentController', function($scope){

});

app.controller('FeedbackController', function($scope){

});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'IntroController'
    })
    .when('/expertise', {
      templateUrl: 'views/expertise.html',
      controller: 'ExpertiseController'
    })
    .when('/brand', {
      templateUrl: 'views/brand.html',
      controller: 'BrandController'
    })
    .when('/digital', {
      templateUrl: 'views/digital.html',
      controller: 'DigitalController'
    })
    .when('/content', {
      templateUrl: 'views/content.html',
      controller: 'ContentController'
    })
    .when('/feedback', {
      templateUrl: 'views/feedback.html',
      controller: 'FeedbackController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);