const prompt=require("prompt-sync")();
let user=prompt("Enter gross salary:")
function tax(grossSalary){
    var nhif= nhifDeduction;
    var nssf=nssfDeduction;
    var paye=payecheck;
    var netpay=grossSalary-paye-nssf-nhif
    console.log(netsalary);
}
function payecheck (grossSalary) {
if (grossSalary<=24000){
    console.log(grossSalary *0.1);
}
else if(grossSalary>24001){
    console.log(grossSalary*0.25);
}
else if(grossSalary>32333){
    console.log(grossSalary*0.3);
}
}
function nhifDeduction(grossSalary){
    if(grossSalary<6000) {
        return 150;
    }else if(grossSalary<8000){
        return 300
    }else if(grossSalary<12000){
        return 400
    }else if (grossSalary<15000){
        return 500
    }else if (grossSalary<20000){
        return 600
    }else if (grossSalary<25000){
        return 700
    }else if (grossSalary<30000){
        return 850
    }else if (grossSalary>35000){
        return 900
    }else{
        return 950
    }

}
let nssf=400;
totaldeductions= nhif+paye+nssf;
netsalary=grossSalary-totaldeductions;
console.log(`grossSalary is${grossSalary}`);
