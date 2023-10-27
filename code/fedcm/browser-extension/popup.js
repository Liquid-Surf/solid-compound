function sendIDPToContentScript(idp) {
  console.log("sendIDPToContentScript")

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": idp });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const idpInput = document.getElementById('idpInput');
  const selectButton = document.getElementById('selectButton');

  selectButton.addEventListener('click', async function () {
    const selectedIDP = idpInput.value;
    sendIDPToContentScript(selectedIDP)
  });
});
