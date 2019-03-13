
'use strict'
app.controller('homeController', function (authorService) {

    var vm = this;

    vm.message = 'Golriz Home Page Test!';
    var currentMenu = document.getElementById('HomeMenu');
    currentMenu.className += " menuSelected";
    var promiseGet = authorService.getItems();

        promiseGet.then(function (p1) {

            vm.Obj = p1.data.data;
           
          //  alert('success' + JSON.stringify(vm.Items))

        },
            function (errorP1) {
                alert('FAILURE LOADING Employees', errorP1)
            });

})