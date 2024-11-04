// Variables to track rotation
let isDragging = false;
let startAngleX = 0;
let startAngleY = 0;
let lastFrameTime = 0; // Initialize lastFrameTime
let angle = 0;
const rotationSpeed = 0.1; // Adjust as needed

// Add mouse event listeners
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

// Add touch event listeners
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);

function handleMouseDown(event) {
    isDragging = true;
    startAngleX = event.clientX;
    startAngleY = event.clientY;
}

function handleMouseMove(event) {
    if (isDragging) {
        const angleX = (event.clientX - startAngleX) * 0.004;
        const angleY = (event.clientY - startAngleY) * 0.004;

        // Call your rotation functions with the calculated angles
        rotateStars_Z(stars, angleX);
        rotateStars_X(stars, -angleY);

        // Update start angles for the next iteration
        startAngleX = event.clientX;
        startAngleY = event.clientY;

        drawSvg(); // Adjust the function name
    }
}

function handleMouseUp() {
    isDragging = false;
}

// Touch event handlers
function handleTouchStart(event) {
    isDragging = true;
    startAngleX = event.touches[0].clientX;
    startAngleY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    event.preventDefault();
    if (isDragging) {
        const angleX = (event.touches[0].clientX - startAngleX) * 0.004;
        const angleY = (event.touches[0].clientY - startAngleY) * 0.004;

        // Call your rotation functions with the calculated angles
        rotateStars_Z(stars, angleX);
        rotateStars_X(stars, -angleY);

        // Update start angles for the next iteration
        startAngleX = event.touches[0].clientX;
        startAngleY = event.touches[0].clientY;

        drawSvg(); // Adjust the function name
    }
}

function handleTouchEnd(event) {
    isDragging = false;
}