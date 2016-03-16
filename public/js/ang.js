angular.module('lb', [])
  .controller('LBController', function($scope, $http) {
    var ctl = this;
    ctl.calls = [];

    function work(size) {
      Materialize.toast('Requête envoyée !', 1000);
      $http({
        method: 'GET', 
        url: '/work/' + size
        })
        .then(function successCallback(res) {
          ctl.calls.push(res.data);
        }, function errorCallback(res) {
          console.log(res);
        });
    };

    ctl.bigWork = function() {
      work(1000000000);
    };

    ctl.smallWork = function() {
      work(0);
    };

    ctl.clear = function() {
      ctl.calls = [];
    };
  });
