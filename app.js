document.addEventListener("DOMContentLoaded", function() {
    const pre1 = document.querySelector("pre.language-css");

    if (pre1) {
        document.addEventListener("mousemove", (e) => {
            rotateElement(e, pre1);
        });
    } else {
        console.error("No <pre> element with class 'language-css' found in the document.");
    }

    function rotateElement(event, element) {
        // Get mouse position
        const x = event.clientX;
        const y = event.clientY;

        // Get the bounding rectangle of the <pre> element
        const rect = element.getBoundingClientRect();

        // Calculate the center of the <pre> element
        const preCenterX = rect.left + rect.width / 2;
        const preCenterY = rect.top + rect.height / 2;

        // Calculate the offset from the center of the <pre> element
        const offsetX = ((x - preCenterX) / preCenterX) * 45;
        const offsetY = ((y - preCenterY) / preCenterY) * 45;

        // Apply transformations directly
        element.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-1 * offsetY}deg)`;
    }
});