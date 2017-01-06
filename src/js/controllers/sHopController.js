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
    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        // console.log(result);
        $scope.items = result.goodsData;
        $scope.ite = result.bannerData;
        // console.log(result.bannerData)
    });


}]);