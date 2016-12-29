/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.my",[]).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.my",{
        url:"/my",
        views:{
            "tabs-my":{
                templateUrl:"my.html",
                controller:"myC"
            }
        }
    })
}]).controller("myC",["$scope",function ($scope) {

}]);