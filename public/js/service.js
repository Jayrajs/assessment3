(function () {
    
    angular.module("BooksApp")
            .service("BooksService", BooksService);

    function BooksService($http, $q) {
        var vm = this;

        vm.list = function (limit, offset) {
            var defer = $q.defer();
            var params = {
                limit: limit || 10,
                offset: offset || 0
            };
            $http.get("/api/books", {
                params: params
            }).then(function (result) {
                defer.resolve(result.data);
            }).catch(function (err) {
                defer.reject(err);
            });

            return defer.promise;
        };

        vm.edit = function (bookId) {
            var defer = $q.defer();
            $http.get("/api/book/" + bookId)
                .then(function (result) {
                    defer.resolve(result.data);
                })
                .catch(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        };
        
        vm.save = function (book) {
            var defer = $q.defer();
            $http.post("/api/book/save",{
                params: book
            }
            ).then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
        
        vm.search = function (searchType, keyword) {
            var defer = $q.defer();
            param = {searchType: searchType, keyword: keyword};
            $http.get("/api/books/search", {
                params: param
                }).then(function (results) {
                console.log(results)
                    defer.resolve(results.data);
                }).catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
    }

    BooksService.$inject = ['$http', '$q'];
    
})();
