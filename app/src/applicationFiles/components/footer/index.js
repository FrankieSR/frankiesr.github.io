define([
    "knockout",
    path + "footer/footer.viewmodel",
    pathToHtml + "footer/footer.template.html"
], (ko, viewModel, template) => {

    ko.components.register("footer-template", {
        template,
        viewModel
    });

});