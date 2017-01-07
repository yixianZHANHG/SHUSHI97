/**
 * Created by Administrator on 2017/1/7 0007.
 */
angular.module("myApp.myshou",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("myshou",{
        url:"/myshou",
        templateUrl:"myshou.html",
        controller:"myshouController"

    })
}]).controller("myshouController",["$scope","HttpFactory","$ionicModal","$ionicPopup",function ($scope,HttpFactory,$ionicModal,$ionicPopup) {


    $ionicModal.fromTemplateUrl('addresmodal.html',{
        scope:$scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function(index,event) {
        $scope.modal.show();
        var a = document.querySelector(".addressmodala");
        if(event.target.innerText=="新增地址"){

            a.innerText = "新增收货地址";
        }else {
            a.innerText = "编辑收货地址";
        }
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.dd = function(index) {
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
                    }
                },
            ]
        });
    };
}]);