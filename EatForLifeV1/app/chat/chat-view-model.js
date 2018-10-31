const observableModule = require("data/observable");

function ChatViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = ChatViewModel;
