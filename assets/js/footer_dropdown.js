document.querySelectorAll(".ea-dropdown").forEach(dropdown => {
    const toggle = dropdown.querySelector(".ea-dropdown-toggle");
    const menu = dropdown.querySelector(".ea-dropdown-menu");

    toggle.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });

    menu.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            const label = item.dataset.label;
            const flag = item.dataset.flag;
            toggle.querySelector("span").textContent = label;
            toggle.querySelector("img").src = `assets/img/flags/${flag}.svg`;
            dropdown.classList.remove("open");
        });
    });

    document.addEventListener("click", e => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});