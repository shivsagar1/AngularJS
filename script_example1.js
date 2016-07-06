

// Code goes here

var app = angular.module("app",[]);



var datacntrl=function($scope)
{
   $scope.message="Some value is displayed";
  var technologies=[
    {name:"C#", likes:0,dislikes:0},
    {name:"JAVA", likes:0,dislikes:0},
    {name:"SQL", likes:0,dislikes:0},
    {name:".NET", likes:0,dislikes:0},
    ];
    
    $scope.technologies=technologies;
    
    $scope.likenumberincrease=function(technology)
    {
      technology.likes++;
    }
    
    $scope.dislikenumberincrease=function(technology)
    {
      technology.dislikes++;
    }
  
};

app.controller("datacntrl",datacntrl);











