const prompt=require("prompt-sync")();
let speed=prompt("Enter speed:");
function calculatePoints(speed){
    if(speed<70){
        console.log ("OK");
    }
    else if(speed>70){
        const points=((speed-70)/5);
        console.log(`"Points:${points}"`);
    if (points>12){
        console.log("licence suspended");
    }
}
}
calculatePoints(speed);