define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function panginationProduct(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        const vm = {};
        vm.items = params.items;
        vm.allProducts = params.allProducts;



        vm.pageIndex = params.pageIndex;
        // ------- change items quantity on page ----
        vm.maxPageIndex = ko.computed(() => {
          vm.itemsLength = params.allProducts().length;
            return Math.ceil(vm.itemsLength / params.pageSize() - 1);
        });

        // ----- calculated all pages ---
        vm.allPages = ko.computed(() => {
            var pages = [];
            for (let i = 0; i <= vm.maxPageIndex(); i++) {
                pages.push({
                    pageNumber: i + 1
                });
            }
            return pages;
        });

        // ------ navigation previous and next pages --
        //
        vm.prevPage = () => {
            if (params.pageIndex() > 0) {
                return params.pageIndex(params.pageIndex() - 1);
            }
        };

        vm.nextPage = () => {
            if (params.pageIndex() < vm.maxPageIndex()) {
                params.pageIndex(params.pageIndex() + 1);
            }
        };

        // ---- navigation other pages
        vm.panginationPage = i => {
            return vm.pageIndex(i);
        };

        return vm;
    }

    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to common store
    //
    return connect(joinParamsToState)(panginationProduct);
});
