angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {
    $scope.selectedForm = [
        { name: 'po spletni strani', id: 1}, 
        { name: 'po AngularJS obrazcu', id: 2 }, 
        { name: 'po svetovanju', id: 3 }
    ];

    $scope.submitForm = function() {
        console.log('woot');
        alert('Sending data...');
    }
});