document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    header.addEventListener("click", () => {
        alert("You clicked the header!");
    });
});
