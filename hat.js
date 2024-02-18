let mangoCounter = 0;
let appleCounter = 0;
let plumCounter = 0;
let orangeCounter = 0;
let grapeCounter = 0;

const fruitValue = document.getElementById("fruit")

let ArrayList = [];

document.getElementById("plusM").addEventListener('click',() => {

    ArrayList.push({name:"Mango",mcounter:mangoCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    mangoCounter++
});
document.getElementById("minusM").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == "Mango" && item.mcounter==mangoCounter){
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
    ArrayList.push({name:", Apple",acounter:appleCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    appleCounter++
})

document.getElementById("minusA").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == ", Apple" && item.acounter==appleCounter){
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
    ArrayList.push({name:", Plum",pcounter:plumCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    plumCounter++
})
document.getElementById("minusP").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == ", Plum" && item.pcounter==plumCounter){
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
    ArrayList.push({name:", Orange",ocounter:orangeCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
    orangeCounter++
})
document.getElementById("minusO").addEventListener('click',() => {
  
    const ans = ArrayList.filter((item) => {
        if(item.name == ", Orange" && item.ocounter==orangeCounter){
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
    ArrayList.push({name:"Grape",gcounter:grapeCounter+1});
let Ivalue = ""
ArrayList.map((item,index)=> {
        Ivalue+=item.name;
      fruitValue.value= Ivalue;
    })
})

document.getElementById("minusG").addEventListener('click',() => {

    const ans = ArrayList.filter((item) => {
        if(item.name == "Grape" && item.gcounter==grapeCounter){
            console.log("orange");
            grapeCounter--
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