(() => {
  const endpoint = "https://dong-zhang-visitor-analytics.pink-vine-8053.chatgpt.site/api/collect";
  if (location.origin !== "https://dongzhang1905.github.io") return;
  let off = false;
  let session;
  try {
    off = localStorage.getItem("homepage-analytics-off") === "1";
    session = sessionStorage.getItem("homepage-analytics-session");
    if (!session) {
      session = crypto.randomUUID();
      sessionStorage.setItem("homepage-analytics-session", session);
    }
  } catch { session = crypto.randomUUID(); }
  function track(kind) {
    if (off || navigator.doNotTrack === "1" || navigator.globalPrivacyControl === true) return;
    void fetch(endpoint, {
      method: "POST", mode: "cors", credentials: "omit", keepalive: true,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({ session, kind, path: location.pathname + location.hash, referrer: document.referrer }),
    }).catch(() => {});
  }
  track("page");
  window.addEventListener("hashchange", () => track("section"));
  window.addEventListener("homepage-analytics-toggle", (event) => {
    off = event.detail.off;
    if (!off) track("page");
  });
})();
