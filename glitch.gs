function wakeUp(){
  var url = "https://2b2tjp-bot.glitch.me";
  var params = {
    "contentType": "application/json; charset=utf-8",
    "method": "POST",
    "payload": {
      "type": "wake"
    },
    "muteHttpExceptions": true
  };
  UrlFetchApp.fetch(url, params);
}
