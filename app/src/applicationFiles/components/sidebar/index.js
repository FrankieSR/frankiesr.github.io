define([
    "knockout",
    path + "sidebar/sidebar.viewmodel",
    pathToHtml + "sidebar/sidebar.template.html"
], (ko, viewModel, template) => {

    ko.components.register("sidebar-template", {
        viewModel,
        template
    });
});