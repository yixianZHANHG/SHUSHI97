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
}]).controller("liveC",["$scope","$state","$location","$ionicModal","$ionicActionSheet","HttpFactory",function ($scope,$state,$location,$ionicModal,$ionicActionSheet,HttpFactory) {
    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        // console.log(result);
        $scope.items = result.goodsData;
        $scope.ite = result.bannerData;
        // console.log(result.bannerData)
    });


    $scope.doSome =function(index){
        //$state.go("homeCon");
        $location.path("tabs/homeCon");
        console.log(index);
    };

}]);