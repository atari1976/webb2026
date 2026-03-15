document.getElementById("btn-m").addEventListener("click", visaMeddelande);

function visaMeddelande() {
    let meddelande = document.getElementById("inputMeddelande").value;

    // Eftersom textContent används behövs egentligen ingen sanering här,
    // eftersom innehållet visas som text och inte tolkas som HTML.
    document.getElementById("output").textContent = meddelande;
}

/* Alternativ JS för Google Analytics som laddas först efter samtycke */

const GA_ID = "G-XXXX"; // Ersätt med ditt riktiga ID

function loadAnalytics() {
    // Kontrollera så att scriptet inte redan har laddats
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

// Klick på acceptera
document.getElementById("accept").addEventListener("click", function () {
    localStorage.setItem("analytics-consent", "true");
    loadAnalytics();
    document.getElementById("cookie-banner").style.display = "none";
});

// Kontrollera om samtycke redan finns
if (localStorage.getItem("analytics-consent") === "true") {
    loadAnalytics();
    document.getElementById("cookie-banner").style.display = "none";
}



/* Exempel på Google Analytics-kod som kan strida mot GDPR om den laddas direkt när sidan öppnas.
< script src = "https://www.googletagmanager.com/gtag/js?id=G-XXXX" > 

Välj i stället lösningen ovan där skriptet laddas först efter samtycke. */


