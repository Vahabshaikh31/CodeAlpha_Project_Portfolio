// Dark Mode

// Select the button
const btn = document.getElementById("toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");


if (btn && theme) {
    // Listen for a click on the button
    btn.addEventListener("click", function () {
        // If the current URL contains "light-theme.css"
        if (theme.getAttribute("href") == "recaurces/style.css") {
            // ... then switch it to "dark-theme.css"
            theme.href = "recaurces/style2.css";
        } else {
            // ... switch it to "light-theme.css"
            theme.href = "recaurces/style.css";
        }
    });
} else {
    console.error("Button or theme link not found");
}
