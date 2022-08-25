const $ = (q, e = document) => e.querySelector(q);
const $$ = (q, e = document) => e.querySelectorAll(q);

const scrollUp = $("#scroll_up");
window.addEventListener("scroll", (e) => {
  window.scrollY > 600
    ? scrollUp.classList.add("scroll_up-visible")
    : scrollUp.classList.remove("scroll_up-visible");
});

const aside = $("aside");
const navMenuIcons = $$("#nav_menu i");

const toggleAside = () => {
  aside.classList.toggle("aside-shown");
  navMenuIcons.forEach((icon) => icon.classList.toggle("hide"));
};

const projects = $$(".project");
const filters = $$(".projects_filters");

const filterProjects = (that) => {
  const filter = that.innerText.toLowerCase();
  const filterButtons = $$(".projects_filter");
  filterButtons.forEach((button) =>
    button.classList.remove("projects_filter-focus")
  );
  if (filter === "all") {
    projects.forEach((project) => project.classList.remove("hide"));
    that.classList.add("projects_filter-focus");
    return filter;
  }
  projects.forEach((project) => {
    if ($("img", project).dataset.filter === filter)
      project.classList.remove("hide");
    else project.classList.add("hide");
    that.classList.add("projects_filter-focus");
  });
};

const hideAside = () => {
  aside.classList.toggle("aside-shown");
  navMenuIcons.forEach((icon) => icon.classList.toggle("hide"));
};

const loader = $("#loader");

setTimeout(() => loader.classList.add("fade"), 1000);
