interface Image {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url: string;
  permalink: string;
}

interface Paging {
  paging: {
    cursors: {
      after: string;
      before: string;
    };
  };
}

interface InstagramResponse {
  data: Image[];
  paging: Paging;
}

const getImages = async () => {
  const params = new URLSearchParams();

  params.append(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink"
  );
  params.append("access_token", INSTA_ACCESS);

  const response = await fetch(
    `https://graph.instagram.com/me/media?${params.toString()}`
  );
  if (!response.ok) {
    console.log("Connection with Instagram API failed");
    return { images: null, error: "Etwas ist schiefgelaufen!" };
  }
  const images: InstagramResponse = await response.json();

  return { images, error: null };
};

export const initInstagramFeed = async (isAllowed: boolean) => {
  const instaFeedEl =
    document.querySelector<HTMLDivElement>(".js-instagram-feed");
  if (!instaFeedEl) return;

  if (!isAllowed) {
    instaFeedEl.innerHTML = `
        <div class="gallery-error">
          <p>
            Sie haben die Cookie Richtlinien abgelehnt und können deshalb diese Inhalte nicht ansehen.
            <a href="/" class="js-cookie-link">Cookies trotzdem aktivieren</a>
          </p>
        </div>`;
    return;
  }

  const { images, error } = await getImages();

  if (error !== null) {
    instaFeedEl.innerHTML = `<div class="gallery-error"><p>${error}</p></div>`;
    return;
  }

  const imagesHTML = images.data.slice(0, 9).map(
    (img) => `
        <a href="${img.permalink}" target="_blank" class="gallery-box">
          ${
            img.media_type !== "VIDEO"
              ? `<img src="${img.media_url}" class="gallery-img" alt="${img.id}" />`
              : `
                <img src="${img.thumbnail_url}" class="gallery-img" alt="${img.id}" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="play-icon"><path d=" M23.41 11.1 1.51.14a1 1 0 0 0-1.45.89v21.91a1 1 0 0 0 1.44.9l21.91-10.96a1 1 0 0 0 0-1.78zM2.05 21.33V2.64L20.75 12l-18.7 9.34z"/></svg>
              `
          }
          ${
            img.caption
              ? `<div class="gallery-overlay">${img.caption}</div>`
              : ""
          }
        </a>
      `
  );

  instaFeedEl.innerHTML = `
      <div class="gallery-boxes">${imagesHTML.join("")}</div>
    `;
};
