define([
    "knockout",
    path + "products/products.viewmodel",
    pathToHtml + "products/products.template.html",
    path + "cart/index",
    path + "pagination/index"
], (ko, viewModel, template) => {

    ko.components.register("products", {
        template,
        viewModel
    });

});