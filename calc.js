const http = require('http');
const url = require('url');

http.createServer(serve).listen(4500);

function serve(req, res) {

    if (req.url) {
        const url1 = url.parse(req.url, true);
        var pfadParams = url1.path.split('/');
        var operand = pfadParams[1];
        var param1 =  parseInt(pfadParams[2]);
        var param2 =  parseInt(pfadParams[3]);

        switch (operand) {
            case 'add': {
                if (!pruefeParams(param1,param2)) {
                    res.write("Sorry Bruder! Geht ja gar nicht!"); break;
                }

                let ergebnis = param1 + param2;
                res.write(`${ergebnis}`);
            } break;
            case 'mul': {
                if (!pruefeParams(param1,param2)) {
                    res.write("Sorry Bruder! Geht ja gar nicht!"); break;
                }
                let ergebnis = param1 * param2;
                res.write(`${ergebnis}`);
            } break;
            case 'sub': {
                if (!pruefeParams(param1,param2)) {
                    res.write("Sorry Bruder! Geht ja gar nicht!"); break;
                }
                let ergebnis = parseInt(pfadParams[2]) - parseInt(pfadParams[3]);
                res.write(`${ergebnis}`);
            } break;
            case 'div': {
                if (!pruefeParams(param1,param2)) {
                    res.write("Sorry Bruder! Geht ja gar nicht!"); break;
                }
                if (parseInt(pfadParams[3] === Infinity)) {
                    res.write("Auf Null darf man gar nicht teilen");
                    break;

                } else {
                    let ergebnis = param1/param2;
                    res.write(`${ergebnis}`);
                }


            } break;
            default: res.write("Sorry Bruder!")
        }


    }

    res.end();

}

function pruefeParams(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number')
        return true;
    else
        return false;
}


