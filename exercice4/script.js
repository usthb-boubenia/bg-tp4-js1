
const Product={ //vu dans le slide 40
  name:"keyboard",
  price:2500,
  quantity:10
}
function function1(){
console.log(Product.quantity*Product.price)
}

const Catalogue = [ //vu dans le slide 41
  {
    
  name:"keyboard",
  price:2500,
  quantity:10
  },
  {
    
name:"PC",
  price:50000,
  quantity:15
  },

  {
    
name:"mouse",
  price:1500,
  quantity:5
  },

  {
    
name:"Phone",
  price:25000,
  quantity:10
  },

  {
  
name:"tablet",
  price:30000,
  quantity:20
  }
]

function function2(){

  let averagePrice=0;
  let somme = 0;
  let cpt = 0;

  for(let i=0;i<Catalogue.length;i++){

    somme = somme+Catalogue[i].price
    cpt = cpt+1;
  }

  averagePrice = somme/cpt

  Catalogue.forEach((produit)=>{ //vu dans le slide 45
    if(produit.price>=averagePrice){

      console.log(produit)
    }
  })
  }

  function fonction3(){ //vu dans le slide 39
  const Totale = Catalogue.reduce((acc,produit)=>{
    return acc + produit.quantity*produit.price
  },0)
  console.log(Totale)
  }


  function fonction4(){
  const somme = Catalogue.reduce((acc,curr)=>{
    return acc + curr.quantity
  },0)
  console.log(somme)
  }


   function fonction5(name){ //vu dans le slide 39
  const Produit = Catalogue.find((p)=>{
    return p.name===name
  })

  const StockValue = Produit.quantity*Produit.price

  console.log(StockValue)
  }


  function fonction6(callback){  //vu dans le slide 48
  
    Catalogue.forEach((produit)=>{
      callback(produit)
    })
  }

   function fonction7(callback){  //vu dans le slide 48
  
    Catalogue.forEach((produit)=>{
      callback(produit)
    })


  }


  







