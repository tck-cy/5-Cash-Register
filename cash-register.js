//starting
function checkCashRegister(price, cash, cid) {
    let changeAmount = price - cash;
    let changeArray = [];
    let AmountInDrawer;
    console.log(cid);
   // let OtherVar = cid.map(arr => arr)
   let lookup = {
    "PENNY": 0.01, 
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
   }
   class ResultClosed {
    constructor() {
        this.status = 'CLOSED',
        this.change = [];
    }
}

class ResultLess {
    constructor() {
        this.status = 'INSUFFICIENT_FUNDS',
        this.change = [];
    }
}
class ResultOpen {
    constructor() {
        this.status = 'OPEN',
        this.change = [];
    }
}
   let totalCash = 0;
   let mArray = []
   for (let i =0; i < cid.length; i++) {
    let initial = 0
        let key = cid[i][0];
        let multiplier = mArray.push(cid[i][1]);
        let lookupValue  = lookup[key];
        totalCash = mArray.reduce((acc, multiplier) => acc + multiplier, initial).toFixed(2);
   }
   console.log(totalCash);
   if (totalCash < price) {
    return new ResultLess;
   }
   if (totalCash == price) {
    let answer = new ResultClosed;
    answer.change = cid;
    return answer;
   }

   if (totalCash > price) {}
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
