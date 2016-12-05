import 'chromereload/devonly';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
  console.log(sendResponse);
  return sendResponse(request.backlogIssue);
});
