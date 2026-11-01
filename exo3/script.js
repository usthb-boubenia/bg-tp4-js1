"use strict"

let Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, unknownType: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, unknownType: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, unknownType: 3 }
]

// callbacks slide 48
function A(B, Students) {
    for(let o of Students)
        if(B(o.note)) 
            console.log(o.id+': ADMIS');
        else
            console.log(o.id+': AJOURNE');

}
// y'a pas de type float spécilement dédié
function B(note) {
    if(note>=10)
        return true;
    else
        return false;
}