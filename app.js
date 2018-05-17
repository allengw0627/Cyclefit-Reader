const request = require('request');
const cheerio = require('cheerio');

console.log("Parsing authenticity token");
request("https://widgets.healcode.com/widgets/registrations/fa15587c060.json?mobile=false", { json: true }, function(err, res, body) {
  if (err) { return console.log(err); }
  var $ = cheerio.load(body.contents);
  var authenticityToken = $("input[name='authenticity_token']").val();
  console.log("Creating session");
  request.post("https://widgets.healcode.com/sites/15740/session" + 
  	"?utf8=%E2%9C%93" +
  	"&authenticity_token=" + encodeURIComponent(authenticityToken) + 
  	"&device_id=9a817606-0168-4cb2-8a98-5b49f6b7c5c6R" +
	"&redirect=https%3A%2F%2Fwidgets.healcode.com%2Fsites%2F15740%2Fclient" +
	"&mb_client_session%5Busername%5D=gwa0627%40gmail.com" +
	"&mb_client_session%5Bpassword%5D=Chelsea12", function(err, res, body) {
		if (err) { return console.log("Error: " + err); }
  		console.log(body);
	});
});
