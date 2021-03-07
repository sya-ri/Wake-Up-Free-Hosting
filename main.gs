function wakeUp() {
  var url = "https://example.com";
  UrlFetchApp.fetch(url, { muteHttpExceptions: true });
}
