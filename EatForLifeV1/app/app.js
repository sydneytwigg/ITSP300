const application = require("application");

//set app.css as the css file for the project.
application.setCssFileName("style.css");
//check that the app is running app.css
var fileName = application.getCssFileName();
console.log(`fileName ${fileName}`);

application.run({ moduleName: "app-root" });

//test
//application.run({moduleName: "login/login-page"});
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
