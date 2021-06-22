const AppFlags = require("appflags");

console.info("AppFlags Node.js example project");

const user = {
    key: Math.random().toString()  // key should be a non-changing string representing your user, like an ID or email
}
AppFlags.initialize("YOUR_KEY_HERE", user);

console.info("Subscribing to feature flag. Will get current value and any changes.");

AppFlags.onFlagChanged("test", flag => {
    console.log("Feature is " + (flag.value ? "enabled" : "disabled"));
});
