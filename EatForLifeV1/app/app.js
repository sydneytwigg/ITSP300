const application = require("application");
application.setCssFileName("app.css");
application.run({ moduleName: "app-root" });
//application.run({moduleName: "login/login-page"});
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
