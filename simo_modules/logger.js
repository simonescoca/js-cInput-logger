/**
 * Custom logger for JS
 * @param {string} level [INFO] [WARNING] [ERROR] 
 * @param {string} message inserted by dev
 * @returns {string} composed by [LOGGERLEVEL] - Today's date + Current Time // Message
 */
function logger (level, message) {
    const newDate = new Date();
    return `[${level.toUpperCase()}] - ${newDate.toLocaleDateString()} @ ${newDate.toLocaleTimeString()} // ${message}\n`;
}

module.exports = logger;