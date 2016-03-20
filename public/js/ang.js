angular.module('lb', [])
  .controller('LBController', function($scope, $http) {
    var ctl = this;
    ctl.calls = [];

    function work(s, d) {
      Materialize.toast('Requête envoyée !', 1000);
      $http({
        method: 'POST', 
        url: '/work', 
        data: {
          size: s, 
          data: d
        }})
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
    
    ctl.bigRequest = function() {
      var someData = "1234567890";
      var iterations = 8;
      for (var i = 0; i < iterations; i++) {
        someData += someData + someData;
      }
      work(0, someData);
    };

    ctl.clear = function() {
      ctl.calls = [];
    };
  });
