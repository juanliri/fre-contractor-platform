/**
 * F.R.E. CONTRACTOR L.L.C. — Before / After Interactive Comparison Slider
 * Touch-enabled and Mouse-enabled responsive image split controller.
 */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#compare-container") || document.querySelector(".compare-slider-container") || document.querySelector(".compare-container");
    if (!container) return;

    const afterEl = container.querySelector(".compare-after");
    const overlay = container.querySelector(".compare-overlay");
    const handle = container.querySelector(".compare-handle");
    if (!handle) return;

    let isDragging = false;

    function setPosition(xPos) {
        const rect = container.getBoundingClientRect();
        let offsetX = xPos - rect.left;

        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;

        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

        handle.style.left = `${percentage}%`;

        if (afterEl) {
            afterEl.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
        if (overlay) {
            overlay.style.width = `${percentage}%`;
        }
    }

    // Mouse Events
    handle.addEventListener("mousedown", (e) => {
        isDragging = true;
        e.preventDefault();
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        setPosition(e.clientX);
    });

    // Touch Events
    handle.addEventListener("touchstart", (e) => {
        isDragging = true;
    }, { passive: true });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
        if (!isDragging || !e.touches[0]) return;
        setPosition(e.touches[0].clientX);
    }, { passive: true });

    // Container click/tap jump
    container.addEventListener("click", (e) => {
        if (e.target.closest(".compare-handle")) return;
        setPosition(e.clientX);
    });
});
