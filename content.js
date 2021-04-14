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
  const headers = {
    h1: [...document.querySelectorAll("h1")].map((header) => header.innerHTML),
    h2: [...document.querySelectorAll("h2")].map((header) => header.innerHTML),
    h3: [...document.querySelectorAll("h3")].map((header) => header.innerHTML),
    h4: [...document.querySelectorAll("h4")].map((header) => header.innerHTML),
    h5: [...document.querySelectorAll("h5")].map((header) => header.innerHTML),
    h6: [...document.querySelectorAll("h6")].map((header) => header.innerHTML),
  };

  return sendReponse({ title, description, keywords, robots, headers });
});
