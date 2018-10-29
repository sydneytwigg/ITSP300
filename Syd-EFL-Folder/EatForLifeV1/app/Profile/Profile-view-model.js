const observableModule = require("data/observable");

function ProfileViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = ProfileViewModel;
