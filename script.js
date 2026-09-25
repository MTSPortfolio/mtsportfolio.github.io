(function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("nav");

    if (!toggle || !nav) return;

    function setOpen(open) {
        nav.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
        setOpen(!nav.classList.contains("open"));
    });

    // Close on an in-page anchor, where no navigation happens to close it.
    nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setOpen(false);
    });
})();
