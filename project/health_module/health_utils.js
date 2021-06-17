function getHealthDetails() {

    const vers = process.version;
    const OS_name = process.platform;
    // var os= require('os-utils');
    // const cpu=os.cpuUsage();
    // const total_mem=os.freememPercentage();
    // const usedMemory = os.usedmem();
    // const freeMemory = os.freemem();

    return {
        //OS_name: OS_name,
        Platform_version: vers,
        // Memory_usage:usedMemory,
        // CPU_usage:freeMemory,
    };
}
// getHealthDetails();
exports.getHealthDetails = getHealthDetails;