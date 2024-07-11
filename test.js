let numberMonth = +prompt();
let temperature = +prompt();
if (numberMonth >= 1 && numberMonth <= 2 || numberMonth === 12) {
    if (temperature <= -25) {
        console.log("Зима (холодная зима)");
    } 
    else {
        console.log("Зима");
    }
    
} else if (numberMonth >= 3 && numberMonth <= 5) {
    if (temperature <= 15) {
        console.log("Весна (прохладная весна)");
    } 
    else {
        console.log("Весна");   
    }
    
} else if (numberMonth >= 6 && numberMonth <= 8) {
    if (temperature >= 30) {
        console.log("Лето (жаркое лето)");
    } 
    else {
        console.log("Лето");
    }
} else {
    if (temperature < 0) {
        console.log("Осень (прохладная осень)");
    } 
    else {
        console.log("Осень");
}