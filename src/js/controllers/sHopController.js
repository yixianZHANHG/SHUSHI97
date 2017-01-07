/**
 * Created by Administrator on 2017/1/5 0005.
 */
angular.module("myApp.sHop",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("sHop",{
                url:"/sHop",
                templateUrl:"sHop.html",
                controller:"sHopController"

    })
}]).controller("sHopController",["$scope","HttpFactory","$ionicPopup",function ($scope,HttpFactory,$ionicPopup) {
    var url = "http://114.112.94.166/sunny/wap/api/ushoppingCart"
    ;
    HttpFactory.getData(url).then(function (result) {
         //console.log(result);
        $scope.items = result.shoppingCart;

    });
    $scope.showConfirm = function(index) {
        var myPopup = $ionicPopup.show({
            template: '<p>确定要删除吗？</p>',
            scope: $scope,
            buttons: [
                { text: '取消',
                    type:''
                },
                {
                    text: '确定',
                    type: 'button-positive',
                    onTap: function(e) {
                        $scope.items.splice(index,1);
                        HttpFactory.getData(url,{params:$scope.items},'DELETE').then(function (result) {
                            //console.log(result);
                            //console.log($scope.items);

                        },function(err){
                            //console.log(err);
                        });

                    }
                },
            ]
        });
    };

}]);