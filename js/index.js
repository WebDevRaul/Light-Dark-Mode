const btn = document.querySelector(".btn-toggle");
const classList = document.body.classList;
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  classList.add("dark-theme");
  btn.innerHTML = 'Light Mode';
} else if (currentTheme == "light") {
  classList.add("light-theme");
  btn.innerHTML = 'Dark Mode';
};

btn.addEventListener("click", () => {
  let theme;
  if(classList.contains('dark-theme')) {
    classList.add("light-theme");
    classList.remove("dark-theme");
    btn.innerHTML = 'Dark Mode';
    theme = "dark"
  } else {
    classList.add("dark-theme");
    classList.remove("light-theme");
    btn.innerHTML = 'Light Mode';
    theme = "light"
  }

  localStorage.setItem("theme", theme);
});