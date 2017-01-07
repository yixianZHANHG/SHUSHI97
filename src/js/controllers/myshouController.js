/**
 * Created by Administrator on 2017/1/7 0007.
 */
angular.module("myApp.myshou",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("myshou",{
        url:"/myshou",
        templateUrl:"myshou.html",
        controller:"myshouController"

    })
}]).controller("myshouController",["$scope","HttpFactory","$ionicPopup","$ionicActionSheet",function ($scope,HttpFactory,$ionicPopup,$ionicActionSheet) {
    //var url = "http://114.112.94.166/sunny/wap/api/ushoppingCart"
    //    ;
    //HttpFactory.getData(url).then(function (result) {
        //console.log(result);
        //$scope.items = result.shoppingCart;
        //console.log(result.shoppingCart);
        //$scope.ite = result.bannerData;
        // console.log(result.bannerData)
    //});

    $scope.show = function() {
console.log("sssssss");
        // 显示操作表
        //$ionicActionSheet.show({
        //    buttons: [
        //        { text: '<b>Share</b> This' },
        //        { text: 'Move' },
        //    ],
        //    destructiveText: 'Delete',
        //    titleText: 'Modify your album',
        //    cancelText: 'Cancel',
        //    buttonClicked: function(index) {
        //        return true;
        //    }
        //});

    };
}]);