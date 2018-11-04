const DemoBmiViewModel = require("./demo-bmi-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new DemoBmiViewModel();

    var gotData=page.navigationContext;
    alert(gotData.param1);
    alert(gotData.param2);

}

exports.onNavigatingTo = onNavigatingTo;
