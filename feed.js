function feed(){
  
  var settings = {
  "url": "https://api.instagram.com/oauth/authorize?client_id={{insta app id}}&redirect_uri=https://oauth.pstmn.io/v1/callback&scope=user_profile,user_media&response_type=code",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "csrftoken=6AiATZmFz0x1sdhl2uXxZxVHMn9ADdjY; ig_did=DA9AF0F7-41E8-47A6-BCEC-4DA31717F902; ig_nrcb=1; mid=YKPsxgAEAAEJTJf3vY5ZjxdP0jil"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
  
}
