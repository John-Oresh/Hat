let mangoCounter = 0;
let appleCounter = 0;
let plumCounter = 0;
let orangeCounter = 0;

const fruitValue = document.getElementById("fruit")

let ArrayList = [];

document.getElementById("plusM").addEventListener('click',() => {

    ArrayList.push({name:"mango",mcounter:mangoCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    mangoCounter++
});
document.getElementById("minusM").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == "mango" && item.mcounter==mangoCounter){
            mangoCounter--
        }else{
            return item
        }
    })

    let Ivalue = ""
    ArrayList = ans;
    ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})




document.getElementById("plusA").addEventListener('click',() => {
    ArrayList.push({name:"apple",acounter:appleCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    appleCounter++
})

document.getElementById("minusA").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == "apple" && item.acounter==appleCounter){
            appleCounter--
        }else{
            return item
        }
    })

    let Ivalue = ""
    ArrayList = ans;
    ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})






document.getElementById("plusP").addEventListener('click',() => {
    ArrayList.push({name:"plum",pcounter:plumCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    plumCounter++
})
document.getElementById("minusP").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == "plum" && item.pcounter==plumCounter){
            plumCounter--
        }else{
            return item
        }
    })

    let Ivalue = ""
    ArrayList = ans;
    ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})







document.getElementById("plusO").addEventListener('click',() => {
    ArrayList.push({name:"orange",ocounter:orangeCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    orangeCounter++
})
document.getElementById("minusO").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == "orange" && item.ocounter==orangeCounter){
            orangeCounter--
        }else{
            return item
        }
    })

    let Ivalue = ""
    ArrayList = ans;
    ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})



document.getElementById("plusG").addEventListener('click',() => {
    ArrayList.push({name:",grape",counter:mangoCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})