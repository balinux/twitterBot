let twit = require('twit');

var T = new twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var stream = T.stream('statuses/filter', { track: 'balinux' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet.user.name+' mengirim pesan balinux')
})

// function twiting(){
//     var number = Math.floor(Math.random()*100)

//     var status = {
//       status : 'hallo i\'m Robot, and this is a random number '+ number 
//     }
//    return T.post('statuses/update', status , function(err, data, response) {
//     // console.log(data)
//     console.log('sukses update twit')
//   })
// }

// // twiting();
// setInterval(twiting, 1000*20);