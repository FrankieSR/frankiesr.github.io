define([
    "knockout",
    path + "cart/cart.viewmodel",
    pathToHtml + "cart/cart.template.html"

], (ko, viewModel, template) => {

    ko.components.register("cart", {
        viewModel,
        template
    });
});