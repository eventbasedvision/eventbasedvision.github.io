document.querySelectorAll(".toggle-section").forEach(function (element) {
  element.addEventListener("click", function () {
    var target = element.getAttribute("data-target");
    document.querySelectorAll(".toggle-section").forEach(function (el) {
      if (target != el.getAttribute("data-target")) {
        document.querySelector(
          "." + el.getAttribute("data-target")
        ).style.display = "none";
      } else {
        document.querySelector(
          "." + el.getAttribute("data-target")
        ).style.display = "block";
      }
    });
  });
});
