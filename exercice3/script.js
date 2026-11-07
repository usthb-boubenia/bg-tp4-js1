const students =[ //vue en cour dans le slide 39
  {
id : 1000,
nom : "John",
prenom:"DOE",
note:14.5


  },
  {
id : 2000,
nom : "BOB",
prenom:"CARLTON",
note:7.1
},
  {
id : 3000,
nom : "RAYANE",
prenom:"SMITH",
note:13.3
  },
]



function B(note) {
    return note >= 10;
}

function A() { //vue en cour dans le slide 43
    students.forEach(student => {
       let result =  B(student.note);

       if(result===true){
        console.log(student.id,':Admis')
       }else{
         console.log(student.id,':Ajourné')
       }

    });
}