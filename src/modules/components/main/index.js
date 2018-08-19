define([
    "knockout",
    path + "main/main.viewmodel",
    pathToHtml + "main/main.template.html",
    path + "content/index",
    path + "sidebar/index"
], (ko, viewModel, template) => {

    ko.components.register("main-template", {
        template,
        viewModel
    });

});