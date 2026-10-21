// Theme toggle and profile-link copy interactions.
const themeToggle = document.getElementById("themeToggle");
const copyButton = document.getElementById("copyButton");
const copyMessage = document.getElementById("copyMessage");

if (themeToggle) {
    const themeIcon = themeToggle.querySelector("i");
    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        if (themeIcon) {
            themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
        }
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    });
}

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        const copyText = copyButton.querySelector("span");
        const url = window.location.href;

        try {
            if (!navigator.clipboard || !window.isSecureContext) {
                throw new Error("Clipboard API unavailable");
            }
            await navigator.clipboard.writeText(url);
            if (copyText) copyText.textContent = "Link copied!";
            if (copyMessage) copyMessage.textContent = "Profile link copied successfully.";
        } catch (error) {
            if (copyMessage) {
                copyMessage.textContent = "Copy unavailable. Copy the page URL from your browser address bar.";
            }
        }

        window.setTimeout(() => {
            if (copyText) copyText.textContent = "Copy profile link";
        }, 2000);
    });
}
