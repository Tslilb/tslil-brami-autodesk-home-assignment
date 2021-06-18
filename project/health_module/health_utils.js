

function getHealthDetails() {

    const vers = process.version;
    const OS_name = process.platform;
    //const os = require('os');

    // const cpu=os.cpuUsage();
    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const presantageUsedMemory=Math.round(usedMemory*100)/100;

    return {
        OS_name: OS_name,
        Platform_version: vers,
        Memory_usage:presantageUsedMemory,
        // CPU_usage:freeMemory,
    };
}
getHealthDetails();
exports.getHealthDetails = getHealthDetails;