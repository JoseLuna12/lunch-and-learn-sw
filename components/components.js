function insertToDom(id, component) {
  const target = document.getElementById(id);
  target.innerHTML = component;
}

function smallNews({ photo, title, summary, id }) {
  const smallSubtitle = summary && summary.slice(0, 62);

  if (title) {
    return `
      <a href="/news.html/?id=${id}">
        <div class="w-full flex py-2">
            <div class="w-32 h-32 p-3">
                  <img
                    src="${photo}"
                    alt="test"
                  />
            </div>
            <div>
                  <div class="text-xl font-bold">${title}</div>
                  <div class="text-base">
                    ${smallSubtitle}... 
                  </div>
            </div>
        </div>
        </a>
        `;
  } else {
    return "";
  }
}

function bigNews({ photo, title, summary, id }) {
  return `
  <a href="/news.html/?id=${id}">
    <div class="w-1/2 m-auto">
          <img
            style="height: 100%; width: 100%; object-fit: contain"
            src="${photo}"
            alt=""
          />
          <div class="py-7">
            <div class="text-xl font-bold pb-3">${title}</div>
            <div class="text-base">
              ${summary}
            </div>
          </div>
    </div>
    </a>
    `;
}

function newsPageContent({ photo, title, summary, content, link }) {
  return `
    <div class="py-10">
        <div class="font-bold w-full text-center text-5xl">${title}</div>
        <div class="italic text-2xl text-gray-500 text-center">
        ${summary}
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-1/2">
          <img
            src="${photo}"
            alt=""
          />
        </div>
      </div>
      <div class="w-full flex justify-center py-10">
        <div class="w-1/2">
          <p>
            ${content}
          </p>
        </div>
      </div>
      <div class="w-full flex justify-center py-10">
        <div class="w-1/2">
          <div>
            <span class="font-bold">Source: </span>
            <span><a class="text-green-300" href="${link}">MEDIUM</a></span>
          </div>
        </div>
      </div>
    `;
}

function offlineSVG(w, h) {
  const hasWH = w || h;
  return `
  <svg
          class="fill-current text-green-300"
          ${
            hasWH
              ? `width="${w}"
                height="${h}"`
              : ``
          }
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="40.771px"
          height="40.771px"
          viewBox="0 0 40.771 40.771"
          style="enable-background: new 0 0 40.771 40.771"
          xml:space="preserve"
        >
          <g>
            <g id="_x31_03_65_">
              <g>
                <path
                  d="M39.9,29.212c-1.084-1.084-2.169-2.169-3.253-3.255l4.124-4.122l-1.686-1.688l-4.124,4.125
                   c-1.096-1.096-2.19-2.19-3.286-3.285c-0.071-0.072-0.146-0.13-0.221-0.178l-0.673-0.673l-1.692,1.692l4.157,4.157l-4.016,4.018
                   l1.687,1.686l4.017-4.017l4.049,4.05l1.692-1.693l-0.597-0.596C40.029,29.356,39.972,29.282,39.9,29.212z"
                />
                <path
                  d="M33.928,16.134c0.229,0,0.457,0.019,0.684,0.034c0.032-0.226,0.058-0.453,0.069-0.682
                   c-0.224-4.134-3.166-7.074-7.297-7.297c-2.424-0.13-4.445,1.107-5.742,2.917C20.346,9.4,18.33,8.321,15.895,8.189
                   c-4.123-0.222-7.09,3.5-7.295,7.297c-0.023,0.488,0.008,0.957,0.084,1.411c-0.258-0.037-0.521-0.062-0.789-0.077
                   c-4.457-0.24-7.664,3.783-7.885,7.885c-0.227,4.193,3.32,7.279,7.158,7.813v0.073h19.554c-1.613-1.749-2.607-4.078-2.607-6.646
                   C24.115,20.527,28.51,16.134,33.928,16.134z"
                />
              </g>
            </g>
          </g>
        </svg>
  `;
}

function offlineBig() {
  return `
  <div class="flex w-full justify-center">
      <div class="w-auto">
        ${offlineSVG("200px", "200px")}
        <h1 class="font-bold text-2xl">No internet connection</h1>
      </div>
    </div>
  `;
}

function offlineSmall() {
  return `
  <div class="px-3 w-full flex justify-center">
  <div class="w-full flex justify-center space-x-10 inline-block align-middle">
  <div class="p-1 bg-white rounded-full">
  ${offlineSVG("30px", "30px")}
  </div>
  <h1 class="font-bold text-2xl">No internet connection</h1>
  </div>
  </div>
  `;
}
