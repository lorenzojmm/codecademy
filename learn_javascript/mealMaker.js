const menu = {
    _meal: "",
    _price: 0,
  
    set mealToCheck(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Todays Meal is ${this._meal} for ${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu._meal = "pizza";
  menu._price = 8;
  
  console.log(menu.todaysSpecial);
  