(function () {
    
    angular.module("GroceryApp")
            .service("GroceryService", GroceryService);

    function GroceryService($http, $q) {
        var vm = this;

        vm.list = function (limit, offset) {
            var defer = $q.defer();
            $http.get("/api/products").then(function (result) {
                defer.resolve(result.data);
            }).catch(function (err) {
                defer.reject(err);
            });

            return defer.promise;
        };

        vm.edit = function (productId) {
            var defer = $q.defer();
            $http.get("/api/products/" + productId)
                .then(function (result) {
                    defer.resolve(result.data);
                })
                .catch(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        };
        
        vm.save = function (product) {
            var defer = $q.defer();
            $http.put("/api/products/" + product.id, product)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        vm.remove = function (product) {
            var defer = $q.defer();
            $http.delete("/api/products/" + product.id)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
        
        vm.search = function (searchType, keyword) {
            var defer = $q.defer();
            var params = {
                searchType: searchType,
                keyword: keyword
            };
            $http.get("/api/products", {
                params: params
                }).then(function (results) {
                console.log(results)
                    defer.resolve(results.data);
                }).catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
    }

    GroceryService.$inject = ['$http', '$q'];
    
})();
