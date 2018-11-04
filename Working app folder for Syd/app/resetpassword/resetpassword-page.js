var frameModule = require("tns-core-modules/ui/frame");
var ResetpasswordViewModel = require("./resetpassword-page-view-model");

var resetpasswordViewModel = new ResetpasswordViewModel();

function pageLoaded(args) {

    var page = args.object;
    page.bindingContext = resetpasswordViewModel;
}
function ResetPassword(args) {
    
    var validator = require("email-validator");
    var emailVal = resetpasswordViewModel.get("email");
    var password = resetpasswordViewModel.get("password");
    var answer = resetpasswordViewModel.get("answer");

    // var password = this.get("password");
    if (validator.validate(emailVal) == true) {
        if (password != null) {
            if (answer != null) {
                //db user email and password insert here
                const button = args.object;
                const page = button.page;
                page.frame.navigate("./login/login-page");
            } else {
                alert("Please answer the question");
            }
        } else {
            alert("Enter password");
        }
    } else {
        alert("Enter valid email address");
    }
}
exports.ResetPassword = ResetPassword;
exports.pageLoaded = pageLoaded;