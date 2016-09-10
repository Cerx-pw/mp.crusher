var request = require('request');
console.log("Initializing...")
var slash = 0
function ping(){
    console.log('\033[2J');
    request('http://glowcraft.fakaheda.eu/podpis/podpis.php', function (error,response,body) {
        if(slash == 1){
            console.log("\\...");
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