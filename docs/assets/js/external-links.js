// Keep visitors in the documentation site when following internal links.
(function () {
  function openExternalLinksInNewTabs() {
    var links = document.querySelectorAll("a[href]");

    Array.prototype.forEach.call(links, function (link) {
      var destination;

      try {
        destination = new URL(link.href, window.location.href);
      } catch (error) {
        return;
      }

      if (
        (destination.protocol === "http:" || destination.protocol === "https:") &&
        destination.origin !== window.location.origin
      ) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openExternalLinksInNewTabs);
  } else {
    openExternalLinksInNewTabs();
  }
})();