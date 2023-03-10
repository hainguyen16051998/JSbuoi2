// Bài 1: 

function calculateFactorial(a){
    let b = 1;
    for(let i = 1; i <= a; i++){
        b *= i;
    }
    console.log(b);
}
calculateFactorial(6);

//Bài 2: 

function reverseString(a){
    let b = "hello";
    let c = new String;
    for ( let i = b.length -1 ; i >= 0; i--){
        c+=b[i];
    }
    console.log(c);
}
reverseString("hello");

// Bài 3: 

function translate(a){ 
    switch(a){
        case "VN":
            console.log("Xin chào");
            break;
        case "EN":
            console.log("Hello");
            break;
        case "Sing":
            console.log("Hi");
            break;
    }
}
translate("Sing");

// Bài 4: 

// let string = "xinchaocacbandenvoiTechmaster";
// console.log("Chuỗi cần lấy là: " + string.slice(0, 10)+ "...");

function subString(a){
    let b = new String(a);
    let c = new String;
    for(let i = 0; i < 10; i++){
        c+=b[i];
    }
    console.log(c+"...");
}
subString("xinchaocacbandenvoiTechmaster");
