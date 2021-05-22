function feed(){
    
var url ="https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJXdDVFZAlVZAT0J1M3BJYlNXSWpvZADhVQ3UzdWNtcXRzZAEdrdDZANYjhRRExNcVNPUzVicGNkeTNkbmlVUTB5MEZAkYXFkN04tVFJ3eTZADMWdQTHduNVNVZA3ZAIRkFkQy1QZAGxScDVR"

$.get(url, function(data, status){
    console.log("Data: " + data + "\nStatus: " + status);
}
      }
