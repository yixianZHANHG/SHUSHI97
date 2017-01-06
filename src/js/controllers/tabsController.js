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