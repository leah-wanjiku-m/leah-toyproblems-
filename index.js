
const prompt=require("prompt-sync")();

let marks =prompt("Enter Student Marks:");
    switch (true){
        case marks>79:
            console.log("A");
            break;
        case marks>60: 
        console.log("B");
            break;
        case marks>49:
            console.log("C");
                break;
        case marks>40:
            console.log("D");
                    break;
        case marks<40:
            console.log("E");
                    break;
                    default:
                        text="invalid Grade";

    }


