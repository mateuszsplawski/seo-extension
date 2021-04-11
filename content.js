chrome.runtime.onMessage.addListener((req, sender, sendReponse) => {
  const title = document.title;
  const description = document.querySelector("head > meta[name='description']")
    .content;
  sendReponse({ title, description });
});
