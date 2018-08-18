define([
    "knockout",
    path + "purchaseCart/purchaseCart.viewmodel",
    pathToHtml + "purchaseCart/purchaseCart.template.html"
], (ko, viewModel, template) => {

    ko.components.register("purchased-template", {
        template,
        viewModel
    });

});