let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
    get appetizers() {
      return;
    },
    set appetizers(appetizerIn) {
      return;
    },
    get mains() {
      return;
    },
    set mains(mainIn) {
      return;
    },
    get desserts() {
      return;
    },
    set desserts(dessertIn) {
      return;
    },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
  addDishToCourses(courseName, dishName, dishPrice) {
    const dish = {
      _name: dishName,
      _price: dishPrice
    };
    this._courses[courseName].push(dish);
    //this._courses[courseName](dish);
  },

  getRandomDishFromCourse(courseName) {
    let dishes = menu._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer._price + main._price + dessert._price;
    let formattedPrice = String(totalPrice);
    return `Your meal is ${appetizer._name}, ${main._name}, ${dessert._name}. The price is ${formattedPrice}`;
  }
};

menu.addDishToCourses('appetizers', 'amuse-bouche', 3.29);
menu.addDishToCourses('appetizers', 'trout crostini', 5.89);
menu.addDishToCourses('appetizers', 'parsnip quiche', 2.45);
menu.addDishToCourses('mains', 'rosemary, fennel and lemon chicken (SV 174)', 13.59);
menu.addDishToCourses('mains', 'all day pork shoulder (SV 158)', 14.60);
menu.addDishToCourses('mains', 'braised short ribs (M&C 314)', 18.98);
menu.addDishToCourses('mains', 'chopped arugula salad (SV 139)', 4.50);
menu.addDishToCourses('mains', 'black eyed peas', 3.50);
menu.addDishToCourses('mains', 'pizza beans (SK)', 5.99);
menu.addDishToCourses('mains', 'sweet potato and black bean tacos (SK)', 6.18);
menu.addDishToCourses('mains', '')
menu.addDishToCourses('mains', 'roasted chicken variation (SV 174)', 13.59);
menu.addDishToCourses('desserts', 'baked Alaskan', 11.00);
menu.addDishToCourses('desserts', 'apple pie', 6.45);
menu.addDishToCourses('desserts', 'bananas foster', 10.50);

let meal = menu.generateRandomMeal();
console.log(meal);
