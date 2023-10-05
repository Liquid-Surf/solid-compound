const availableIDPs = [
  "idp-1.localhost",
  "idp-2.localhost",
  "idp-3.localhost"
];

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'setIDP') {
    const selectedIDP = message.selectedIDP;

    // Implement your logic here to use the selected IDP on the web page.
    console.log(`Received selected IDP in content script: ${selectedIDP}`);
  }
});
