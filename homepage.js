function cpu() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (cpu.style.display == "none") {
        cpu.style.display = "block";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        cpu.style.display = "none";
    }
}

function cooler() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (cooler.style.display == "none") {
        cooler.style.display = "block";
        cpu.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        cooler.style.display = "none";
    }
}

function motherboard() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (mb.style.display == "none") {
        mb.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        mb.style.display = "none";
    }
}

function gpu() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (gpu.style.display == "none") {
        gpu.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        gpu.style.display = "none";
    }
}

function ram() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (ram.style.display == "none") {
        ram.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        ram.style.display = "none";
    }
}

function hdd() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (hdd.style.display == "none") {
        hdd.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        ssd.style.display = "none";
    } else {
        hdd.style.display = "none";
    }
}

function ssd() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (ssd.style.display == "none") {
        ssd.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
    } else {
        ssd.style.display = "none";
    }
}

function cpuonlyload() {
    document.getElementById("CPU").style.display="block";
    document.getElementById("Cooler").style.display="none";
    document.getElementById("Motherboard").style.display="none";
    document.getElementById("Graphics-card").style.display="none";
    document.getElementById("RAM").style.display="none";
    document.getElementById("HDD").style.display="none";
    document.getElementById("SSD").style.display="none";
}