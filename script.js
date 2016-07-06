
// Code goes here

var app = angular.module("app",[]);

app.controller("hellocntrl", function($scope) {
  
  $scope.fname = "Hi";
  $scope.lname = "Hello";
  
})

app.controller("arraycntrl", function($scope) {
  
  $scope.states = ['NJ', 'NY', 'IL', 'CA'];
  
  $scope.addState = function() {
    $scope.states.push($scope.newstate);
    $scope.newstate = "";
  }
  
  $scope.delState = function(state) {
    var index = $scope.states.indexOf(state);
    $scope.states.splice(index, 1);
  }
  
});

app.controller("datacntrl", function($scope, $http) {
  
  $http.get("data.json").success(function(data) {
      $scope.info = data;
  })
  
  
  
})

/*
app.controller("weathercntrl",function($scope,$http){
  
  $http.get("http://api.github.com/users").success(function(data) {
    $scope.forecast=data.list;
      
  })
  
*/
app.controller("weathercntrl",function($scope,$http){
  
 $http.get("gituserdata.json").success(function(data) {
    $scope.gitusers=data;
      
  }) 
  
  
  $scope.toAdmin=function(userId){
   for(var index in $scope.gitusers)
   {
     if($scope.gitusers[index].id==userId)
     {
       $scope.gitusers[index].site_admin=true;
     }
   }
  }
  
  
})





















