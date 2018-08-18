define([
    "knockout",
    path + "header/header.viewmodel",
    pathToHtml + "header/header.template.html",
    path + "logo/logo.viewmodel",
    pathToHtml + "logo/logo.template.html"
], (ko, viewModel, template) => {

    ko.components.register("header-template", {
        template,
        viewModel
    });

});