define([
    "knockout",
    path + "content/content.viewmodel",
    pathToHtml + "content/content.template.html",
    path + "toolbar/index",
    path + "products/index",
], (ko, viewModel, template) => {

    ko.components.register("content-template", {
        template,
        viewModel
    });

});