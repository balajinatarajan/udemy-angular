(function(){
    
    var app = angular.module('directivesModule', []);
    
    app.directive('helloWorld', function(){
        // return Object literal - called DDO (Directive Definition Object)
        return {
            template: 'Hello World'
        };
    });
}());