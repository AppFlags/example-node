const AppFlags = require("appflags");

console.info("AppFlags Node.js example project");
AppFlags.initialize("YOUR_KEY_HERE");

console.info("Subscribing to feature flag. Will get current value and any changes.");
AppFlags.onFlagChanged("test", enabled => {
    console.log("Feature is " + (enabled ? "enabled" : "disabled"));
});
