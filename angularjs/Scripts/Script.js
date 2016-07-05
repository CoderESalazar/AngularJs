/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        //var countries = [
        //    {
        //        name: "UK",
        //        cities: [
        //            { name: "London" },
        //            { name: "Manchester" },
        //            { name: "Birmingham"},
        //        ]
        //    }
        //];
        //var employees = [
        //    { firstName: "Ed", dateOfBirth: new Date("April, 20, 1973"), gender: "Male", salary: 60000 },
        //    { firstName: "Test", dateOfBirth: new Date("April, 20, 1975"), gender: "Male", salary: 70000 },
        //    { firstName: "Test1", dateOfBirth: new Date("April, 20, 1977"), gender: "Female", salary: 50000 },
        //    { firstName: "Test3", dateOfBirth: new Date("April, 20, 1979"), gender: "Female", salary: 90000 },
        //    { firstName: "Test4", dateOfBirth: new Date("April, 20, 1981"), gender: "Male", salary: 100000 },
        //];

        var employees = [
            { firstName: "Ed", gender: "Male", salary: 60000 },
            { firstName: "Test", gender: "Male", salary: 70000 },
            { firstName: "Test1", gender: "Female", salary: 50000 },
            { firstName: "Test3", gender: "Female", salary: 90000 },
            { firstName: "Test4", gender: "Male", salary: 100000 },
        ];

        //var employees = [
        //    { firstName: "Ed", lastName: "Salazar", gender: "Male", salary: 60000 },
        //    { firstName: "Test", lastName: "Test", gender: "Male", salary: 70000 },
        //    { firstName: "Test1", lastName: "Test2", gender: "Female", salary: 50000 },
        //    { firstName: "Test3", lastName: "Test3", gender: "Female", salary: 90000 },
        //    { firstName: "Test4", lastName: "Test4", gender: "Male", salary: 100000 },
        //];

        $scope.employees = employees;
        $scope.employeeView = "EmployeeTable.html";
        //$scope.sortColumn = "firstName";
        //$scope.reverseSort = false;
        //$scope.sortData = function (column) {
        //    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        //    $scope.sortColumn = column;
        //}
        //$scope.getSortClass = function (column) {
        //    if ($scope.sortColumn == column) {
        //        return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        //    }
        //    return '';
        //}
});