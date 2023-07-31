const {AppFlagsClient, AppFlagsLogLevel} = require("appflags-node");

console.info("AppFlags Node.js example project");

const appflagsClient = new AppFlagsClient("YOUR_SDK_KEY");

const user= {
    key: "some_user_key"
};

// Get the 'test' flag
appflagsClient.onInitialized().then(() => {
    const flag = appflagsClient.getFlag(user, "test");
    console.log("Feature `test` is " + (flag.value ? "enabled" : "disabled"));
});

// When the flags change, get the updated 'test' flag value again
appflagsClient.onFlagsChanged(() => {
    const flag = appflagsClient.getFlag(user, "test");
    console.log("Flags updated, feature `test` is now " + (flag.value ? "enabled" : "disabled"));
})
