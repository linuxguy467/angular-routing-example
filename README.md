# angular-routing-example
Example of Routing in Angular JS

Routes in Angular is very specific syntax. The $routeProvider is used to configure routes to different pages ina an Angular SPA that loads an identified HTML template into index page where ng-view is present.

**Note: Routing in Angular only works on a local environment or server environment. To Test it is recommended to use PHPStorm or WebStorm since they have the capability of loading in a local environment. Follow these links to get them: [PHPStorm](https://www.jetbrains.com/phpstorm/) or [WebStorm](https://www.jetbrains.com/webstorm/)**
##Angular Routing Snippet
```javascript
    scotchApp.config(function ($routeProvider) {
        $routeProvider
    
            // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
    
            // route for the module 1 page
            .when('/module1', {
                templateUrl: 'pages/module1.html',
                controller: 'aboutController'
            })
    
            // route for the module 2 page
            .when('/module2', {
                templateUrl : 'pages/module2.html',
                controller  : 'contactController'
            });
    });
```
