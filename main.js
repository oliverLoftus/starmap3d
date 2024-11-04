const svgContainer = document.getElementById("mySvg");

let fov = 0.0001;
const zero_X = svgContainer.getAttribute("width") / 2;
const zero_Y = svgContainer.getAttribute("height") / 2;


function perspective_X(vert) {
    return vert.x / ((vert.y + 400) * fov);
}

function perspective_Y(vert) {
    return -vert.z / ((vert.y + 400) * fov); //Z is up
}

function perspective_R(star) {
    return (star.size/75) / ((star.y * 1.3 + 400) * fov); //Z is up
}

function createCircle(cx, cy, r, fill, stroke, name) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    circle.setAttribute("stroke", stroke);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", cx);
    text.setAttribute("y", cy + r + 7.5); // Adjust the position as needed
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-family", "Arial");
    text.setAttribute("font-size", "6");
    text.setAttribute("fill", "white");
    text.setAttribute("user-select", "none");
    text.textContent = name;

    group.appendChild(circle);
    group.appendChild(text);

    svgContainer.appendChild(group);

     // Disable drag selection on the SVG container
     svgContainer.style.userSelect = "none";
     svgContainer.style.MozUserSelect = "none";
     svgContainer.style.webkitUserSelect = "none";
     svgContainer.style.msUserSelect = "none";
}

function drawStar(star) {
    const cx = perspective_X(star) + zero_X;
    const cy = perspective_Y(star) + zero_Y;
    const radius =  perspective_R(star);

    createCircle(cx, cy, radius, heat(star.color), heat(star.color), star.name);
}

function Z_sort(starA, starB) {
    return starB.y - starA.y;
}

function drawSvg() {
    svgContainer.innerHTML = ""; // Clear previous content
    stars.sort(Z_sort);
    for (const star of stars) {
        drawStar(star);
    }
}

function expand(stars){
    for (const star of stars) {
        x = 2.5;
        star.x *=x;
        star.y *=x;
        star.z *=x;
    }
}

function heat(x){
    if (x == 0){
        return "white";
    }
    else if (x<0.2){
        return "#6FF";
    }
    else if (x<0.5){
        return "#FF5";
    }
    else if (x<1){
        return "yellow";
    }
    else if (x<1.5){
        return "#F80";
    }
    else {
        return "red";
    }
}

expand(stars)
drawSvg();