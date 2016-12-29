/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.home",[]).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{
            "tabs-home":{
                templateUrl:"home.html",
                controller:"homeC"
            }
        }
    })
}]).controller("homeC",["$scope",function ($scope) {

}]);