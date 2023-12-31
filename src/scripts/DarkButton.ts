document.addEventListener("DOMContentLoader", () => {
  alert("Alert");

  const buttonDark = document.getElementById("dark-button");
  buttonDark.addEventListener("clic", (event) => {
    alert("2");
    const target = event.target;
    console.log(target);
  });
});
