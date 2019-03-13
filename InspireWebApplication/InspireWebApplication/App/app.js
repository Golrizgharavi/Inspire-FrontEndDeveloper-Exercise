var app = angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'

            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'

            })
            .when('/faq', {
                templateUrl: 'views/faq.html',
                controller: 'faqController'

            })

    }])


 .controller('mainController', function ($scope) {


    })




    .controller('subscribeForm', ['$scope', 'authorService', function ($scope, authorService) {

        $scope.Subscribe = function () {
            // alert($scope.email)
            var SubscribeMsg = document.getElementById('SubscribeMsg');
            if ($scope.email) {

                var submitEmail = authorService.SubmitEmailSubscribe($scope.email);
                submitEmail.then(function (p1) {

                    //alert(JSON.stringify(p1.data))
                    if (p1.data.s == 1)
                        SubscribeMsg.innerHTML = 'Thank you for Subscription!! :)';
                    else
                        alert("Error has occured while subscribing.. :(" + JSON.stringify(data));

                },

                    function (errorP1) { alert('Failure Loading!' + errorP1) });
                $scope.email = '';

            }
        };
    }]);