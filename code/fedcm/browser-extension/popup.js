document.addEventListener('DOMContentLoaded', function () {
  const idpInput = document.getElementById('idpInput');
  const selectButton = document.getElementById('selectButton');
  const resultDiv = document.getElementById('result');

  selectButton.addEventListener('click', async function () {
    const selectedIDP = idpInput.value;

    try {
      // Query for the active tab
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (!activeTab) {
        throw new Error('No active tab found.');
      }

      // Send the selected IDP to the content script
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: sendIDPToContentScript,
        args: [selectedIDP],
      });

      // Handle success or provide feedback to the user
      resultDiv.textContent = 'IDP selection successful.';
    } catch (error) {
      console.error('Error:', error);
      resultDiv.textContent = 'Error: ' + error.message;
    }
  });
});

function sendIDPToContentScript(selectedIDP) {
  // This code runs within the context of the active web page.
  // You can use `selectedIDP` here to interact with the page.
  console.log(`Selected IDP: ${selectedIDP}`);
  // Implement further interaction with the web page as needed.
}
