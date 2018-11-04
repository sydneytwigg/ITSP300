const MailMeViewModel = require("./mail-me-view-model");
var frameModule = require("ui/frame");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MailMeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;