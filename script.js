function convertir() {
    const valeur = parseFloat(document.getElementById("valeur").value);
    const uniteDepart = document.getElementById("uniteDepart").value;
    const uniteArrivee = document.getElementById("uniteArrivee").value;
    let resultat;

    if (uniteDepart === "celsius" && uniteArrivee === "fahrenheit") {
        resultat = (valeur * 9/5) + 32;
    } else if (uniteDepart === "fahrenheit" && uniteArrivee === "celsius") {
        resultat = (valeur - 32) * 5/9;
    } else if (uniteDepart === "metre" && uniteArrivee === "pied") {
        resultat = valeur * 3.28084;
    } else if (uniteDepart === "pied" && uniteArrivee === "metre") {
        resultat = valeur / 3.28084;
    }
    else if (uniteDepart === "kilometre" && uniteArrivee === "mile") {
        resultat = valeur * 0.621371;
    } else if (uniteDepart === "mile" && uniteArrivee === "kilometre") {
        resultat = valeur / 0.621371;
    }
    else if (uniteDepart === uniteArrivee){
        resultat = valeur;
    }
     else {
        resultat = "Conversion non supportée.";
    }

    document.getElementById("resultat").textContent = "Résultat : " + resultat;
}