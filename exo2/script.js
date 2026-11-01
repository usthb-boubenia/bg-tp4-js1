"use strict"
//liste du slide 39
let Tableau_Etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
//slide 40
const Etudiant = {
    Nom: "John",
    Prenom: "DOE",
    Age: 30
}
//slide 41, tableau d'objets
const Tableau_Objets_Etudiants = [
    {nom: "nom1", prenom: "prenom1", age: "21"},
    {nom: "nom2", prenom: "prenom2", age: "22"},
    {nom: "nom3", prenom: "prenom3", age: "23"}
];


// boucle for page 45
function F1(Tableau_Etudiants) {
    for(let v of Tableau_Etudiants)
        console.log(v);
}

function F2(Etudiant) {
    console.log(Etudiant);
}

function F3(Tableau_Objets_Etudiants) {
    for(let o of Tableau_Objets_Etudiants)
        console.log(o.nom+'-'+o.prenom+'-'+o.age);
}