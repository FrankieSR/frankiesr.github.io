define([
    "knockout",
    path + "app/app.viewmodel",
    pathToHtml + "app/app.template.html",
    path + "header/index",
    path + "logo/index",
    path + "purchaseCart/index",
    path + "main/index",
    path + "content/index",
    path + "footer/index",

], (ko, viewModel, template) => {

    ko.components.register("app", {
        template,
        viewModel
    });

});