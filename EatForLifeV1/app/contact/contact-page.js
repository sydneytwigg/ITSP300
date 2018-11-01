const ContactViewModel = require("./contact-view-model");
var view = require("ui/core/view");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    var txtName = view.getViewById(page, "contactName");
    var txtEmail = view.getViewById(page, "contactEmail");
    var txtMessage = view.getViewById(page, "contactMessage");

    page.bindingContext = new ContactViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
