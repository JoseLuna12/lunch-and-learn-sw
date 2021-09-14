if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("serviceWorker registered");
  });
}

async function homePage() {
  const latestNews = await requestApi("/latest");
  const newsDefault = await requestApi(`/news/sw`);

  renderUtils.homePage.newsByType(newsDefault);
  renderUtils.homePage.latestNews(latestNews);

  addEventListener("newsType", "click", async (newsButtonType) => {
    changeButtonColor(newsButtonType.target, "newsType");
    const { type } = newsButtonType.target.dataset;
    try {
      const newsByType = await requestApi(`/news/${type}`);
      renderUtils.homePage.newsByType(newsByType || "");
    } catch (err) {
      renderUtils.homePage.newsByType([{}]);
    }
  });

  let emailInput = "";
  addEventListener(
    "email",
    "input",
    (email) => (emailInput = email.target.value)
  );

  addEventListener("submitEmail", "click", async () => {
    if (emailInput.trim() !== "") {
      await postApi("/email", { email: emailInput });
      alert(`E-Mail ${emailInput} Registered`);
    }
  });
}

async function newsPage() {
  const { id } = parseUrl();
  const res = await requestApi(`/news/id/${id}`);
  renderUtils.newsPage(res);
}

async function offlinePage() {
  const latestNews = await requestApi("/latest");
  renderUtils.offline(latestNews);
}
