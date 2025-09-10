function renderFooter() {
    const navContainer = document.getElementById("footer"); // div id where cards will render
    navContainer.innerHTML = "";

    const navbar = document.createElement("footer");

    navbar.className = "mt-3 pb-3 pt-3 bg-dark text-light text-center text-small";

    navbar.innerHTML = `
    <p class="mb-1">&copy; 2025 Cartitas</p>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="#" class="footer-link">Instagram</a></li>
        <li class="list-inline-item"><a href="#" class="footer-link">Twitter</a></li>
        <li class="list-inline-item"><a href="#" class="footer-link">Support</a></li>
    </ul>
   `;

    navContainer.appendChild(navbar);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter);
} else {
    renderFooter();
}
