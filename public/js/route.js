(function () {
    angular.module("BooksApp")
        .config(BooksConfig);

    function BooksConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("list", {
                url: "/list",
                templateUrl: "/views/list.html",
                controller: "ListCtrl as ctrl"
            })
            .state("edit", {
                url: "/edit/:bookId",
                templateUrl: "/views/edit.html",
                controller: "EditCtrl as ctrl"
            });

        $urlRouterProvider.otherwise("/list");
    }

    BooksConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
})();
