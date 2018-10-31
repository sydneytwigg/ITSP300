var frameModule = require('ui/frame');

exports.loaded = function () {
  console.log("Hi");
};

exports.signIn = function() {
  alert("Signing in");
};

exports.register = function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}
