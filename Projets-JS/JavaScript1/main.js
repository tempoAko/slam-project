function test_age() {
    let age = prompt("Quelle votre age ? ");
    if (age < 18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    
    else{
        document.write("Vous êtes majeure");
        document.body.style.backgroundColor="green";
    }
}

function calcul_moyenne() {
    var n1 = prompt("Donnez la note : ")
    var n2 = prompt("Donnez la note : ")
    var n3 = prompt("Donnez la note : ")

    var somme = Number(n1) + Number(n2) + Number(n3)

    var moyenne = somme/3
    document.write("Voici la moyenne : " + moyenne + '</br>')
    if (moyenne < 0 || moyenne > 20){
        document.write("Moyenne invalide, veuillez entrez des notes entre 0 et 20")
    }else{
        if (moyenne < 10){
            document.write("vous êtes refuse")
        } else if (moyenne < 14){
            document.write("vous êtes admis avec mention passable")
        }else if (moyenne > 14){
            document.write("vous êtes admis avec mention bien")
        } else{
            document.write("vous êtes admis")
        }
    }
}

function test_couleur() {
    let couleur = prompt("Donnez la couleur (in english) ");
    document.body.style.backgroundColor = couleur
}

function affichage() {
    let prenom = prompt("Entrez votre prénom : ");
    let nom = prompt("Entrez votre nom : ");
    let sexe = prompt("Entrez votre sexe (H/F) : ");

    if (sexe = "H" || "h"){genre = "Monsieur"}else{genre = "Madame"}
    document.write("Bienvenue " + genre + " " + nom + " " + prenom )
}