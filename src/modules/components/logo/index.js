define([
    "knockout",
    path + "logo/logo.viewmodel",
    pathToHtml + "logo/logo.template.html"
], (ko, viewModel, template) => {

    ko.components.register("logo-template", {
        template,
        viewModel
    });

});