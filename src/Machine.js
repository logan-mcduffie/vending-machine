class Machine {
  constructor() {
    this.money = 0;
    this.snacks = [
      { code: 1, item: "Pop-Tarts", cost: 10, stock: 1 },
      { code: 2, item: "Snickers Bar", cost: 10, stock: 1 },
      { code: 3, item: "Sun Chips", cost: 20, stock: 1 },
      { code: 4, item: "Cheeze-its", cost: 10, stock: 1 },
      { code: 5, item: "Chex Mix", cost: 20, stock: 1 },
      { code: 6, item: "Water Bottle", cost: 20, stock: 1 },
      { code: 7, item: "Vitamin Water", cost: 30, stock: 1 },
      { code: 8, item: "Monster Energy Drink", cost: 50, stock: 1 },
      { code: 9, item: "Gatorade", cost: 30, stock: 1 },
      { code: 10, item: "Red Bull", cost: 50, stock: 1 },
      { code: 11, item: "Lemonade", cost: 30, stock: 1 },
      { code: 12, item: 'Test', cost: 15, stock: 0 }
    ];
  }

  // As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
  // - Given I am using the vending machine,
  // - when I insert money,
  // - then I see the total I have deposited on a screen.
  // - `deposit(100)` returns `'You have deposited Rs 100'`
  // - The machine should accept bills in these amounts: `10, 20, 50, 100, 500`
  // As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
  // - Given I have deposited money in the vending machine,
  // - when I deposit additional money,
  // - then I see the new total on a screen.
  // - After depositing Rs 100, `deposit(50)` returns `'You have deposited Rs 150'`

  deposit(Amount) {

    if( Amount === 10 || Amount === 20 || Amount === 50 || Amount === 100 || Amount === 500){
      this.money += Amount;
      console.log(this.money);
      return `You have deposited Rs ${this.money}`
    } else {
      console.log(this.money);
      return "Please input correct monies"
    }
  };

  //   As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
  // - Given I am using the vending machine,
  // - when I enter a code for an item that is unavailable,
  // - then I see a message that the item is unavailable.
  // - `selectItem(code)` returns `'The item you selected is unavailable'`

//   selectItem(code) {
//     this.snacks.forEach(element => if(element == code) {
      
//     };
//   }

//   seeSelections() {
//     return this.snacks;
//   }

//   stock(inventory) {
//     if (inventory == undefined) {
//       throw Error("please do not troll. you cannot stock nothing.");
//     }
//     this.snacks = inventory;
//   }
}
// const vendingMachine = new Machine()
// vendingMachine.deposit(20);
// vendingMachine.deposit(10);
module.exports = Machine
