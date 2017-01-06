/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.httpFactory',['ionic']).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,params,type) {
            if (url){
                var promise = $q.defer();
                url = url;
                type = type ? type:"GET";
                params = params ? params:{};
                $http({
                    url:url,
                    params:params,
                    method:type,
                    timeout:20000
                }).then(function (reslut) {
                    //console.log(reslut.data);
                    reslut =reslut.data;
                    promise.resolve(reslut);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    };
}]);