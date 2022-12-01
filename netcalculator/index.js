const prompt=require("prompt-sync")();
let user=prompt("Enter gross salary:" )
let pay=user;
let paye;
function tax() {
const payeNew = payeCheck(pay);
  const nssf = nssfDeduction(pay);
  const nhif = nhifDeduction(pay);
  const netSalary = pay- payeNew - nssf - nhif;
  console.log(netSalary);
}

function payeCheck (pay) {
    if (pay >= 0 && pay <= 24000) {
        paye = 0.1 * pay;
        return paye;
      } else if (pay > 24000 && pay <= 32333) {
        paye = 0.25 * pay;
        return paye;
      } else if (pay > 32333) {
        paye = 0.3 * pay;
        return paye;
      }
    
    console.log(pay)
}
function nhifDeduction(pay) {
    if (pay >= 0 && pay <= 5999) {
      return 150;
    } else if (pay >= 6000 && pay <= 7999) {
      return 300;
    } else if (pay >= 8000 && pay<= 11999) {
      return 400;
    } else if (pay >= 12000 && pay <= 14999) {
      return 500;
    } else if (pay >= 15000 && pay<= 19999) {
      return 600;
    } else if (pay >= 20000 && pay <= 24999) {
      return 750;
    } else if (pay >= 25000 && pay <= 29999) {
      return 850;
    } else if (pay >= 30000 && pay <=35000){
        return 900;
    } else if (pay >= 35000 && pay <=39000){
        return 950;
    } else if (pay >= 40000 && pay <=44999){
        return 1000;
    } else if (pay >= 45000 && pay <=49999){
        return 900;
    }

}
function nssfDeduction(pay) {
    pay = pay * 0.06;
    return pay;
  }
    tax();



