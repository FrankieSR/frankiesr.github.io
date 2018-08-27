define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function headerLogic(params) {
        const vm = {};
        vm.lengthPurchaseCart = params.itemsInPurchaseCart;

        // ---- open and close purchase cart ----
        //
        vm.visibProdInPurchaseCart = () => {
            params.visibilityCart(!params.visibilityCart());
        }

        return vm;
    }

    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to a common store
    //
    return connect(joinParamsToState)(headerLogic);
});
