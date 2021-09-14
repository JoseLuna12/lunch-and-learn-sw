const baseURL = (endpoint) => `http://127.0.0.1:5000${endpoint}`;

const renderUtils = {
  homePage: {
    latestNews: (news) => {
      const latest = news.pop();

      const allsmallNews = news.map((n) => smallNews(n)).join("");

      insertToDom("bigNew", bigNews(latest));
      insertToDom("allNews", allsmallNews);
    },
    newsByType: (news) => {
      const newsElement = news.map((n) => smallNews(n)).join("");
      insertToDom("testContent", newsElement);
    },
  },
  newsPage: (news) => {
    const newsPage = newsPageContent(news);
    insertToDom("newsPageContent", newsPage);
  },
  offline: (news) => {
    const offlineBigComponent = offlineBig();
    const offlineSmallComponent = offlineSmall();
    if (news) {
      const newsElement = news.map((n) => smallNews(n)).join("");
      insertToDom("smallOffline", offlineSmallComponent);
      insertToDom("news", newsElement);
    } else {
      insertToDom("bigOffline", offlineBigComponent);
    }
  },
};

async function requestApi(endpoint) {
  const res = await fetch(baseURL(endpoint));
  return await res.json();
}

async function postApi(endpoint, body) {
  const res = await fetch(baseURL(endpoint), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
}

function addEventListener(id, type, callback) {
  document
    .querySelectorAll("#" + id)
    .forEach((el) => el.addEventListener(type, callback));
}

function changeButtonColor(target, id) {
  document.querySelectorAll(`#${id}`).forEach((el) => {
    el.classList.add("bg-green-300");
    el.classList.add("text-white");
  });
  target.classList.remove("bg-green-300");
  target.classList.remove("text-white");

  target.classList.add("bg-yellow-200");
  target.classList.add("text-black");
}

function parseUrl() {
  const reqParams = window.location.href.split("?")[1];
  const objValues = {};
  reqParams.split("&").forEach((rp) => {
    const keyValue = rp.split("=");
    const key = keyValue[0];
    const value = keyValue[1];

    objValues[key] = value;
  });
  return objValues;
}
