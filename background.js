// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'PAGE_CONTENT') {

        json_data = {
            "date": new Date().toISOString(),
            "url": request.url,
            "content": request.content
        }
      // Store the page content in local storage
      chrome.storage.local.set({"object": json_data}, () => {
        console.log(`Stored content for ${request.url}`);

        fetch('https://team.ensemble.featurebase.cloud/webhook/webpage/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"object": json_data}),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      });
    }
  });