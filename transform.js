function rotateStars_Z(stars, angle) {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    for (const star of stars) {
        const distanceX = star.x - 0;
        const distanceY = star.y - 0;

        const newX = 0 + distanceX * cosA - distanceY * sinA;
        const newY = 0 + distanceX * sinA + distanceY * cosA;

        star.x = newX;
        star.y = newY;
    }
}

function rotateStars_X(stars, angle) {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    for (const star of stars) {
        const distanceZ = star.z - 0;
        const distanceY = star.y - 0;

        const newZ = 0 + distanceZ * cosA - distanceY * sinA;
        const newY = 0 + distanceZ * sinA + distanceY * cosA;

        star.z = newZ;
        star.y = newY;
    }
}

function rotateStars_Y(stars, angle) {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    for (const star of stars) {
        const distanceX = star.x - 0;
        const distanceZ = star.z - 0;

        const newX = 0 + distanceX * cosA - distanceZ * sinA;
        const newZ = 0 + distanceX * sinA + distanceZ * cosA;

        star.x = newX;
        star.z = newZ;
    }
}

// Modify the animate function to use the new rotation functions
function animate(timestamp) {
    const elapsedTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    const frameAngle = (rotationSpeed * elapsedTime) / 1000; // Convert to seconds

    rotateStars_Z(stars, frameAngle);
    rotateStars_X(stars, frameAngle);
    rotateStars_Y(stars, frameAngle);
    sortByZ(stars);
    drawSvg(); // Adjust the function name

    angle += frameAngle;

    // Request the next animation frame
    //requestAnimationFrame(animate);
}

// Start the animation
//requestAnimationFrame(animate);