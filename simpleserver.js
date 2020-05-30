
// HTTP Modul einbinden
// var http = require('http');

// // URL Modul einbinden
// var url = require('url');

// // HTTP Server erzeugen
// var server = http.createServer(serve);

// // Server an Port binden
// server.listen(3000);

// // Funktion des HTTP-Servers
// // req: Anfrage vom Client (Request)
// // res: Antwort des Servers (Response)
// function serve(req, res) {
    
//     // if(req.url ==="/"){
//     //     //var reqdetails = url.parse(req.url, true);
//     //     res.write("Hello World.")
//     //    // res.write(reqdetails.search);
//     //     res.end();
//     // }
//     // if(req.url ==="/a"){
       
//     //     res.write("URL A");
//     //     res.end();
//     // }
//     //URL parsen
//     if(req.url ==="/"){
     
//         let reqDetails = url.parse(req.url, true);
//         //Querystring Analysieren
//         let querystring = reqDetails.query();
    
//         if(querystring === undefined){
//             querystring = {};
//         }
//         //Alle Schlüssel/Wert-Paare des Querystrings ausgeben
//         for(let key of querystring){
//             console.log(key+" --> "+ querystring[key]);
//         }
//         res.writeHead(200, {
//             'content-type':'text/plain',
//             'Access-Control-Allow-Origin':'null'
//         });
        
//         res.write('' + reqDetails.search);
//         res.end();
//     }

// }

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  res.writeHead(200, {'Content-Type': 'text/html'});
  for(let key in queryObject){
      if(key === 'order'&& queryObject[key]==='drink')
      res.write('milk');
      else if(key === 'order'&& queryObject[key]==='food')
      res.write('fish und Chaips');
      else if(key === 'location'&& queryObject[key]==='river')
      res.write('Ruhr');
      else if(key === 'order'&& queryObject[key]==='foods')
      res.write('mashed Potatoes');
      else 
      res.write('Leider wurde nichts gefunden...');
}

  res.end();
}).listen(3000);
    