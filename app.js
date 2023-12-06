const cInput = require("./simo_modules/c-input");
const logger = require("./simo_modules/logger");
const fs = require("fs");

let loglevel = "";
let logmessage = "";


/**
 * Async function used to set upper variables. Variables's setting needs to wait for cInput to get values from user's keyboard
 */
async function setValues () {
    
    while(loglevel.toLowerCase() !== "info" && loglevel.toLowerCase() !== "warning" && loglevel.toLowerCase() !== "error") {

        loglevel = await cInput("Set new log level");

        if (loglevel.toLowerCase() !== "info" && loglevel.toLowerCase() !== "warning" && loglevel.toLowerCase() !== "error") {
            console.log("[WARNING] - Set a correct value for new log level\nPossible values: [INFO], [WARNING], [ERROR]");
        }
    }


    while(logmessage === "") {
        
        logmessage = await cInput("Set new log message");

        if(logmessage === "") {
            console.log("[WARNING] - Set a non-empty string for new log message");
        }
    }
};

/**
 * Rest of the code needs to be included in an async function because of it has to wait for the async function setValues()
 */
(async () => {
    
    try {
        await setValues();
        const newlog = logger(loglevel, logmessage);
        fs.writeFileSync("logs.txt", newlog, {flag: "a"});
        console.log("[INFO] - created & appended new log in logs.txt");

    } catch (err) {
        console.error("[ERROR] - logs.txt's CREATE or UPDATE fail\n" + err)
    }
})();