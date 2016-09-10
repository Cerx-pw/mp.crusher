var request = require('request');
function ping(){
    request('http://glowcraft.fakaheda.eu/podpis/podpis.php', function (error,response,body) {
        setTimeout(ping, 1);
    });
}
ping();