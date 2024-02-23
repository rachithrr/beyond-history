// // Read the page content
// const content = document.body.innerText;

// const pageContent = document.body.innerText;
// chrome.runtime.sendMessage({type: 'PAGE_CONTENT', url: window.location.href, content: pageContent});

// document.addEventListener('DOMContentLoaded', (event) => {
//     const pageContent = document.body.innerText;
//     chrome.runtime.sendMessage({type: 'PAGE_CONTENT', url: window.location.href, content: pageContent});
//   });

window.onload = () => {
    // const pageContent = document.body.innerText;
    // chrome.runtime.sendMessage({type: 'PAGE_CONTENT', url: window.location.href, content: pageContent});


    function countWords() {

        var collectedText;
    
        document.querySelectorAll('p,h1,h2,h3,h4,h5').forEach(function(element){
            collectedText += element.innerText + " ";
        });
    
        // Remove 'undefined if there'
        collectedText = collectedText.replace('undefined', '');
    
        // Remove numbers, they're not words
        collectedText = collectedText.replace(/[0-9]/g, '');
    
        // Get
        console.log("You have " + collectedText.split(' ').length + " in your document.");
        return collectedText;
    
    }

    const text = countWords();
    chrome.runtime.sendMessage({type: 'PAGE_CONTENT', url: window.location.href, content: text});
  };

