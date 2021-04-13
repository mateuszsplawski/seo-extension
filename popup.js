document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, "msg", showMetaData);
  });
});

const showMetaData = (res) => {
  const titleHtmlElement = document.querySelector("#title");
  const titleLengthHtmlElement = document.querySelector("#titleLength");
  const descriptionHtmlElement = document.querySelector("#description");
  const descriptionLengthHtmlElement = document.querySelector(
    "#descriptionLength"
  );
  const keywordsHtmlElement = document.querySelector("#keywords");
  const keywordsLengthHtmlElement = document.querySelector("#keywordsLength");
  const robotsHtmlElement = document.querySelector("#robots");

  const { title, description, keywords, robots } = res;

  titleHtmlElement.textContent = title;
  titleLengthHtmlElement.textContent = `${title.length} chars`;
  descriptionHtmlElement.textContent = description;
  descriptionLengthHtmlElement.textContent = `${description.length} chars`;
  keywordsHtmlElement.textContent = keywords;
  keywordsLengthHtmlElement.textContent = `${keywords.length} chars`;
  robotsHtmlElement.textContent = robots;
};
