const observableModule = require("data/observable");
var email = require("nativescript-email");
//var validator = require("email-validator");

function ContactViewModel() {
    const viewModel = observableModule.fromObject({
        sendEmail: function () {
            //var emailaddress = viewModel.get("contactEmail");
            var name = viewModel.get("contactName");
            var surname = viewModel.get("contactSurname");
            var mgs = viewModel.get("contactMessage");
            if (name != null && mgs != null) {
               // if (validator.validate(emailaddress) == true) {
                    //check email available
                    
                    email.available().then(function (avail) {
                        console.log("Email available? " + avail);
                    });

                    var fs = require("file-system");
                    var appPath = fs.knownFolders.currentApp().path;

                    email.compose({
                        subject: "EatForLife Contact Us",
                        body: mgs + " Kind regards: " + name + " " + surname ,//+" "+ emailaddress ,
                        to: ['sydneytwigg@gmail.com']
                    }).then(
                        function () {
                            console.log("Email composer closed");
                        }, function (err) {
                            console.log("Error: " + err);
                        });
                //} else {
                //    alert("Email address not valid");
                //}
            }else {
                alert("All fields must be completed");
            }
        }
        
      });
    return viewModel;
}

module.exports = ContactViewModel;
