var userFeed = new Instafeed({
		get: 'user',
		target: "insta",
		limit:30,
    	resolution: 'low_resolution',
		accessToken: 'IGQVJXVDZAEUXMwMC1QQVBMdThsZAkJHdFJIdldUWHRCZAE1DN1hydjhqNXB6RGZABb29YQS1OUEQ0TnBPS2dvN2NsU1BrNl9VRE9xVmFQZAUI2WjJtY0w4NEpzLTdoeVNDNGFSaEltR0M1QU50MnRnVmt6YQZDZD'
});

function feedprofile(){
    
    
var url ="https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJXdDVFZAlVZAT0J1M3BJYlNXSWpvZADhVQ3UzdWNtcXRzZAEdrdDZANYjhRRExNcVNPUzVicGNkeTNkbmlVUTB5MEZAkYXFkN04tVFJ3eTZADMWdQTHduNVNVZA3ZAIRkFkQy1QZAGxScDVR"
;
$.get(url, function(data, status){
    console.log("Data: " + data + "\nStatus: " + status);
});
userFeed.run();	
}




