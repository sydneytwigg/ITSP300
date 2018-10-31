const ChatViewModel = require("./chat-view-model");



/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ChatViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
