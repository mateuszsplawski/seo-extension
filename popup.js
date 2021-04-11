const handleDOMLoad = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, "msg", showMetaData);
  });
};

const showMetaData = (res) => {
  const titleHtmlElement = document.querySelector("#title");
  const descriptionHtmlElement = document.querySelector("#description");

  const { title, description } = res;

  titleHtmlElement.textContent = title;
  descriptionHtmlElement.textContent = description;
};

document.addEventListener("DOMContentLoaded", handleDOMLoad);
