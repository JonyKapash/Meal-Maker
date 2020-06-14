const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetiz) {
    return (this._courses.appetizers = appetiz);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainss) {
    return (this._courses.mains = mainss);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertss) {
    return (this._courses.desserts = dessertss);
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const rendomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[rendomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal contains ${appetizer.name}, ${main.name}, 
      and ${dessert.name}, the total price of your meal is ${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "bread", 8.4);
menu.addDishToCourse("appetizers", "chips", 8.9);
menu.addDishToCourse("appetizers", "potatos", 9.6);

menu.addDishToCourse("mains", "tofu", 9.15);
menu.addDishToCourse("mains", "salmon", 27.2);
menu.addDishToCourse("mains", "steak", 18.5);

menu.addDishToCourse("desserts", "pie", 6.35);
menu.addDishToCourse("desserts", "ice cream", 7.5);
menu.addDishToCourse("desserts", "pie", 8);

let meal = menu.generateRandomMeal();
console.log(meal);
