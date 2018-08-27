//--------  global path to files ----------------------------
const path = "modules/components/";
const pathToHtml = "text!" + path;
//-----------------------------------------------------------

define([
    "knockout",
    "lib/knockout-store/index",
    "modules/data/getData",
    "lib/knockout-store/store",
    "lib/knockout-store/connect",
    path + "app/index",
    path + "app/app.viewmodel"
], (ko, { setState }, getData) => {
    ko.deferUpdates = true;
    let dataURL = "../../products/jsonProducts.json"; // -- path to products json --

    //  -- this is my application state  ----
    //  -- used variables ------
    const state = {
        items: ko.observableArray([]),
        allProducts: ko.observableArray([]),
        pageSize: ko.observable(9), // change quantity products on page in begin
        pageIndex: ko.observable(0),
        itemsLength: ko.observable(),
        maxPrice: ko.observable(),
        minPrice: ko.observable(),
        itemsInPurchaseCart: ko.observableArray(),
        visibilityCart: ko.observable(false)
    };

    setState(state);

    // ---- get json data ----------------
    try {
        getData(dataURL, data => {
            // --- create a new array with my state data ---
            console.log(data);
            const observableProducts = data.map(
                ({ name, price, description, images }) => {
                    return {
                        name: ko.observable(name),
                        price: ko.observable((price / 1000) * 1000),
                        description: ko.observable(description),
                        image: ko.observable(images[0])
                    };
                }
            );

            observableProducts.sort((a, b) => {
                if (a.price() >= b.price()) {
                    state.maxPrice(a.price());
                }
                if (a.price() === b.price()) {
                    return a.price() == b.price()
                        ? state.minPrice(a.price())
                        : a.price() < b.price()
                            ? state.minPrice(b.price())
                            : state.minPrice(a.price());
                }
            });

            state.allProducts(observableProducts);
            state.itemsLength(state.allProducts().length);
            state.items(observableProducts);
        });
    } catch (err) {
        console.log(" WARNING! We are have a problem! Please fix this ->", err);
    }

    ko.applyBindings();
});
