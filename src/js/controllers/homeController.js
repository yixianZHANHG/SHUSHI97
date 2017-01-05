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
}]).controller("homeC",["$scope","$state","$location","$ionicModal","$ionicActionSheet","HttpFactory",function ($scope,$state,$location,$ionicModal,$ionicActionSheet,HttpFactory) {
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

    $ionicModal.fromTemplateUrl('dd', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.createContact = function() {
        $scope.modal.hide();
    };

}]);