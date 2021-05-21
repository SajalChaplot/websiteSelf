var settings = {
  "url": "https://api.instagram.com/oauth/authorize?client_id=584068419184550&redirect_uri=https://sajalchaplot.co.in/#!/play&scope=user_profile,user_media&response_type=code",
  "method": "GET",
  "timeout": 0,
  "headers": {'Access-Control-Allow-Origin': '*' },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
  
