define([
    "knockout",
    path + "pagination/pagination.viewmodel",
    pathToHtml + "pagination/pagination.template.html"
], (ko, viewModel, template) => {

    ko.components.register("pagination-template", {
        template,
        viewModel
    });

});