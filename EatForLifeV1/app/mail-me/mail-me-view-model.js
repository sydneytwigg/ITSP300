const observableModule = require("data/observable");

function MailMeViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = MailMeViewModel;