var settings = {
  "url": "https://api.instagram.com/oauth/authorize?client_id=513134383145025&redirect_uri=https://sajalchaplot.co.in/&scope=user_profile,user_media&response_type=code",
  "method": "GET",
  "timeout": 0,
  "headers": {'Access-Control-Allow-Origin': '*' },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
  
