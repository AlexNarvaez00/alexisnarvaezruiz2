const e=()=>"theme"in localStorage&&localStorage.theme=="dark";window.isActiveDarkMode=e;e()&&document.documentElement.classList.add("dark");
