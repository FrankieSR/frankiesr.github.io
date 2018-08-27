define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function purchaseCartLogic(params) {
        const vm = {};
        vm.items = params.itemsInPurchaseCart;
        vm.visibilityCart = params.visibilityCart;
        vm.removeItemInCart = (index) => {
            params.itemsInPurchaseCart.splice(index, 1)
        };

        return vm;
    }

    function joinParamsToState(vmObject) {
        return vmObject;
    }

    // join that viewModel to a common store
    //
    return connect(joinParamsToState)(purchaseCartLogic);
});
