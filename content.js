chrome.runtime.onMessage.addListener((req, sender, sendReponse) => {
  const title = document.title;
  const description = document.querySelector("head > meta[name='description']")
    ? document.querySelector("head > meta[name='description']").content
    : "Empty";
  const keywords = document.querySelector("head > meta[name='keywords']")
    ? document.querySelector("head > meta[name='keywords']").content
    : "Empty";
  const robots = document.querySelector("head > meta[name='robots']")
    ? document.querySelector("head > meta[name='robots']").content
    : "Empty";

  return sendReponse({ title, description, keywords, robots });
});
