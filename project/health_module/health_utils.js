var os = require('os');

function getCPUusage() {
    var cpus = os.cpus();
    var arr = [];

    cpus.forEach((cpu, i) => {

        var cpu = cpus[i], total = 0;
        const core = { core: i };

        for (var type in cpu.times) {
            total += cpu.times[type];
            var percentage = Math.round(100 * cpu.times[type] / total);
            core[type] = `${percentage}%`;
        }

        arr.push(core);
    })

    return arr;
};

function getHealthDetails() {

    const vers = process.version;
    const OS_name = process.platform;
    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const percentageUsedMemory = Math.round(usedMemory * 100) / 100;
    

    return {
        OS_name: OS_name,
        Platform_version: vers,
        Memory_usage: `${percentageUsedMemory}%`,
        cpu_usage: getCPUusage(),

    };
}

exports.getHealthDetails = getHealthDetails;