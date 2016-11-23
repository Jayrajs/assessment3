(function () {
    angular.module("GroceryApp")
        .config(GroceryConfig);

    function GroceryConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("list", {
                url: "/list",
                templateUrl: "/views/list.html",
                controller: "ListCtrl as ctrl"
            })
            .state("edit", {
                url: "/edit/:productId",
                templateUrl: "/views/edit.html",
                controller: "EditCtrl as ctrl"
            });

        $urlRouterProvider.otherwise("/list");
    }

    GroceryConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
})();
