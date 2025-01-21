import 'https://cdn.jsdelivr.net/npm/flowbite@1.5.3/dist/flowbite.min.css';  // Import flowbite if you're using its components (modals, tooltips, etc.)

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling behavior for anchor links with data-section attribute
    const links = document.querySelectorAll("a[data-section]");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // Prevent default behavior

            const targetHref = link.getAttribute("href");
            const [page, hash] = targetHref.split("#");

            // If navigating to a different page, go to that page with hash
            if (page && window.location.pathname !== `/${page}`) {
                window.location.href = `${page}#${hash}`;
            } else if (hash) {
                // Smooth scroll to section on the same page
                const targetSection = document.getElementById(hash);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Handle initial page load if there is a hash in the URL
    if (window.location.hash) {
        const targetId = window.location.hash.slice(1); // Remove '#' from the hash
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
});
