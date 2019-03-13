'use strict'
app.controller('contactController', function (authorService) {

    var vm = this;

    vm.message = 'Golriz';
    var currentMenu = document.getElementById('ContactMenu');
    currentMenu.className += " menuSelected";
    vm.Submit = function () {

        var info = {

            name: vm.Name,
            email: vm.Email,
            phone: vm.Phone,
            order: vm.OContent
        }
        //alert(JSON.stringify(info))
        var GetResult = authorService.SubmitCustomerInfo(info);
        GetResult.then(function (p1) {

            vm.success = p1.data;
            if (vm.success.s == 1) {
                alert('Thank you ' + info.name + '!!!!!!!!!! :)');

                //vm.resetForm();
            }
            else {
                alert("Error has occured while submiting review! :( " + JSON.stringify(data));
            }

        },
            function (errorP1) {
                alert('FAILURE LOADING Employees', errorP1)
            });

    }

    //vm.resetForm = function () {
    //   vm.Name='',
    //   vm.Email='',
    //   vm.Phone='',
    //   vm.OContent=''

    //}
})