define([
    "knockout",
    path + "toolbar/toolbar.viewmodel",
    pathToHtml + "toolbar/toolbar.template.html"
], (ko, viewModel, template) => {

    ko.components.register("toolbar-template", {
        template,
        viewModel
    });
});