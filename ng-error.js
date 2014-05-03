(function(angular){

    angular.module('ngError', ['ng'])
    
    .directive('ngError', ['$parse', function($parse){

        return {
            restrict: 'A',
            compile: function($element, attr) {
                var fn = $parse(attr['ngError']);

                return function(scope, element, attr) {
                    element.on('error', function(event) {
                        scope.$apply(function() {
                            fn(scope, {$event:event});
                        });
                    });
                };

            }
        };

    }]);

    
})(angular);