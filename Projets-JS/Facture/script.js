function calculer() {
    // Première ligne
    var valPrx1 = document.getElementById("prix1").value;
    var ValQua1 = document.getElementById("quantite1").value;
    var resligne1 = Number(valPrx1) * Number(ValQua1);
    document.getElementById("resultat1").value = resligne1.toFixed(2);

    // Deuxième ligne
    var valPrx2 = document.getElementById("prix2").value;
    var ValQua2 = document.getElementById("quantite2").value;
    var resligne2 = Number(valPrx2) * Number(ValQua2);
    document.getElementById("resultat2").value = resligne2.toFixed(2);

    // Troisième ligne
    var valPrx3 = document.getElementById("prix3").value;
    var ValQua3 = document.getElementById("quantite3").value;
    var resligne3 = Number(valPrx3) * Number(ValQua3);
    document.getElementById("resultat3").value = resligne3.toFixed(2);

    // Total
    var resTotal = resligne1 + resligne2 + resligne3;
    document.getElementById("totale").value = resTotal.toFixed(2) + " €";
}

function vider() {
    // Réinitialiser tous les champs
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("resultat1").value = "";

    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("resultat2").value = "";

    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";
    document.getElementById("resultat3").value = "";

    document.getElementById("totale").value = "";
}

// Calcul automatique lors de la saisie
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            calculer();
        });
    });
});