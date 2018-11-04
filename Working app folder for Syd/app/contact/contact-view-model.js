const observableModule = require("data/observable");
var email = require("nativescript-email");


function ContactViewModel() {
    const viewModel = observableModule.fromObject({
      sendEmail: function(){

        //check email available
        email.available().then(function(avail) {
        console.log("Email available? " + avail);
      });

        //validation
        //if (!this.get("name") || (!this.get("message")) || (!this.get("email")){
          //return;
        //}

        // let's first create a File object using the tns file module
        var fs = require("file-system");
        var appPath = fs.knownFolders.currentApp().path;

        email.compose({
          subject: "EatForLife Contact Us",
          body: this.get("message"),
          to: ['sydneytwigg@gmail.com']
        }).then(
          function() {
          console.log("Email composer closed");
        }, function(err) {
          console.log("Error: " + err);
        });
        }
      });
    return viewModel;
}

module.exports = ContactViewModel;
