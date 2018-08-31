const observableModule = require("data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "View Profile"
            },
            {
                name: "Change Password"
            },
            {
                name: "BMI Details"
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
