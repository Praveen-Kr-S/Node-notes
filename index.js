
// let name = "Praveen";
// console.log("User Name : ",name)

//Run the function in server side

function fact(n){
    if(n==1 || n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

// console.log("Factorial Value : ",fact(5))
/*
    return 5*fact(4) -> 5*
    return 4*fact(3) -> 5*4* -> 20*
    return 3*fact(2) -> 20*3* -> 60*
    return 2*fact(1) -> 60*2* -> 120*
    return 120*1 = 120.
*/


console.log(typeof(document))
console.log(typeof(window))
console.log(typeof(process))
console.log(process.version)
console.log(process.platform)
console.log(__dirname)
console.log(__filename)



const cousre = process.argv[2];
console.log("Course Name : ",(cousre ||"Not Selected"))


function add(){
    const a = process.argv[3];
    const b = process.argv[4];
    let c = parseInt(a)+parseInt(b)
    return (c);
}

console.log("ADD Value : ",add())