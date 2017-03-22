const express = require('express');
const port = 3030;

let app = express();

app.use(express.static(__dirname));
//create a redirect to index
app.get('/', function(req, res){
	res.redirect('index.html');
})
//connect server
app.listen(port, function(){
	console.log('Listening on port ', port);
})