const request = require('request');

const covid = (callback)=>{
  var options = {
    method: 'GET',
    url: 'https://api.covid19india.org/data.json',
    json: true
  };
  
  request(options, function (error, response,body) {
    if (error) callback('error occured')
    callback(undefined,body)
  });
}

module.exports=covid