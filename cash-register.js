//starting
function checkCashRegister(price, cash, cid) {
    let change = price - cash;
    let changeArray = [];
    class ResultOpen {
        constructor() {
            this.status = 'OPEN',
            this.change = [];
        }
    }
    let newResult = new ResultOpen;
    console.log(newResult);

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
    return changeArray;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
