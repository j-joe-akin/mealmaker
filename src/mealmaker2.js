let weekDay = {
  _menus: {
    mains: [],
    sides: []
  },
  get mains() {
    return;
  },
  set mains(mainIn) {
    return;
  },
  get sides() {
    return;
  },
  set sides(sideIn) {
    return;
  },
  get _menus() {
    return {
      mains: this._menus.mains;
      sides: this._menus.sides;
    };
  },
  addDishToMenu(courseName, dishName, dishPrice) {
    const dish = {
      _name: dishName,
      _price: dishPrice
    };
    this._menus[courseName].push(dish);
  },
}
