// callback : 
function add(cb){
    let a =2
    cb()
}
function ratio(){
let b =30;
console.log(b)
return 20;
}


// let b = setTimeout(ratio,100)

// prmosies : 
new Promise(()=>{
console.log(`accepted`)
},()=>{
console.log(`rejected`)
})
console.log(`i am sync`)