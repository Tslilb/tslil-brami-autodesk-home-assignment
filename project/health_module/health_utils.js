var os = require('os');

function getCPUusage(){
    var cpus = os.cpus();

    for(var i = 0, len = cpus.length; i < len; i++) {
        console.log("CPU %s:", i);
        var cpu = cpus[i], total = 0;
    
        for(var type in cpu.times) {
            total += cpu.times[type];
        }
    
        for(type in cpu.times) {
            console.log("\t", type, Math.round(100 * cpu.times[type] / total));
        }
    }

};



function getHealthDetails() {

    const vers = process.version;
    const OS_name = process.platform;
    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const presantageUsedMemory=Math.round(usedMemory*100)/100;

    return {
        OS_name: OS_name,
        Platform_version: vers,
        Memory_usage:presantageUsedMemory,
        //CPU_usage:getCPUusage(),
    };
}

exports.getHealthDetails = getHealthDetails;