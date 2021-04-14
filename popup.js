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
  const h1HtmlElement = document.querySelector("#h1");
  const h2HtmlElement = document.querySelector("#h2");
  const h3HtmlElement = document.querySelector("#h3");
  const h4HtmlElement = document.querySelector("#h4");
  const h5HtmlElement = document.querySelector("#h5");
  const h6HtmlElement = document.querySelector("#h6");

  const {
    title,
    description,
    keywords,
    robots,
    headers: { h1, h2, h3, h4, h5, h6 },
  } = res;

  titleHtmlElement.textContent = title;
  titleLengthHtmlElement.textContent = `${title.length} chars`;
  descriptionHtmlElement.textContent = description;
  descriptionLengthHtmlElement.textContent = `${description.length} chars`;
  keywordsHtmlElement.textContent = keywords;
  keywordsLengthHtmlElement.textContent = `${keywords.length} chars`;
  robotsHtmlElement.textContent = robots;
  h1.map((header) => (h1HtmlElement.innerHTML += `${header}<br/>`));
  h2.map((header) => (h2HtmlElement.innerHTML += `${header}<br/>`));
  h3.map((header) => (h3HtmlElement.innerHTML += `${header}<br/>`));
  h4.map((header) => (h4HtmlElement.innerHTML += `${header}<br/>`));
  h5.map((header) => (h5HtmlElement.innerHTML += `${header}<br/>`));
  h6.map((header) => (h6HtmlElement.innerHTML += `${header}<br/>`));
};
