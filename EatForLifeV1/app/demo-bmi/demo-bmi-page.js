const DemoBmiViewModel = require("./demo-bmi-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new DemoBmiViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
