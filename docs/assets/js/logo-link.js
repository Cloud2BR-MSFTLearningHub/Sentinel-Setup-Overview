// Header navigation: title text goes to the landing page, logo opens the GitHub org.
(function () {
  var ORG_URL = "https://github.com/Cloud2BR-MSFTLearningHub";

  function applyHeaderLinks() {
    var logo = document.querySelector(".md-header__button.md-logo");
    var title = document.querySelector(".md-header__title");
    var homeHref = logo ? logo.href : null;

    if (title && homeHref && !title.dataset.homeLinked) {
      title.dataset.homeLinked = "true";
      title.style.cursor = "pointer";
      title.setAttribute("role", "link");
      title.setAttribute("tabindex", "0");
      title.setAttribute("title", "Go to the documentation home");
      title.addEventListener("click", function () { window.location.href = homeHref; });
      title.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = homeHref;
        }
      });
    }

    if (logo) {
      logo.setAttribute("href", ORG_URL);
      logo.setAttribute("target", "_blank");
      logo.setAttribute("rel", "noopener");
      logo.setAttribute("title", "Open the Cloud2BR OSS - Learning Hub organization");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyHeaderLinks);
  } else {
    applyHeaderLinks();
  }
})();