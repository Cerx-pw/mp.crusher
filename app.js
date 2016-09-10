var request = require('request');
console.log("Initializing...")
var slash = 0
function ping(){
    request('http://glowcraft.fakaheda.eu/podpis/podpis.php', function (error,response,body) {
        process.stdout.write('\033c');
        if(slash == 1){
            console.log("\\...");
            slash = 2;
        }
        else if(slash == 2){
            console.log("|...");
            slash = 0;
        }
        else{
            console.log("/...");
            slash = 1;
        }
        setTimeout(ping, 1);
    });
}
ping();