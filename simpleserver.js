
const http = require('http');
const url = require('url');

http.createServer(serve).listen(4800);

function serve(req, res){
    
        const queryObject = url.parse(req.url,true).query;
        
        console.log(queryObject);

        const urll = url.parse(req.url, true);
        console.log(urll);
      
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
      
} 
    