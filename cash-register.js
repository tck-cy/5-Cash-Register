function checkCashRegister(price, cash, cid) {
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
    // Calculate the change amount
    let changeAmount = cash - price;

    // Calculate the total cash in the drawer
    let totalCash = cid.reduce((acc, item) => acc + item[1], 0);

  
    // Return an object with the "INSUFFICIENT_FUNDS" status if the total cash is less than the change amount
    if (totalCash < changeAmount) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Return an object with the "CLOSED" status if the total cash is equal to the change amount
    if (totalCash == changeAmount) {
      return { status: "CLOSED", change: cid };
    }
  
    // Sort the denominations in descending order
    let denominations = Object.keys(lookup).sort((a, b) => lookup[b] - lookup[a]);

    // Initialize the change array
    let change = [];
  
    // Loop through the denominations and calculate the change
    for (let i = 0; i < denominations.length; i++) {
      let denomination = denominations[i];

      let value = lookup[denomination];

      if (changeAmount >= value) {
        // Calculate the number of coins or bills needed
        let numCoins = Math.floor(changeAmount / value);
        let changeValue = numCoins * value;
  
        // Check if there are enough bills or coins available
        let item = cid.find((item) => item[0] == denomination);
        if (item[1] < changeValue) {
          changeValue = item[1];
          numCoins = Math.floor(changeValue / value);
        }
  
        // Add the coins or bills to the change array
        change.push([denomination, changeValue]);
        // Subtract the change value from the change amount
        changeAmount = (changeAmount - changeValue).toFixed(2);
      }
    }
  
    // Return an object with the "OPEN" status and the change array if the change amount is zero
    if (changeAmount == 0) {
      return { status: "OPEN", change };
    }
  
    // Return an object with the "INSUFFICIENT_FUNDS" status if the change amount is greater than zero
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  