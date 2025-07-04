function handleHamburgerDisplay() {
    const hamburger = document.getElementsByClassName("hamburger")[0];
    const rightDiv = document.getElementsByClassName("right-div")[0];

    if (window.innerWidth <= 768) {
        hamburger.style.display = "block";
        rightDiv.style.display = "none"; // hide menu initially on small screen


    } else {
        hamburger.style.display = "none";
        rightDiv.style.display = "flex"; // hide menu initially on small screen
    }
}

// Run on page load
handleHamburgerDisplay();

// Also run whenever screen is resized
window.addEventListener("resize", handleHamburgerDisplay);

function hamburger() {
    const div_main = document.getElementsByClassName("main")[0];
    const nav_item = document.getElementsByClassName("nav-item");
    let hamburger_toggle = document.getElementsByClassName("right-div")[0];
    if (hamburger_toggle.style.display === "none") {
        hamburger_toggle.style.display = "block"
        div_main.style.paddingTop = "200px";
    } else {
        hamburger_toggle.style.display = "none"
        div_main.style.paddingTop = "0px";
    }

    for (let i=0;i<nav_item.length;i++){
        nav_item[i].addEventListener("click", () => {
            hamburger_toggle.style.display = "none"
            div_main.style.paddingTop = "0px";
        })
    }
}