/**
 * Created by Administrator on 2017/1/5 0005.
 */
angular.module("myApp.sHop",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("sHop",{
                url:"/sHop",
                templateUrl:"sHop.html",
                controller:"sHopController"

    })
}]).controller("sHopController",["$scope","HttpFactory",function ($scope,HttpFactory) {

}]);