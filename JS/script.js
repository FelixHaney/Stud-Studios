// =========================================
// STUD STUDIOS
// script.js
// =========================================

// ------------------------------
// Mobile Navigation
// ------------------------------

const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {

    nav.classList.toggle("show");

});

// ------------------------------
// Active Navigation
// ------------------------------

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

function showSection(id, button) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });

    document.getElementById(id).classList.add("active-page");

    navButtons.forEach(btn => {

        btn.classList.remove("active");

    });

    if (button) {

        button.classList.add("active");

    }

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

function openArticle(id) {

    showSection(id);

}
// ------------------------------
// Copy Minecraft Server IP
// ------------------------------

const copyButton = document.querySelector(".server-box button");

if (copyButton) {

    copyButton.addEventListener("click", () => {

        navigator.clipboard.writeText("StudStudiosSMP.aternos.me");

        copyButton.innerHTML = "Copied!";

        setTimeout(() => {

            copyButton.innerHTML = "Copy Server IP";

        }, 2000);

    });

}

// ------------------------------
// Smooth Fade In
// ------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card, .news-card, .server-box, .contact").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// ------------------------------
// Hero Button Animation
// ------------------------------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// ------------------------------
// Sticky Header Shadow
// ------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 25) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "";

    }

});

// ------------------------------
// Footer Year
// ------------------------------

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Stud Studios. All Rights Reserved.`;

}

// ------------------------------
// Scroll To Top Button
// ------------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ------------------------------
// Placeholder Buttons
// ------------------------------

document.querySelectorAll("a[href='#']").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        console.log("Page coming soon!");

    });

});

// ------------------------------
// Console Welcome
// ------------------------------

console.log("%cWelcome to Stud Studios!", "color:#1ca756;font-size:20px;font-weight:bold;");
console.log("%cBuild. Create. Inspire.™", "color:#126b3d;font-size:14px;");

/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    // Has this tab already shown the loader?
    if (sessionStorage.getItem("studLoaderShown")) {

        loader.style.display = "none";
        return;

    }

    // Mark it as shown for this tab
    sessionStorage.setItem("studLoaderShown", "true");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});

/* =========================================
   FAQ
========================================= */

document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const open = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(a => {

            a.style.display = "none";

        });

        answer.style.display = open ? "none" : "block";

    });

});

function searchFAQ() {

    const input = document.getElementById("faqSearch").value.toLowerCase();

    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {

        const text = item.innerText.toLowerCase();

        item.style.display = text.includes(input) ? "block" : "none";

    });

}

async function checkServerStatus() {

    const statusElement = document.getElementById("serverStatus");

    try {

        const response = await fetch(
            "https://api.mcstatus.io/v2/status/java/StudStudiosSMP.aternos.me"
        );

        const data = await response.json();

        if (data.online) {

            statusElement.textContent = "🟢 Online";
            statusElement.className = "status online";

        } else {

            statusElement.textContent = "🔴 Offline";
            statusElement.className = "status offline";

        }

    } catch (error) {

        statusElement.textContent = "⚠️ Status unavailable";
        statusElement.className = "status";

    }

}

checkServerStatus();

setInterval(checkServerStatus, 30000);