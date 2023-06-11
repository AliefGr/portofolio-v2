const darkMode = () => {
  const themeToggle = document.querySelectorAll("#theme-togle");

  //   state
  const theme = localStorage.getItem("theme");

  //   on mount
  theme && document.body.classList.add(theme);

  //  handlers
  const handlersTheme = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute('class');
    }
  };

//   event
  themeToggle.forEach((btn) => 
    btn.addEventListener("click", handlersTheme)
  );


};

export default darkMode;
