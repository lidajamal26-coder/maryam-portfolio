
// Mobile Navigation
function toggleMenu() {
    document.getElementById("navbar")
        .classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar")
            .classList.remove("active");
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// Certificate Image Lightbox

const certificateImages = document.querySelectorAll(
    ".certificate-image img"
);

certificateImages.forEach((image) => {
    image.addEventListener("click", () => {
        const lightbox = document.createElement("div");

        lightbox.className = "certificate-lightbox";

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });
    });
});
