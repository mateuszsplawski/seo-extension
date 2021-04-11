chrome.runtime.onMessage.addListener((req) => {
  console.log(req);
  console.log(document.title);
});
