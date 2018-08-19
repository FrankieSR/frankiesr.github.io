define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function changePageSizeAndSort(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        const vm = {};
        vm.quantityItems = params.itemsLength;
        vm.items = params.allProducts;
        vm.pageIndex = params.pageIndex;
        vm.visibleItems = ko.observable(false);
        vm.visiblePriceSortItems = ko.observable(false);
        vm.visibleNameSortItems = ko.observable(false);

        // ---------------- change items on a page -----------
        // -------added setTimeout to simulate the load from the database --

        vm.changeSize = qty => {
            vm.pageIndex(0);
            setTimeout(() => {
                return params.pageSize(qty);
            }, 450)
        };

        // ----------------- sorted a price --------------------
        // -----added setTimeout to simulate the load from the database --
        vm.sortedPriceHigh = () => {
            setTimeout(() => {
                vm.items.sort((a, b) => {
                    return a.price() == b.price() ?
                        0 :
                        a.price() < b.price() ? -1 : 1;
                });
            }, 450)
        };

        vm.sortedPriceLow = () => {
            setTimeout(() => {
                vm.items.sort((a, b) => {
                    return a.price() == b.price() ?
                        0 :
                        a.price() > b.price() ? -1 : 1;
                });
            }, 450)
        };

        // ----------------- sort a name --------------------
        // ----added setTimeout to simulate the load from the database --
        vm.sortedNameLow = () => {
            setTimeout(() => {
                vm.items.sort(
                    (a, b) =>
                    a.name() !== b.name() ? (a.name() < b.name() ? -1 : 1) : 0
                );
            }, 450)
        };

        // -----added setTimeout to simulate the load from the database --
        vm.sortedNameHigh = () => {
            setTimeout(() => {
                vm.items.sort(
                    (a, b) =>
                    a.name() !== b.name() ? (a.name() > b.name() ? -1 : 1) : 0
                );
            }, 450)
        };
        // ----------change visibility popups on sidebar --
        //
        vm.visibilityButtonBlockItems = () => {
            vm.visibleItems(!vm.visibleItems());
        }

        vm.visibilityButtonBlockName = () => {
            vm.visibleNameSortItems(!vm.visibleNameSortItems());
        }

        vm.visibilityButtonBlockPrice = () => {
            vm.visiblePriceSortItems(!vm.visiblePriceSortItems());
        }

        return vm;
    }


    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to a common store
    //
    return connect(joinParamsToState)(changePageSizeAndSort);
});
