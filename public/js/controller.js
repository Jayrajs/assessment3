(function () {
    angular.module("BooksApp")
        .controller("ListCtrl", ListCtrl)
        .controller("EditCtrl", EditCtrl);

    function ListCtrl(BooksService, $state) {
        var vm = this;
        vm.books = "";
        vm.typesOfSearch = ['Title','Author'];
        vm.searchType = [];
        vm.searchType.selectedType = [];

        vm.search = function (searchType, keyword) {
            if(searchType.length==0) {
                alert('Please select at least one search type');
            }
            else {
                BooksService.search(searchType, keyword)
                    .then(function (books) {
                        vm.books = books;
                    })
                    .catch(function (err) {
                        console.info("Some Error Occured",err);
                    });
            }
        };
        
        vm.getBook = function (id) {
            $state.go("edit", {'bookId' : id});
        };
        
        BooksService.list()
            .then(function (books) {
                vm.books = books;
            }).catch(function (err) {
            console.info("Some Error Occured",err)
        });
    }

    ListCtrl.$inject = ['BooksService', '$state'];

    function EditCtrl(BooksService, $stateParams, $state) {
        var vm = this;
        vm.book = {};

        vm.cancel = function () {
            $state.go("list");
        };
        
        BooksService.edit($stateParams.bookId)
            .then(function (book) {
                console.log(book);
                vm.book = book;
                console.log(vm.book);
            }).catch(function (err) {
                console.info("Some Error Occured",err)
            });

        vm.save = function () {
            console.log("Saving the changes");
            BooksService.save(vm.book)
                .then(function (result) {
                    console.info("Book saved.");
                    $state.go("list");
                }).catch(function (err) {
                console.info("Some Error Occured",err)
            });
        }

    }

    EditCtrl.$inject = ['BooksService', '$stateParams', '$state'];
    
})();
