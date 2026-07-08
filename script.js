// Show pages
function showPage(pageId) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");
}

// Open Gift
function openGift() {

    document.getElementById("giftMessage").innerHTML =
        "🎁 Ghr ao mere dungi gift bi! ❤️";

}

// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 400);