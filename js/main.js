var app = angular.module('grimm', ['ngRoute', 'ngAnimate','ngAnimate']);

app.run(function($rootScope){
	$rootScope.myHref = 'http://localhost/grimm/#';
	$rootScope.organisation = {};
});

app.controller('IntroController', function($scope , $window ,$location){

         $scope.pageClass = 'page-home';


        /*angular.element($window).bind("scroll", function() {
            if (($window.innerHeight + $window.scrollY) >= document.body.offsetHeight) {
                 $scope.boolChangeClass = true;
                  $location.path("/expertise");
             } 
            $scope.$apply();
        });
        */

});

app.controller('ExpertiseController',  function($scope , $window ,$location){

     $scope.pageClass = 'page-expertise';

});

app.controller('BrandController', function($scope , $window ,$location,$http){

     $scope.pageClass = 'page-brand';


       $scope.sendmail = function() {
        var mail = 0;

       $http.post("mail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Branding"  })
       .success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
          

           $http.post("clientmail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Branding"  }).
            success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
               $location.path('/content_feedback');
            
            }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
            });


                 }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
          });

          console.log(mail);

       
  
             


          
       }
        /*var fd = new FormData()
        
        fd.append("organisation", $scope.organisation)
        fd.append("project", $scope.project)
        fd.append("team", 'Branding')


        var xhr = new XMLHttpRequest()
        xhr.open("POST", "mail.php")
        xhr.send(fd)
        console.log(xhr.responseText);
         // $location.path('/brand_feedback');
        */
      
        
   

});

app.controller('DigitalController', function($scope , $window ,$location,$http){

    $scope.pageClass = 'page-digital';
    $scope.sendmail = function() {
       var mail = 0;

       $http.post("mail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Digital"  })
       .success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
            

            $http.post("clientmail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Branding"  }).
            success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
               $location.path('/content_feedback');
            
          }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
          });
             
            
          }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
          });
         
         


          
         
       }

});

app.controller('ContentController', function($scope , $window ,$location,$http){  
    $scope.pageClass = 'page-content';
    $scope.sendmail = function() {
      var mail = 0;
       console.log('i am working');

       $http.post("mail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Content"  })
       .success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
            
            $http.post("clientmail.php", {"organisation": $scope.organisation ,"project": $scope.project , "team": "Branding"  }).
            success(function(data, status, headers, config) {
            $scope.data = data;
            console.log(data);
               $location.path('/content_feedback');
            
            }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
            });
             
        
          }).error(function(data, status, headers, config) {
              $scope.status = status;
              console.log(data);
          });
      

       }


});

app.controller('BrandFeedbackController', function($scope){
  $scope.pageClass = 'page-feedback';

});
app.controller('DigitalFeedbackController', function($scope){
  $scope.pageClass = 'page-feedback';

});
app.controller('ContentFeedbackController', function($scope){
  $scope.pageClass = 'page-feedback';

});

// routing
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
     .when('/brand_feedback', {
      templateUrl: 'views/brand_feedback.html',
      controller: 'BrandFeedbackController'
    })
    .when('/digital_feedback', {
      templateUrl: 'views/digital_feedback.html',
      controller: 'DigitalFeedbackController'
    })
    .when('/content_feedback', {
      templateUrl: 'views/content_feedback.html',
      controller: 'ContentFeedbackController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

// animate instructs
app.config(['$animateProvider', function($animateProvider) {
  $animateProvider.classNameFilter('/\text-/');
}]);

