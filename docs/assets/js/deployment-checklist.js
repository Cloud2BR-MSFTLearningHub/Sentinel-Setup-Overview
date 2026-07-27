// Makes the static deployment checklist interactive for each browser.
(function () {
  var STORAGE_KEY = "sentinel-deployment-checklist";

  function enableChecklist() {
    if (!window.location.pathname.includes("operations/deployment-checklist")) {
      return;
    }

    var items = Array.prototype.slice.call(
      document.querySelectorAll(".task-list-item input[type='checkbox']")
    );
    var selections = {};

    try {
      selections = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (error) {
      selections = {};
    }

    function saveSelections() {
      var current = {};
      items.forEach(function (checkbox, index) { current[index] = checkbox.checked; });
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }

    items.forEach(function (checkbox, index) {
      checkbox.disabled = false;
      checkbox.checked = selections[index] === true;
      checkbox.addEventListener("change", saveSelections);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enableChecklist);
  } else {
    enableChecklist();
  }
})();