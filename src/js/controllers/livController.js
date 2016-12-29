/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.live",[]).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.live",{
        url:"/live",
        views:{
            "tabs-live":{
                templateUrl:"live.html",
                controller:"liveC"
            }
        }
    })
}]).controller("liveC",["$scope",function ($scope) {

}]);