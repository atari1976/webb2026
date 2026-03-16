document.querySelector(".formular").addEventListener("submit", visaMeddelande);

document.getElementById("btn-decline-cookies").addEventListener("click", function () {
    localStorage.setItem("analytics-consent", "false");
    document.getElementById("cookie-banner").style.display = "none";
});

function visaMeddelande(event) {
    event.preventDefault();

    let meddelande = document.getElementById("inputMeddelande").value;

    /* Eftersom textContent används behövs egentligen ingen sanering här,
    eftersom innehållet visas som text och inte tolkas som HTML. */
    document.getElementById("output").textContent =
        "Tack! Ditt meddelande har registrerats och vi återkommer inom 48 timmar.";
}

/* Alternativ JS för Google Analytics som laddas först efter samtycke */

const GA_ID = "G-XXXX"; // Ersätt med organisationens riktiga ID

function loadAnalytics() {
    if (document.getElementById("ga-script")) {
        return;
    }

    let script = document.createElement("script");
    script.id = "ga-script";
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_ID);
}

document.getElementById("btn-ok").addEventListener("click", function () {
    localStorage.setItem("analytics-consent", "true");
    loadAnalytics();
    document.getElementById("cookie-banner").style.display = "none";
});

const cookieBanner = document.getElementById("cookie-banner");

if (cookieBanner && localStorage.getItem("analytics-consent") !== "true") {
    cookieBanner.focus();
}

if (localStorage.getItem("analytics-consent") === "true") {
    loadAnalytics();
    document.getElementById("cookie-banner").style.display = "none";
}