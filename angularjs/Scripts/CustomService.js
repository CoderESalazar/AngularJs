/// <reference path="angular.min.js" />
var myApp = angular
    .module("myModule", [])    
    .controller("myController", function ($scope, StringService) {
        $scope.transformString = function (input) {            
            $scope.output = StringService.processString(input);
           
        }        
    });