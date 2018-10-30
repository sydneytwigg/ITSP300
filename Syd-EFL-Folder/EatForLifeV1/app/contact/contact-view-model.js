const observableModule = require("data/observable");

function ContactViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = ContactViewModel;
