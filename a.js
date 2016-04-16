
var fetch = require('node-fetch');
var querystring = require('querystring')
var https = require('https')
var buffer = require('buffer')

var url = 'https://api.mailgun.net/v3/sandboxf4c7b1dcb4834313a180dadcfa666152.mailgun.org/messages';

// jQuery.param(b)
var body = querystring.stringify({
	from: 'bb@cnn.com',
	to: 'jx@twmug.com',
	subject: 'subject',
	text: 'text text'
  });

// from=bb%40cnn.com&to=jx%40twmug.com&subject=subject&text=text%20text
console.log( 'body\n', body )

// window.btoa()
// "YXBpOmtleS1hYWFkYjQ1OTkwNTVhMGI5NDQzYWM0YTQwMjAwZjkwNQ=="
// var key = new Buffer('api:key-aaadb4599055a0b9443ac4a40200f905').toString('base64');
var key = 'YXBpOmtleS1hYWFkYjQ1OTkwNTVhMGI5NDQzYWM0YTQwMjAwZjkwNQ==';

// sparkpost
var key = 'f33a7db24ee13bd0d16a35f25cae8809a033cac7'

fetch(
	'https://localhost:3000/mmm',

	{
		method: 'POST',
		body:JSON.stringify({
			"content": {
			  "from": "sandbox@sparkpostbox.com",
			  "subject": "Thundercats are GO!!!",
			  "text": "Sword of Omens, give me sight BEYOND sight"
			},
			"recipients": [{ "address": "forlist66@gmail.com" }]
		})
	}
)

.then(function(res) {
	console.log( '來1: ', res )
})
.then(function(json) {
	console.log( '來2: ', json )
});




// good
/*fetch(
	'https://api.mailgun.net/v3/sandboxf4c7b1dcb4834313a180dadcfa666152.mailgun.org/messages',

	{
		headers: {
			Authorization: 'Basic ' + key,
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body: body,
		method: 'POST',
	}
)
.then(function(res) {
	console.log( '結果: ', res.ok )
	return res.json();
})
.then(function(json) {
	console.log( '結2: ', json )
});
*/

// old, not working
/*fetch( url,

	{ headers: {
		Authorization: 'Basic ' + key,
		'Content-Type':'application/x-www-form-urlencoded'
	}},

	{
		method: 'POST',
		body: body,
	}
)
.then(function(res) {
	console.log( '結果: ', res )
	return res.json();
})
.then(function(json) {
	console.log( '失敗: ', json )
	console.log(json);
});

*/
