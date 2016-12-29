/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.home",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{
            "tabs-home":{
                templateUrl:"home.html",
                controller:"homeC"
            }
        }
    })
}]).controller("homeC",["$scope","HttpFactory",function ($scope,HttpFactory) {
   var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        // console.log(result);
        $scope.items = result.goodsData;
        $scope.ite = result.bannerData;
        // console.log(result.bannerData)
    });
    $scope.doSome =function () {
        console.log("dddddd");
    }
}]);