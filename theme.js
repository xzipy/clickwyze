const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

// Initial load
applyTheme(prefersDark.matches);

prefersDark.addEventListener("change", (e) => {
  applyTheme(e.matches);
});