/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp",["ionic",'RongWebIMWidget',"myApp.tabs",'myApp.httpFactory',"myApp.home","myApp.live","myApp.topic","myApp.my","myApp.httpFactory"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"tabs.html",
        controller:"tabsC"
    });
    $urlRouterProvider.otherwise("tabs/home");
}]);