
function MainCtrl($scope, $cookieStore, $location){
  $scope.show2 = false;
  $scope.show1 = true;
        if (!$cookieStore.get('session_user')) {
            // $scope.show2 = true;
            // // alert("Hello!!!");
            console.log("Không có tài khoản nào!!!");
        } else{
          $scope.show2 = true;
          $scope.show1 = false;
          $scope.user_name = $cookieStore.get('session_user').username;
          console.log($cookieStore.get('session_user'));
        }
  $scope.logout =function(){
    $scope.session_user = {};
    $cookieStore.remove('session_user');
    $location.path('index.html');
  }


}

function HomeCtrl($scope,$http){
// this.Title = "This is home";
  var topnews = [];
  $scope.topnews = topnews;
  $http
    .get("https://newsapi.org/v1/sources?language=en")
    .then(function(respone){
      var news = respone.data.sources;
      news.reverse();
      news.forEach(function(item, key){
        var tintuc = item;
        var key = key;
        if(key < 6){
          topnews.push(tintuc);
        }
      });
      // console.log(news);
        console.log($scope.topnews);
    });
}
function LoginCtrl($scope, $rootScope, $cookieStore, $location, AuthenticationService){
 $scope.Title = "This is login";
  	// reset login status
    // AuthenticationService.ClearCredentials();
	$scope.login = function () {
        $scope.dataLoading = true;
        $scope.session_user ={}
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
           	if (response.success) {
                // AuthenticationService.SetCredentials($scope.username, $scope.password);
                
                // $scope.error = "Login success!!!";
                $scope.session_user ={
                  username: $scope.username,
                  password: $scope.password
                }
                $cookieStore.put('session_user', $scope.session_user);
                $location.path('/index.html');
                // console.log($cookieStore.get('session_user'));
                // console.log($scope.session_user);
            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });
    };
}
function RegisterCtrl(){
  // this.Title = "This is register";
}
function ForgotPassCtrl(){
  this.Title = "This is forgot pasword";
}
function UserProCtrl($scope,$http){
  $http.get("/JSon/user.json")
  .then(function(response){
      //if(response.data.UserName="HieuTran")
      $scope.name=response.data.Name;
      $scope.username=response.data.UserName;
      $scope.email=response.data.Email;
      $scope.dateregistee=response.data.DateRegistee;
      $scope.birthday=response.data.Birthday;
      $scope.phone=response.data.Phone;
      $scope.image=response.data.image;
      $scope.gender=response.data.Gender;
      $scope.address=response.data.Address;
      $scope.password=response.data.Password;
  })
}
//$scope.submit_form = function()
//            {
//                $http({
//                        url: "http://localhost/services/test.php",
//                        method: "POST",
//                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                        data: $.param($scope.formAdata)
//                    }).success(function(data, status, headers, config) {
//                        $scope.status = status;
//                    }).error(function(data, status, headers, config) {
//                        $scope.status = status;
//                    });
//            }
//app.controller('UserProCtrl', function($scope, $http) {
//  $http.get("data.json")
//  .then(function(response) {
//      $scope.username = response.data;
//      $scope.password = response.data;
//      
//  })
//  return $scope.username;
//});
app.controller('MainCtrl',MainCtrl);
angular
	.module('Home')
	.controller('HomeCtrl',HomeCtrl)
app.controller('RegisterCtrl',RegisterCtrl);
app.controller('ForgotPassCtrl',ForgotPassCtrl);
app.controller('UserProCtrl',UserProCtrl);
angular
	.module('Authentication')
	.controller('LoginCtrl',LoginCtrl)


// function MainController($scope){
//   $scope.name ="";
// }
// function HomeController(){
// this.Title = "This is home";
// }
// function LoginController(){
//   this.Title = "This is login";
// }
// function RegisterController(){
//   this.Title = "This is register";
// }
// angular
//   .module('myApp')
//   .controller('MainController',MainController)
//   .controller('HomeController',HomeController)
//   .controller('LoginController',LoginController)
//   .controller('RegisterController',RegisterController);

// function MyController() {

// }
// function LoginController($scope, $rootScope, $location, AuthenticationService) {
//   // reset login status
//         AuthenticationService.ClearCredentials();

//         $scope.login = function () {
//             $scope.dataLoading = true;
//             AuthenticationService.Login($scope.username, $scope.password, function (response) {
//                 if (response.success) {
//                     AuthenticationService.SetCredentials($scope.username, $scope.password);
//                     $location.path('/');
//                 } else {
//                     $scope.error = response.message;
//                     $scope.dataLoading = false;
//                 }
//             });
//         };
// }
// function RegisterController() {

// }
// function ForgotPassController() {

// }
// function UserProfileController() {

// }



// // .controller('LoginController',
// //     ['$scope', '$rootScope', '$location', 'AuthenticationService',
// //     function ($scope, $rootScope, $location, AuthenticationService) {
// //         // reset login status
// //         AuthenticationService.ClearCredentials();

// //         $scope.login = function () {
// //             $scope.dataLoading = true;
// //             AuthenticationService.Login($scope.username, $scope.password, function (response) {
// //                 if (response.success) {
// //                     AuthenticationService.SetCredentials($scope.username, $scope.password);
// //                     $location.path('/');
// //                 } else {
// //                     $scope.error = response.message;
// //                     $scope.dataLoading = false;
// //                 }
// //             });
// //         };
// //     }]);

// // var app = angular.module('myApp', ['ngMessages']);
// // function myController() {

// // }
// // function LoginController() {

// // }
// // function UserProfileController() {

// // }
// // function ForgotPassController() {

// // }
// // function RegistrationController($scope) {
// //     $scope.message = "";
// //     $scope.name = "";
// //     $scope.userName = "";
// //     $scope.email = "";
// //     $scope.password = "";
// //     $scope.confirmPassword = "";

// //     $scope.user = {
// //       name:"",
// //       userName: "",
// //       email:"",
// //       password: "",
// //       confirmPassword: ""
// //     };
// //     $scope.submitForm = function(){
// //       $scope.user = {
// //         name:$scope.name,
// //         userName: $scope.userName,
// //         email:$scope.email,
// //         password: $scope.password,
// //         confirmPassword: $scope.confirmPassword
// //       };
// //       if ($scope.exampleForm.$valid) {
// //                 alert('Your registration has been successfully done. Thank you!');
// //       }
// //       // if (isValid) {
// //       //   $scope.message = "Submitted " + $scope.user.username;
// //       // } else {
// //       //   $scope.message = "There are still invalid fields below";
// //       // }
// //       console.log($scope.user);
      
// //     };
// // };
// // function compareTo() {
// //     return {
// //       require: "ngModel",
// //       scope: {
// //         otherModelValue: "=compareTo"
// //       },
// //       link: function(scope, element, attributes, ngModel) {

// //         ngModel.$validators.compareTo = function(modelValue) {
// //           return modelValue == scope.otherModelValue;
// //         };

// //         scope.$watch("otherModelValue", function() {
// //           ngModel.$validate();
// //         });
// //       }
// //     };
// //   };
// // app.controller("myController", myController);
// // app.directive("compareTo", compareTo);
// // app.controller("RegistrationController", RegistrationController);
// // app.controller("LoginController", LoginController);
// // app.controller("UserProfileController", UserProfileController);
// // app.controller("ForgotPassController", ForgotPassController);
// angular
//     .module('myApp')
//     .controller('MyController', MyController)
//     .controller('LoginController', LoginController)
//     .controller('RegisterController', RegisterController)
//     .controller('ForgotPassController', ForgotPassController)
//     .controller('UserProfileController', UserProfileController)



/*-------------------------------------------*/
/**
 * Created by Ngo Thanh Tung on 3/13/2016.
 */

// // App
// var app = angular.module('myApp', [
//     'ui.router',
// ]);


// function config($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise("/home");

//     $stateProvider
//         .state('home', {
//             url: '/home',
//             templateUrl: 'view/home.html',
//             controller: 'HomeController',
//             data: { pageTitle: 'HOME' }
//         })
//         .state('login', {
//             url: '/login',
//             templateUrl: 'view/login.html',
//             controller: 'LoginController',
//             data: { pageTitle: 'LOGIN' }
//         })
//         .state('register', {
//             url: '/register',
//             templateUrl: 'view/register.html',
//             controller: 'RegisterController',
//             data: { pageTitle: 'REGISTER' }
//         });
// }
// function MainController($scope){
//   $scope.name ="";
// }
// function HomeController(){
// this.Title = "This is home";
// }
// function LoginController(){
//   this.Title = "This is login";
// }
// function RegisterController(){
//   this.Title = "This is register";
// }
// app.config(config);
// app.controller('MainController',MainController);
// app.controller('HomeController',HomeController)
// app.controller('LoginController',LoginController)
// app.controller('RegisterController',RegisterController);