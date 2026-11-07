const Etudiants1= ["Etudiant1" ,"Etudiant2", "Etudiant3" ] //vue en cour dans le slide 39
const F1 = ()=>{
  
  Etudiants1.forEach(element => {
    console.log(element)
  });
  }


const Etudiants2 = { //vue en cour dans le slide 39
  nom:'John',
  prenom : 'DOE',
  age  : 30
}

const F2= ()=>{ 
  console.log(Etudiants2)
}

const Etudiant3 = [ //vue en cour dans le slide 41
  {
    etudiant1 : "nom1-prenom1-21"
  },

  {
etudiant1 : "nom2-prenom2-22"
  },

  {
etudiant1 : "nom3-prenom3-23"
  }
]

const F3 = ()=>{

  Etudiant3.forEach(etudiant => {
    console.log(etudiant.etudiant1)
  });

}
