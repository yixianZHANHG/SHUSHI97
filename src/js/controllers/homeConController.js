/**
 * Created by Administrator on 2017/1/4 0004.
 */
angular.module("myApp.homeCon",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.homeCon",{
        url:"/homeCon",
        views:{
            "tabs-home":{
                templateUrl:"homeCon.html",
                controller:"homeConController"
            }

        }

    })
}]).controller("homeConController",["$scope","HttpFactory",function ($scope,HttpFactory) {

}]);