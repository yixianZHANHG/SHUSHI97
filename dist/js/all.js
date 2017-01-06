/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp",["ionic",'RongWebIMWidget',"myApp.tabs",'myApp.httpFactory',"myApp.home","myApp.live","myApp.topic","myApp.my","myApp.httpFactory","myApp.homeCon","myApp.sHop"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"tabs.html",
        controller:"tabsC"
    });
    $urlRouterProvider.otherwise("tabs/home");
}]);
/**
 * Created by Administrator on 2017/1/4 0004.
 */
angular.module("myApp.homeCon",['ionic']).config(["$stateProvider",function ($stateProvider) {
    $stateProvider.state("tabs.homeCon",{
        url:"/homeCon",
        views:{
            "tabs-home":{
                templateUrl:"homeCon.html",
                controller:"homeConController"
            }

        }

    })
}]).controller("homeConController",["$scope","HttpFactory",function ($scope,HttpFactory) {

}]);
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


    $ionicModal.fromTemplateUrl('modal.html',{
        scope:$scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
}]);
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
/**
 * Created by Administrator on 2016/12/28.
 */
angular.module("myApp.tabs",["ionic"]).controller("tabsC",["$scope",'RongCustomerService',function ($scope,RongCustomerService) {
    var dWidth = document.body.offsetWidth;
    var dHeight = document.body.offsetHeight;
    RongCustomerService.init({
        appkey:"n19jmcy5n1ax9",
        token:"tQCji1StH1yEH92cIb1YXvvltsqe3R/YFVylhWCi6JsbFOQbAGQevo6875Ume5tOhUMKAMCuYFiEWpOW+HIPjQ==",
        customerServiceId:"KEFU148300247561163",
        position:RongCustomerService.Position.right,
        reminder:" ",
        // displayConversationList:false,
        style:{
            width:window.screen.width,
            height:window.screen.height-62,
            displayMinButton:false,
            positionFixed:true
        },
        onSuccess:function(){
            //初始化完成
            //设置客服按钮位置
            var kf = angular.element(document.getElementById('rong-widget-minbtn'));
            kf.css('bottom','80px');
            kf.css('right','20px');
            kf.css('z-index','9');
            var ks = angular.element(document.getElementById('rong-conversation'));
            ks.css('height','100%')
            ks.css('width','100%')
            var rongSendBtn = angular.element(document.getElementById('rong-sendBtn'));
            rongSendBtn.css('backgroundColor','#E60012');
            kf.on('click',function () {
                // $rootScope.hideTabs = true;
                // $state.reload();
                // $scope.openModal();
                // $state.go('rykf');
                // console.log(indexRY);
                // indexRY.style.position = 'absolute';
                // indexRY.style.height = '800px';
                // indexRY.style.width = '300px';
                // indexRY.style.backgroundColor = 'red';
                // document.body.removeChild(mm);
                // rongConversation.removeClass('ng-hide');

            });

            var minBtn = angular.element(document.getElementById('header').childNodes[1].childNodes[1]);
            minBtn.on('click',function () {
                // $rootScope.hideTabs = false;
                // $state.reload();
            });
            // WebIMWidget.onClose = function() {
            //     // $rootScope.hideTabs = false;
            //     $state.reload();
            // };


        },
        onError:function(){
            //初始化错误;
        }
    });
}]);
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


}]);
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.httpFactory',['ionic']).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,type) {
            if (url){
                var promise = $q.defer();
                // url = "http://192.168.0.100:3000/?myUrl=" + encodeURIComponent(url);
                // url = "http://localhost:3000/?myUrl=" + encodeURIComponent(url);
                url = url;
                type = type ? type:"GET";
                $http({
                    url:url,
                    method:type,
                    timeout:20000
                }).then(function (reslut) {
                    reslut =reslut.data;
                    // reslut = reslut[Object.keys(reslut)[0]];
                    promise.resolve(reslut);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    };
}]);
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.slideBox',[]).directive('mgSlideBox',[function () {
    return{
        restrict:"E",
        scope:{sourceArray:'='},
        template:'<div class="topCarousel"><ion-slide-box delegate-handle="topCarouselSlideBox" on-slide-changed="slideHasChanged($index)" auto-play="true" slide-interval="1000" show-pager="true" does-continue="true" ng-if="isShowSlideBox" on-drag="drag($event)"> <ion-slide ng-repeat="ads in sourceArray track by $index" ng-click="goToDetailView($index)"><img ng-src="{{ads.imgsrc}}" class="topCarouselImg"></ion-slide> </ion-slide-box><div class="slideBottomDiv"></div></div>',
        controller:['$scope','$element','$ionicSlideBoxDelegate',function ($scope,$element,$ionicSlideBoxDelegate) {
            $scope.goToDetailView = function (index) {
                console.log('进入详情页' + index);
            };
            var lastSpan = $element[0].lastElementChild;

            $scope.$watch('sourceArray',function (newVal,oldVal) {
                if (newVal && newVal.length){
                    /*
                    * 两种方案解决轮播不能立刻显示或者显示错位的bug 改bug由于ng-repeat和slideBox的特性造成
                    * 完美的解决方案是使用添加ng-if 另一种是用update 和 loop
                    * */
                    $scope.isShowSlideBox = true;
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').loop(true);
                    lastSpan.innerText = $scope.sourceArray[0].title;
                }
            });
            $scope.slideHasChanged = function (index) {
                // lastSpan.innerText = $scope.sourceArray[index].title;
            };
            //页面刚加载出来的时候禁止滑动
            $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
            //拖拽轮播图的时候也要禁止底层的slideBox滑动
            $scope.drag = function (event) {
                $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                //阻止事件冒泡
                event.stopPropagation();
            };

        }],
        replace:true,
        link:function (scope,tElement,tAtts) {
        }
    };
}]);