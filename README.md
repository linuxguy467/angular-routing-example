# angular-routing-example
Example of Routing in Angular JS

##Angular Routing Snippet
```javascript
    scotchApp.config(function ($routeProvider) {
        $routeProvider
    
            // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
    
            // route for the about page
            .when('/module1', {
                templateUrl: 'pages/module1.html',
                controller: 'aboutController'
            })
    
            // route for the contact page
            .when('/module2', {
                templateUrl : 'pages/module2.html',
                controller  : 'contactController'
            });
    });
```
