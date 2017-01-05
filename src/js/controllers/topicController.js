/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.topic",[]).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.topic",{
        url:"/topic",
        views:{
            "tabs-topic":{
                templateUrl:"topic.html",
                controller:"topicC"
            }
        }
    })
}]).controller("topicC",["$scope","$ionicModal","$ionicActionSheet",function ($scope,$ionicModal,$ionicActionSheet) {

    //$scope.duSome =function(){

        $ionicModal.fromTemplateUrl('dd', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.createContact = function(u) {
            $scope.modal.hide();
        };

    //}

}]);