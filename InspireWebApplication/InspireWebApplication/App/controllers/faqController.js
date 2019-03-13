

app.controller('faqController', function (authorService) {

    var vm = this;
    vm.message = 'Golriz';
    var currentMenu = document.getElementById('FAQMenu');
    currentMenu.className += " menuSelected";
    var promiseGet = authorService.getFAQs();
    promiseGet.then(function (p1) {

        vm.FAQs = p1.data.items;
        //alert(JSON.stringify(vm.FAQs))

    },
        function (errorP1) {
            alert('FAILURE LOADING Employees', errorP1)
        });


})