var app = angular.module('myReddit');

app.controller('myController', function($scope, $http){

  $http.get('https://www.reddit.com/r/MapPorn/.json').then(function(response){

$scope.posts = response.data.data.children;

console.log($scope.posts);

  });

});
