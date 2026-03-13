document.getElementById("button-m").addEventListener("click", visaMeddelande);

function visaMeddelande() {
    let meddelande = document.getElementById("inputMeddelande").value;
    document.getElementById("output").textContent = meddelande;
}