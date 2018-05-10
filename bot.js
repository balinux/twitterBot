let twit = require('twit');

var T = new twit({
  consumer_key:         'OiWMuaMhAeJiWxNjHCJQ',
  consumer_secret:      '0A7oF9Tm3MyUNh5u1I9QZgigPcOPEcZwa7a36LLUY',
  access_token:         '83818420-e1YGrC5O7VZyrBerSF8KWi0GfTEkN8eM8X69i6VQ',
  access_token_secret:  'v5saVSMabFPFQFMIylJrE2C0mNpdG3fZyjKKssaIjHA',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var stream = T.stream('statuses/filter', { track: 'balinux' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet)
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